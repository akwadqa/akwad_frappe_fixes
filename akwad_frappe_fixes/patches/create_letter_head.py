import frappe

def execute():
    try:

        content_html = """{% set company_address = "" %}
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
            </table>"""

        footer_html =  """<style>
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
                    font-family: 'Rubik', sans-serif;
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


        if frappe.db.exists("Letter Head", "Standard Letter Head"):
            doc = frappe.get_doc("Letter Head", "Standard Letter Head")
            doc.content = content_html
            doc.footer = footer_html
            doc.save(ignore_permissions=True)
        else:
            frappe.get_doc({
                "doctype": "Letter Head",
                "letter_head_name": "Standard Letter Head",
                "is_default": 1,
                "disabled": 0,
                "source": "HTML",
                "footer_source": "HTML",
                "content": content_html,
                "footer": footer_html
            }).insert(ignore_permissions=True)

        frappe.db.commit()

    except Exception:
        frappe.log_error("Patch Error: Create/Update Letter Head", frappe.get_traceback())
        raise