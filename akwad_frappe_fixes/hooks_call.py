import frappe

# update User language from language picker
@frappe.whitelist()
def update_user_language(user, language):
    user_doc = frappe.get_doc("User", user)
    user_doc.language = language
    user_doc.save()

@frappe.whitelist()
def get_user_language(user):
    user_doc = frappe.get_doc("User", user)
    language = user_doc.language
    return language