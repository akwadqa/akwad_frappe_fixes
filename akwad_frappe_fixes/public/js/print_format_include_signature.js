// Standard Print Formats reject normal saves outside of developer mode, so the
// "Include Signature" checkbox is persisted directly via a whitelisted method
// instead of going through frm.save().
frappe.ui.form.on('Print Format', {
    include_signature(frm) {
        if (frm.doc.standard !== 'Yes' || frm.is_new()) {
            return;
        }

        frappe.call({
            method: 'akwad_frappe_fixes.print_format_utils.workflow_signatures.set_include_signature',
            args: {
                print_format: frm.doc.name,
                include_signature: frm.doc.include_signature
            },
            freeze: true,
            callback() {
                frappe.show_alert({
                    message: __('Include Signature setting updated'),
                    indicator: 'green'
                });
                frm.reload_doc();
            }
        });
    }
});
