import frappe
import os
import os.path

def custom_upload_file_to_s3(filename, folder, conn, bucket):
    destpath = os.path.join(f"{frappe.local.site}/{folder}", os.path.basename(filename))
    try:
        frappe.log_error("Uploading to S3", str(filename))
        conn.upload_file(filename, bucket, destpath)  # Requires PutObject permission
    except Exception as e:
        frappe.log_error("Error uploading to S3", str(e))
        print("Error uploading: %s" % (e))
