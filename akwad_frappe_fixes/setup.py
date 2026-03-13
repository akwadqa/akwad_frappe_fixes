import frappe
from frappe import _
from .property_setters import get_property_setters  # separate file to keep it clean
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields


def after_install():
    insert_property_setters()
    apply_site_settings()
    insert_letter_head()
    insert_print_style()
    create_custom_fields(get_custom_fields(), ignore_validate=True)
    set_default_print_style()
    
         
    

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


def apply_site_settings():
    # System Settings
    system_settings = frappe.get_single("System Settings")
    system_settings.enable_onboarding = 0
    system_settings.disable_document_sharing = 1
    system_settings.float_precision = 2
    system_settings.currency_precision = 2
    system_settings.allow_login_using_mobile_number = 1
    system_settings.allow_login_using_user_name = 1
    system_settings.disable_standard_email_footer = 1
    system_settings.hide_footer_in_auto_email_reports = 1
    system_settings.attach_view_link = 0
    system_settings.store_attached_pdf_document = 0
    system_settings.max_file_size = 2
    extensions = ["PDF", "JPG", "JPEG", "PNG", "OGG", "WEBM"]
    system_settings.allowed_file_extensions = "\n".join(extensions)
    system_settings.disable_system_update_notification = 1
    system_settings.disable_change_log_notification = 1
    system_settings.allow_error_traceback = 0
    system_settings.save(ignore_permissions=True)

    # Website Settings
    website_settings = frappe.get_single("Website Settings")
    website_settings.title_prefix = "Akwad"
    website_settings.app_name = "Akwad"
    website_settings.app_logo = "https://erp.akwad.qa/files/JmbdK6K.png"
    website_settings.banner_image = "https://erp.akwad.qa/files/akwad-logo_symbol.png"
    website_settings.splash_image = "https://erp.akwad.qa/files/akwad-logo_symbol.png"
    website_settings.brand_html = "Akwad Programming"
    website_settings.favicon = "https://erp.akwad.qa/files/akwad-logo_symbol.png"
    website_settings.copyright = "All rights reserved - Akwad 2025"
    website_settings.footer_logo = "https://erp.akwad.qa/files/akwad-logo.svg"
    website_settings.hide_footer_signup = 1
    website_settings.footer_powered = "Akwad Programming"
    website_settings.save(ignore_permissions=True)

    # Portal Settings
    portal_settings = frappe.get_single("Portal Settings")
    portal_settings.default_portal_home = "/desk"
    portal_settings.hide_standard_menu = 1
    for row in portal_settings.menu:
        row.enabled = 0
    portal_settings.save(ignore_permissions=True)

    # Log Settings
    log_settings = frappe.get_single("Log Settings")
    log_settings.logs_to_clear = []
    doctype_list = [
        "Error Log", "Email Queue", "Scheduled Job Log", "Submission Queue", "Prepared Report",
        "Webhook Request Log", "Unhandled Email", "Reminder", "Integration Request", "Activity Log",
        "Route History", "Deleted Document", "View Log", "Web Page View",
        "Notification Log", "Access Log"
    ]

    for doctype in doctype_list:
        log_settings.append("logs_to_clear", {
            "ref_doctype": doctype,
            "days": 1
        })
    log_settings.save(ignore_permissions=True)

    # Navbar Settings
    navbar_settings = frappe.get_single("Navbar Settings")
    settings_to_hide = ["View Website", "Apps", "Toggle Theme", "Session Defaults", "My Profile", "Toggle Full Width", "Workspace Settings"]
    for row in navbar_settings.settings_dropdown:
        if row.item_label in settings_to_hide:
            row.hidden = 1
    for row in navbar_settings.help_dropdown:
        row.hidden = 0 if row.item_label == "Keyboard Shortcuts" else 1
    navbar_settings.save(ignore_permissions=True)

    # Global Search Settings
    global_search_settings = frappe.get_single("Global Search Settings")
    global_search_settings.allowed_in_global_search = []
    global_search_settings.save(ignore_permissions=True)

def insert_letter_head():
    if not frappe.db.exists("Letter Head", "Standard Letter Head"):
        frappe.get_doc({
            "doctype": "Letter Head",
            "letter_head_name": "Standard Letter Head",
            "is_default": 1,
            "disabled": 0,
            "source": "HTML",
            "footer_source": "HTML",
            "content": """{% set company_address = "" %}
            {% set default_company = frappe.db.get_single_value("Global Defaults" , "default_company")%}
            {% if default_company %}
                {% set address_doc_name = frappe.db.get_value("Dynamic Link", {"link_doctype" : "Company" , "link_name" : default_company , "parenttype": "Address"} , "parent") %}
                
                {% if address_doc_name %}
                    {% set company_address = frappe.get_doc("Address", address_doc_name) %}
                {% endif %}
            {% endif %}

            {% set app_logo = frappe.db.get_single_value("Website Settings", "app_logo") %}


            <table style="width: 100%; font-size: 16px;">
                <tbody>
                    <tr>
                        <td style="width: 70%; line-height: 1.5; vertical-align: middle!important;">
                            {% if company_address %}
                                <p style="font-weight: bold;">{{ company_address.address_title }}</p>
                                <p>{{ company_address.address_line1 }}</p>
                                <p>{{ company_address.city }}, {{ company_address.country }}</p>
                            {% endif %}
                        </td>
                        <td style="width: 30%; text-align: right; vertical-align: middle!important;">
                            {% if app_logo %}
                                <img src="{{ app_logo }}" style="max-height: 100px; width: auto!important;">
                            {% endif %}
                        </td>
                    </tr>
                </tbody>
            </table>""",
                        "footer": """<style>
                @media print {
                .footer {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    text-align: center;
                    font-family: 'Zain', sans-serif;
                }
                    @page {
                        size: A4;
                        margin: 0.3in !important;
                    }
                }

                .footer {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    text-align: center;
                    font-family: 'Zain', sans-serif;
                }
            </style>

            {% set company_address = "" %}
            {% set default_company = frappe.db.get_single_value("Global Defaults" , "default_company")%}
            {% if default_company %}
                {% set address_doc_name = frappe.db.get_value("Dynamic Link", {"link_doctype" : "Company" , "link_name" : default_company , "parenttype": "Address"} , "parent") %}
                
                {% if address_doc_name %}
                    {% set company_address = frappe.get_doc("Address", address_doc_name) %}
                {% endif %}
            {% endif %}

            {% if company_address %}
                © 2025 <b>{{ company_address.address_title }}</b> | {{ company_address.address_line2 }} | Tel: {{ company_address.phone }} | Email: <b>{{ company_address.email_id }}</b>
            {% endif %}"""
        }).insert(ignore_permissions=True)


def get_custom_fields():
	return {
		"Print Style": [
            {
				"fieldname": "custom_color",
				"module": "Akwad Frappe Fixes",
				"fieldtype": "Color",
				"label": _("Color"),
				"insert_after": "standard"
            }
		]
	}


def insert_print_style():
    if not frappe.db.exists("Print Style", "Standard Print Style"):
        frappe.get_doc({
            "doctype": "Print Style",
            "print_style_name": "Standard Print Style",
            "disabled": 0,
            "standard": 0,
            "css": """ @import url('https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap'); 
            thead {
                background-color: lightgray !important;
            }

            .print-format td, .print-format th {
                padding: 2px 4px !important; /* reduce row height */
            }

            .ql-editor, .pf-font {
                font-family: "Zain", sans-serif !important;
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
                font-family: "Zain" , sans-serif;
                font-size: 13px;
            }

            .custom-report h2 {
                background-color: var(--primary-color);
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
                border-top: 3px solid var(--primary-color);
                border-bottom: 3px solid var(--primary-color) !important;
            }

            .custom-report table td {
                padding: 10px 8px;
                border: 1px dashed var(--primary-color) !important; 
                text-align: left;
                vertical-align: middle;
            }

            .custom-report table thead th {
                background-color: #f0f0f0;
                color: #000;
                font-weight: bold;
                text-align: center;
                border-bottom: 3px solid var(--primary-color) !important;
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
                border-right: 1px dashed var(--primary-color) !important; 
            }

            .custom-report table tbody tr:first-child td:nth-child(1) {
                font-weight: bold;
            }

            .custom-report table tbody tr:nth-last-child(3) td {
                border-top: 2px solid var(--primary-color) !important; 
                border-bottom: 1px dashed var(--primary-color) !important;
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
                border-top: 2px dashed var(--primary-color);
                border-bottom: 3px solid var(--primary-color);
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
        }).insert(ignore_permissions=True)


def set_default_print_style():
    settings = frappe.get_single("Print Settings")
    settings.print_style = "Standard Print Style"
    settings.save(ignore_permissions=True)

    print_style = frappe.get_doc("Print Style", "Standard Print Style")
    print_style.custom_color = "#00589c"
    if print_style.css:
        if "--primary-color" not in print_style.css:
            print_style.css = f""":root {{
        --primary-color: {print_style.custom_color};
        }}
        {print_style.css}
        """
    print_style.save(ignore_permissions=True)
