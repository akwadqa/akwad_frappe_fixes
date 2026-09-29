import frappe

def execute():
    try:
        css_content = """:root {
                --selected-color: #4463F0;
            }

            .print-format td, .print-format th {
                padding: 2px 4px !important;
            }

            .pf-font {
                font-family: "Rubik", sans-serif;
            }

            .pf-heading {
                margin: 10px 0;
                width: 100%;
                text-align: right;
                text-transform: uppercase;
                font-size: 40px;
                font-weight: normal;
            }

            .pf-item-table {
                width: 100%;
                margin: 20px 0;
            }

            .pf-item-table td {
                border: 1px dashed black;
                vertical-align: middle!important;
            }

            .pf-item-table th {
                font-weight: normal;
                color: white;
                text-align: center;
            }

            .pf-terms {
                margin-top: 100px;
            }
        """

        if frappe.db.exists("Print Style", "Standard Print Style"):
            doc = frappe.get_doc("Print Style", "Standard Print Style")
            doc.css = css_content
            doc.save(ignore_permissions=True)
        else:
            frappe.get_doc({
                "doctype": "Print Style",
                "print_style_name": "Standard Print Style",
                "disabled": 0,
                "standard": 0,
                "css": css_content
            }).insert(ignore_permissions=True)

        frappe.db.commit()

    except Exception:
        frappe.log_error("Patch Error: Create/Update Print Style",frappe.get_traceback())
        raise