import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields
from frappe import _

def execute():
    try:
        custom_fields = {
            "Print Style": [
                {
                    "fieldname": "custom_color",
                    "module": "Akwad Frappe Fixes",
                    "fieldtype": "Color",
                    "label": _("Color"),
                    "insert_after": "standard"
                }
            ]
        }

        create_custom_fields(custom_fields, ignore_validate=True)
        frappe.db.commit()

    except Exception:
        frappe.log_error("Patch Error: Add Custom Field", frappe.get_traceback())
        raise