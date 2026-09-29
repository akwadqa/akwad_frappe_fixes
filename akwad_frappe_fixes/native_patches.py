import frappe
import frappe.utils.pdf
from akwad_frappe_fixes.native_overrides import custom_upload_file_to_s3

try:
    # 1. Move the risky import INSIDE the try block
    from offsite_backups.offsite_backups.doctype.s3_backup_settings import s3_backup_settings
    
    # 2. Apply the patch
    s3_backup_settings.upload_file_to_s3 = custom_upload_file_to_s3

except Exception as e:
    # 3. Catch Exception instead of ImportError, because boto3 throws an AttributeError 
    # when OpenSSL is mismatched during asset builds.
    print(f"[akwad_frappe_fixes] Skipping native patching for offsite_backups: {e}")
