import datetime
import os
from pathlib import Path

import frappe
from frappe import _
from frappe.utils import get_site_path
from frappe.utils.data import convert_utc_to_system_timezone

PAGE_NAME = "akwad-backup-downloads"


def check_backup_download_permission():
	"""Access is governed by the 'Akwad Backup Downloads' Page's allowed roles.

	Admins grant/revoke roles via Role Permission Manager (Document Type:
	Page, Page: akwad-backup-downloads) -- no code change or fixture needed.
	"""
	if not frappe.get_doc("Page", PAGE_NAME).is_permitted():
		frappe.throw(_("You are not permitted to access backup downloads."), frappe.PermissionError)


def get_backup_files():
	backups_path = Path(get_site_path("private", "backups"))
	files = [x for x in backups_path.iterdir() if x.is_file() and x.name.endswith("sql.gz")]
	files.sort(key=lambda x: x.stat().st_mtime, reverse=True)
	return files


@frappe.whitelist()
def list_backups():
	check_backup_download_permission()

	backup_limit = frappe.get_system_settings("backup_limit")
	files = get_backup_files()[:backup_limit]

	return [
		{
			"file_name": f.name,
			"modified": convert_utc_to_system_timezone(
				datetime.datetime.fromtimestamp(f.stat().st_mtime, tz=datetime.timezone.utc)
			).strftime("%a %b %d %H:%M %Y"),
			"size": f.stat().st_size,
			"encrypted": "-enc" in f.name,
		}
		for f in files
	]


def stream_backup_file(file_path: Path):
	with open(file_path, "rb") as f:
		frappe.response["filecontent"] = f.read()
	frappe.response["type"] = "download"
	frappe.response["filename"] = file_path.name


@frappe.whitelist()
def download_backup(file_name: str):
	check_backup_download_permission()

	backups_path = Path(get_site_path("private", "backups")).resolve()
	file_path = (backups_path / os.path.basename(file_name)).resolve()

	if backups_path not in file_path.parents or not file_path.is_file() or not file_path.name.endswith("sql.gz"):
		frappe.throw(_("Invalid backup file."), frappe.PermissionError)

	stream_backup_file(file_path)


@frappe.whitelist()
def download_latest_backup():
	check_backup_download_permission()

	files = get_backup_files()
	if not files:
		frappe.throw(_("No backup files found."))

	stream_backup_file(files[0])


@frappe.whitelist()
def schedule_files_backup(user_email: str):
	"""Same as frappe.desk.page.backups.backups.schedule_files_backup,
	but gated by our Page permission instead of a hardcoded System Manager check.
	"""
	from frappe.utils.background_jobs import enqueue, get_jobs

	check_backup_download_permission()

	queued_jobs = get_jobs(site=frappe.local.site, queue="long")
	method = "frappe.desk.page.backups.backups.backup_files_and_notify_user"

	if method not in queued_jobs[frappe.local.site]:
		enqueue(method, queue="long", user_email=user_email)
		frappe.msgprint(_("Queued for backup. You will receive an email with the download link"))
	else:
		frappe.msgprint(_("Backup job is already queued. You will receive an email with the download link"))


# Disabled: "Get Backup Encryption Key" button was removed from the page UI.
# @frappe.whitelist()
# def get_backup_encryption_key():
# 	"""Same as frappe.utils.backups.get_backup_encryption_key,
# 	but gated by our Page permission instead of a hardcoded System Manager check.
# 	"""
# 	from frappe.utils.backups import get_or_generate_backup_encryption_key
#
# 	check_backup_download_permission()
#
# 	return get_or_generate_backup_encryption_key()
