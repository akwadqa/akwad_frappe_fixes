from . import __version__ as app_version

app_name = "akwad_frappe_fixes"
app_title = "Akwad Frappe Fixes"
app_publisher = "Akwad Programming"
app_description = "This app fixes some UI and Funcationality things in Frappe Native Apps."
app_email = "support@akwad.qa"
app_license = "MIT"

# Includes in <head>
# ------------------

fixtures = [

        {"dt" : "Property Setter", "filters" : [["module","in", "Akwad Frappe Fixes"]]},
        {"dt" : "Custom Field", "filters" : [["module","in", "Akwad Frappe Fixes"]]}
]

# include js, css files in header of desk.html
app_include_css = "/assets/akwad_frappe_fixes/css/akwad_frappe_fixes_desk.css"
# app_include_js = "/assets/akwad_frappe_fixes/js/akwad_frappe_fixes.js"

# app_include_js = "fileUploader.bundle.js"

# include js, css files in header of web template
# web_include_css = "/assets/akwad_frappe_fixes/css/akwad_frappe_fixes_web.css"
web_include_js = "/assets/akwad_frappe_fixes/js/akwad_frappe_fixes_web.js"

web_include_js = [
    "/assets/akwad_frappe_fixes/js/override.js",
    "fileUploader.bundle.js"
]
# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "akwad_frappe_fixes/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "akwad_frappe_fixes.utils.jinja_methods",
#	"filters": "akwad_frappe_fixes.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "akwad_frappe_fixes.install.before_install"
# after_install = "akwad_frappe_fixes.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "akwad_frappe_fixes.uninstall.before_uninstall"
# after_uninstall = "akwad_frappe_fixes.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "akwad_frappe_fixes.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"akwad_frappe_fixes.tasks.all"
#	],
#	"daily": [
#		"akwad_frappe_fixes.tasks.daily"
#	],
#	"hourly": [
#		"akwad_frappe_fixes.tasks.hourly"
#	],
#	"weekly": [
#		"akwad_frappe_fixes.tasks.weekly"
#	],
#	"monthly": [
#		"akwad_frappe_fixes.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "akwad_frappe_fixes.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "akwad_frappe_fixes.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "akwad_frappe_fixes.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["akwad_frappe_fixes.utils.before_request"]
# after_request = ["akwad_frappe_fixes.utils.after_request"]

# Job Events
# ----------
# before_job = ["akwad_frappe_fixes.utils.before_job"]
# after_job = ["akwad_frappe_fixes.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"akwad_frappe_fixes.auth.validate"
# ]
