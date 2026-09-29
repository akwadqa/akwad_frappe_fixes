import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields
from frappe import _

def execute():
    custom_fields = {
        "Print Format": [
            {
                "fieldname": "include_signature",
                "label": _("Include Signature"),
                "fieldtype": "Check",
                "insert_after": "disabled",
                "default": "1",
                "module": "Akwad Frappe Fixes",
                "description": _("Show the workflow approval signatures section when this print format is printed."),
            }
        ],
    }

    create_custom_fields(custom_fields, ignore_validate=True)
    frappe.db.commit()

    frappe.log_error("Print Format signature toggle patch executed successfully", "Patch Log")
