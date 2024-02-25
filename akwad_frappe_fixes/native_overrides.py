import frappe

# enhanced to include if_owner
from frappe.core.doctype.user_type.user_type import add_role_permissions
def add_role_permissions_for_user_doctypes(self):
    perms = ["read", "write", "create", "submit", "cancel", "amend", "delete", "if_owner", "report"]
    for row in self.user_doctypes:
        docperm = add_role_permissions(row.document_type, self.role)

        values = {perm: row.get(perm) or 0 for perm in perms}
        for perm in ["print", "email", "share"]:
            values[perm] = 1

        frappe.db.set_value("Custom DocPerm", docperm, values)
