frappe.ui.form.on('Print Style', {
    custom_color(frm) {
        if (frm.doc.print_style_name === 'Standard Print Style') {
            update_css_with_color(frm);
        }
    },

    refresh(frm) {
        if (
            frm.doc.print_style_name === 'Standard Print Style' &&
            frm.doc.custom_color
        ) {
            update_css_with_color(frm);
        }
    }
});

function update_css_with_color(frm) {
    let css = frm.doc.css || '';

    if (css.includes(':root')) {
        if (css.includes('--selected-color')) {
            css = css.replace(
                /--selected-color:\s*[^;]+;/g,
                `--selected-color: ${frm.doc.custom_color};`
            );
        } else {
            css = css.replace(
                /:root\s*{([\s\S]*?)}/,
                `:root {\n$1\n  --selected-color: ${frm.doc.custom_color};\n}`
            );
        }
    } else {
        css = `:root {\n  --selected-color: ${frm.doc.custom_color};\n}\n\n${css}`;
    }

    frm.set_value('css', css);
}
