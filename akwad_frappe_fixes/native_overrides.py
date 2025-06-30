import frappe
import os
import os.path

def custom_upload_file_to_s3(filename, folder, conn, bucket):
    destpath = os.path.join(f"{frappe.local.site}/{folder}", os.path.basename(filename))
    try:
        print("Uploading file:", filename)
        frappe.log_error(title="Uploading file:" , message = str(filename))
        conn.upload_file(
            filename,
            bucket,
            destpath,
            ExtraArgs={"StorageClass": "GLACIER"}  
        )
    except Exception as e:
        frappe.log_error(title="Error uploading" , message = str(e))
        print("Error uploading: %s" % (e))
