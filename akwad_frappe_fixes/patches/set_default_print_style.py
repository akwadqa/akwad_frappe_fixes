import frappe  
  
def execute():  
    try:  
        if frappe.db.exists("Print Style", "Standard Print Style"):  
            settings = frappe.get_single("Print Settings")  
            settings.print_style = "Standard Print Style"  
            settings.save(ignore_permissions=True)  
  
            print_style = frappe.get_doc("Print Style", "Standard Print Style")  
            print_style.custom_color = "#00589c"  
            if print_style.css and "--selected-color" not in print_style.css:  
                print_style.css = f""":root {{  
            --selected-color: {print_style.custom_color};  
            }}  
            {print_style.css}  
            """  
            print_style.save(ignore_permissions=True)  
          
        frappe.db.commit()  
    except Exception:  
        frappe.log_error("Patch Error: Set Default Print Style", frappe.get_traceback())  
        raise