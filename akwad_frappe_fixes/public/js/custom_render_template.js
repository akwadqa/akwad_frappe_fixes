frappe.render_template = (function (original) {
	return function (name, data) {
		let template;

		if (name === "print_template") {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", "/assets/akwad_frappe_fixes/html/print_template.html", false);
			xhr.send(null);
			if (xhr.status === 200) {
				template = xhr.responseText;
			}
		} else if (name.indexOf(" ") !== -1) {
			template = name;
		} else {
			template = frappe.templates[name];
		}

		if (data === undefined) data = {};
		if (!template) frappe.throw(`Template <b>${name}</b> not found.`);

		return frappe.render(template, data, name);
	};
})(frappe.render_template);