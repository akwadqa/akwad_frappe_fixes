import frappe.utils.pdf
from akwad_frappe_fixes.native_overrides import custom_get_pdf

frappe.utils.pdf.get_pdf = custom_get_pdf