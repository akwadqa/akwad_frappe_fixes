from akwad_frappe_fixes.native_overrides import add_role_permissions_for_user_doctypes
from frappe.core.doctype.user_type.user_type import UserType


UserType.add_role_permissions_for_user_doctypes = add_role_permissions_for_user_doctypes
