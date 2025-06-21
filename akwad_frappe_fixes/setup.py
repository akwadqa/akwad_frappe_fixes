import frappe
from frappe import _
from .property_setters import get_property_setters  # separate file to keep it clean

def after_install():
    insert_property_setters()

def insert_property_setters():
    property_setters = get_property_setters()
    for ps in property_setters:
        if not frappe.db.exists("DocType", ps["doc_type"]):
            continue
        if not frappe.db.exists("Property Setter", ps["name"]):
            try:
                frappe.get_doc(ps).insert(ignore_permissions=True)
            except Exception as e:
                frappe.log_error(
                    f"Error inserting Property Setter {ps['name']}: {e}",
                    title="after_install Property Setter Insertion Error"
                )
