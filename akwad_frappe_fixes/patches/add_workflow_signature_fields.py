import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields
from frappe import _

def execute():
    custom_fields = {
        "Workflow State": [
            {
                "fieldname": "show_signature",
                "label": _("Show Signature"),
                "fieldtype": "Check",
                "insert_after": "state",
                "module": "Akwad Frappe Fixes",
                "description": _("Show this user's signature in the print format when this state is reached."),
            }
        ],

        "User": [
            {
                "fieldname": "user_signature",
                "label": _("User Signature"),
                "fieldtype": "Attach Image",
                "insert_after": "user_image",
                "module": "Akwad Frappe Fixes",
                "description": _("Signature image to display in workflow approvals."),
            }
        ],
    }

    create_custom_fields(custom_fields, ignore_validate=True)
    frappe.db.commit()

    frappe.log_error("Workflow Signature patch executed successfully", "Patch Log")
