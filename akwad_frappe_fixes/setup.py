import frappe
from frappe import _
from .property_setters import get_property_setters  # separate file to keep it clean

def after_install():
    insert_property_setters()
    apply_site_settings()

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
    extensions = ["PDF", "JPG", "JPEG", "PNG"]
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
    settings_to_hide = ["View Website", "Apps", "Toggle Theme", "Session Defaults", "My Profile"]
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
