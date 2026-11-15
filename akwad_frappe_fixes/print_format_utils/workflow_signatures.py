import frappe
from frappe.utils import format_datetime, cint

@frappe.whitelist()
def print_format_shows_signature(print_format):
    """Whether the given Print Format has the "Include Signature" checkbox enabled."""
    if not print_format:
        return False
    return bool(frappe.db.get_value("Print Format", print_format, "include_signature"))


@frappe.whitelist()
def set_include_signature(print_format, include_signature):
    """Toggle the "Include Signature" checkbox directly in the database.

    Standard Print Formats reject normal document saves outside of developer
    mode (see Print Format.validate), so this bypasses the document save flow
    entirely to let users control the setting from the Print Format form.
    """
    frappe.has_permission("Print Format", ptype="write", doc=print_format, throw=True)
    frappe.db.set_value("Print Format", print_format, "include_signature", cint(include_signature))


@frappe.whitelist()
def get_workflow_signatures_for_print(doctype, docname):
    doc = frappe.get_doc(doctype, docname)

    states_with_signature = frappe.get_all(
        "Workflow State",
        filters={"show_signature": 1},
        pluck="name"
    )

    if not states_with_signature:
        return []

    comments = frappe.get_all(
        "Comment",
        filters={
            "reference_doctype": doc.doctype,
            "reference_name": doc.name,
            "content": ["in", states_with_signature]
        },
        fields=["comment_email", "content", "creation"],
        order_by="creation asc"
    )

    signatures = []

    for comment in comments:
        user = frappe.db.get_value("User", {"email": comment.comment_email},
                                   ["name", "full_name", "email", "user_signature"],
                                   as_dict=True)
        if not user:
            continue

        signatures.append({
            "workflow_state": comment.content,
            "user": user.full_name,
            "email": user.email,
            "signature": user.user_signature,
            "timestamp": format_datetime(comment.creation)
        })
    return signatures