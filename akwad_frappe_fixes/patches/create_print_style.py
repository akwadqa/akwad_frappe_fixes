import frappe

def execute():
    try:
        css_content = """ @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
            :root {  
                --selected-color: #4463F0;  
            } 
            .bg-theader {
                background-color:#f0f0f0; 
            }
            thead {
                background-color: lightgray !important;
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
            .custom-report {
                font-family: "Rubik" , sans-serif;
                font-size: 13px;
            }

            .custom-report h2 {
                background-color:#f0f0f0 !important ;
                color: black;
                padding: 10px;
                text-align: center;
                border: 2px solid black;
                max-width: 60%;
                box-sizing: border-box;
                font-size: 20px;
                font-weight: bold;
                letter-spacing: 1px;
                margin: auto;
            }


            .custom-report table {
                width: 100%;
                border-collapse: collapse;
                border-top: 3px solid var(--selected-color);
                border-bottom: 3px solid var(--selected-color) !important;
            }

            .custom-report table td {
                padding: 10px 8px;
                border: 1px dashed var(--selected-color) !important; 
                text-align: left;
                vertical-align: middle;
            }

            .custom-report table thead th {
                background-color: #f0f0f0;
                color: #000;
                font-weight: bold;
                text-align: center;
                border-bottom: 3px solid var(--selected-color) !important;
            }

            .custom-report table tbody td:nth-child(4),
            .custom-report table tbody td:nth-child(5),
            .custom-report table tbody td:nth-child(6) {
                text-align: right;
                font-weight: bold;
            }


            .custom-report table tbody tr:first-child td:nth-child(-n+2),
            .custom-report table tbody tr:nth-last-child(3) td:nth-child(-n+2),
            .custom-report table tbody tr:nth-last-child(2) td:nth-child(-n+2) {
                border-right: none !important;
                text-align:left;
            }
            .custom-report table tbody tr:first-child td:nth-child(n+2):nth-child(-n+3),
            .custom-report table tbody tr:nth-last-child(3) td:nth-child(n+2):nth-child(-n+3),
            .custom-report table tbody tr:nth-last-child(2) td:nth-child(n+2):nth-child(-n+3) {
                border-left: none !important;
            }

            .custom-report table tbody tr:first-child td:nth-child(3),
            .custom-report table tbody tr:nth-last-child(3) td:nth-child(3),
            .custom-report table tbody tr:nth-last-child(2) td:nth-child(3) {
                border-right: 1px dashed var(--selected-color) !important; 
            }

            .custom-report table tbody tr:first-child td:nth-child(1) {
                font-weight: bold;
            }

            .custom-report table tbody tr:nth-last-child(3) td {
                border-top: 2px solid var(--selected-color) !important; 
                border-bottom: 1px dashed var(--selected-color) !important;
                font-weight: bold;
            }

            .custom-report table tbody tr:nth-last-child(2) td {
                font-weight: bold;
            }
            .custom-report table tbody tr:nth-last-child(2) td:nth-child(1) {
                text-align: right !important; 
                padding-right: 20px; 
            }

            .custom-report table tbody tr:last-child {
                border-top: 2px dashed var(--selected-color);
                border-bottom: 3px solid var(--selected-color);
                padding: 15px 8px;
                font-weight: bold;
            }

            .custom-report table tbody tr:last-child td {
                border: none !important;
            }

            .custom-report table tbody tr:last-child td:nth-child(1) {
                text-align: left !important;
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