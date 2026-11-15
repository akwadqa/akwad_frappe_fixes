from frappe import _
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields


def execute():
    create_custom_fields(
        {
            "Print Format": [
                {
                    "fieldname": "include_signature",
                    "label": _("Include Signature"),
                    "fieldtype": "Check",
                    "insert_after": "disabled",
                    "default": "1",
                    "module": "Akwad Frappe Fixes",
                    "description": _(
                        "Show the workflow approval signatures section when this print format is printed."
                    ),
                }
            ],
        },
        ignore_validate=True,
    )
