import frappe


def execute():
    """Ensure voice recording formats can be uploaded."""
    system_settings = frappe.get_single("System Settings")

    allowed = system_settings.allowed_file_extensions or ""
    extensions = {
        ext.strip().upper() for ext in allowed.splitlines() if ext.strip()
    }
    extensions.update({"OGG", "WEBM"})

    # Preserve ordering by sorting alphabetically for consistency
    system_settings.allowed_file_extensions = "\n".join(sorted(extensions))
    system_settings.save(ignore_permissions=True)
