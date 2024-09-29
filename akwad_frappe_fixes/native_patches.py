import frappe.utils.pdf
from frappe.integrations.doctype.s3_backup_settings import s3_backup_settings
from akwad_frappe_fixes.native_overrides import custom_get_pdf , custom_upload_file_to_s3

frappe.utils.pdf.get_pdf = custom_get_pdf
s3_backup_settings.upload_file_to_s3 = custom_upload_file_to_s3