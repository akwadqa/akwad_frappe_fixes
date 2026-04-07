import frappe  
from frappe.utils import get_url  
  
@frappe.whitelist()  
def get_qr_print_link(doctype, name, print_format=None):    
    if not print_format:  
        print_format = (  
            frappe.form_dict.get("format")  
            or frappe.form_dict.get("print_format")  
            or frappe.db.get_value("Print Format", {"doc_type": doctype, "standard": 1}, "name")  
            or ""  
        )  
  
    key = frappe.get_doc(doctype, name).get_document_share_key()  
  
    return frappe.get_template(  
        "akwad_frappe_fixes/templates/qr_code.html"  
    ).render({  
        "url": get_url(),  
        "doctype": doctype,  
        "name": name,  
        "print_format": print_format,  
        "key": key,  
    })
