import re

import frappe


def execute():
    for name in frappe.get_all("Print Style", pluck="name"):
        css = frappe.db.get_value("Print Style", name, "css") or ""
        new_css = re.sub(r"@import\s+url\([^)]*fonts\.googleapis\.com[^)]*\);?\s*", "", css)
        if new_css != css:
            frappe.db.set_value("Print Style", name, "css", new_css)
