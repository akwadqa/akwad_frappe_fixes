frappe.pages["akwad-backup-downloads"].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Akwad Backup Downloads"),
		single_column: true,
	});

	page.add_inner_button(__("Download Latest Backup"), function () {
		window.open(
			"/api/method/akwad_frappe_fixes.api.backups.download_latest_backup",
			"_blank"
		);
	});

	// Disabled: "Download Files Backup" feature not needed currently.
	// page.add_inner_button(__("Download Files Backup"), function () {
	// 	frappe.call({
	// 		method: "akwad_frappe_fixes.api.backups.schedule_files_backup",
	// 		args: { user_email: frappe.session.user_email },
	// 	});
	// });

	var $body = $('<div class="backup-downloads-list" style="padding: 15px;"></div>').appendTo(
		page.body
	);

	function render(files) {
		$body.empty();

		if (!files.length) {
			$body.append(`<p class="text-muted">${__("No backup files found.")}</p>`);
			return;
		}

		var $table = $(`
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>${__("File")}</th>
						<!-- <th>${__("Modified")}</th> -->
						<th>${__("Size")}</th>
						<th>${__("Encrypted")}</th>
						<th></th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		`).appendTo($body);

		var $tbody = $table.find("tbody");

		files.forEach(function (file) {
			var size_kb = (file.size / 1024).toFixed(1) + " K";
			var download_url =
				"/api/method/akwad_frappe_fixes.api.backups.download_backup?file_name=" +
				encodeURIComponent(file.file_name);

			$(`
				<tr>
					<td>${frappe.utils.escape_html(file.file_name)}</td>
					<!-- <td>${file.modified}</td> -->
					<td>${size_kb}</td>
					<td>${file.encrypted ? __("Yes") : __("No")}</td>
					<td><a class="btn btn-xs btn-default" href="${download_url}" target="_blank">${__(
				"Download"
			)}</a></td>
				</tr>
			`).appendTo($tbody);
		});
	}

	frappe.call({
		method: "akwad_frappe_fixes.api.backups.list_backups",
		callback: function (r) {
			render(r.message || []);
		},
	});
};
