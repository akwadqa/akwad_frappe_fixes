$.extend(frappe, {    
    show_language_picker() {
        if (window.show_language_picker) {
            frappe
                .call("frappe.translate.get_all_languages", {
                    with_language_name: true,
                })
                .then((res) => {
                    let language_list = res.message;
                    let language = frappe.get_cookie("preferred_language");
                    let language_codes = [];
                    let language_switcher = $("#language-switcher .form-control");
    
                    language_list.forEach((language_doc) => {
                        if (language_doc.language_code === 'en' || language_doc.language_code === 'ar') {
                            language_codes.push(language_doc.language_code);
                            language_switcher.append(
                                $("<option></option>")
                                    .attr("value", language_doc.language_code)
                                    .text(language_doc.language_name)
                            );
                        }
                    });
    
                    $("#language-switcher").removeClass("hide");

                    if (frappe.session.user !== "Guest") {
                        frappe.call({
                            method: "akwad_frappe_fixes.hooks_call.get_user_language",
                            args: {
                                user: frappe.session.user
                            }
                        }).then((response) => {
                            language = response.message;
                            language_switcher.val(language);
                        });
                    } else {
						language =
							language ||
							(language_codes.includes(navigator.language) ? navigator.language : "en");
						language_switcher.val(language);
					}

                    document.documentElement.lang = language;
                    language_switcher.change(() => {
                        const lang = language_switcher.val();
                        document.cookie = `preferred_language=${lang}`;
                        if(frappe.session.user !== "Guest") {
                            return frappe.call({
                                method: "akwad_frappe_fixes.hooks_call.update_user_language",
                                args: {
                                    user: frappe.session.user,
                                    language: lang
                                }
                            }).then(() => {
                                window.location.reload();
                            });
                        } else {
                            window.location.reload();
                        }
                    });
                });
        }
    }
})