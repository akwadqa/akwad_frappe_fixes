import frappe
from frappe.utils import format_datetime

@frappe.whitelist()
def get_workflow_signatures_for_print(doctype, docname):

    doc = frappe.get_doc(doctype, docname)

    actions = frappe.get_all(
        "Workflow Action",
        filters={"reference_doctype": doc.doctype, "reference_name": doc.name},
        fields=["completed_by", "workflow_state", "creation"],
        order_by="creation asc"
    )
    

    signatures = []
    for action in actions:
        show_signature = frappe.get_value("Workflow State", action.workflow_state, "show_signature")
        if not show_signature:
            continue
        
        if not action.completed_by:
            frappe.log_error(f"No user found for workflow action {action.name}", "Workflow Signature Debug")
            continue 

        user = frappe.get_doc("User", action.completed_by)
        signatures.append({
            "workflow_state": action.workflow_state,
            "user": user.full_name,
            "email": user.email,
            "signature": user.user_signature,
            "timestamp": format_datetime(action.creation)
        })

    return signatures
