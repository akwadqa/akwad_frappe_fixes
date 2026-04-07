__version__ = '0.0.1'
try:
  import akwad_frappe_fixes.native_patches

except ImportError as e:
    # During pip install, frappe is not available yet — this prevents crash
    print(f"[akwad_frappe_fixes] Skipping native patching (ImportError): {e}")
