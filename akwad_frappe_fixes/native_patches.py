import frappe.utils.pdf
from offsite_backups.offsite_backups.doctype.s3_backup_settings import s3_backup_settings
from akwad_frappe_fixes.native_overrides import custom_get_pdf, custom_upload_file_to_s3

    # Patch only if all imports succeed
    s3_backup_settings.upload_file_to_s3 = custom_upload_file_to_s3

except ImportError as e:
    # During pip install, frappe is not available yet — this prevents crash
    print(f"[akwad_frappe_fixes] Skipping native patching (ImportError): {e}")
