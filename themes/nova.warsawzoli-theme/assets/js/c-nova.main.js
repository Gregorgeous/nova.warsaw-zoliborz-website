document.addEventListener("DOMContentLoaded", function() {
	onMenuClick();
});

function onMenuClick() {
	document.querySelectorAll("#desktopMenu.links li").forEach(link => {
		let menuLink = link.firstElementChild.getAttribute("data-menu-name");
		let matchingSubmenu = document.querySelector(
			`#desktop-submenu[data-menu-name="${menuLink}"]`
		);
		link.addEventListener("click", event => {
			if (matchingSubmenu) {
				event.preventDefault();
			}
			let previousActiveLink = document.querySelector(
				"#desktopMenu.links li.active"
			);
			if (matchingSubmenu) {
				if (previousActiveLink === null) {
					link.classList.add("active");
					expandSubMenu(
						link,
						link.firstElementChild.getAttribute("data-menu-name"),
						"show"
					);
				} else if (previousActiveLink === link) {
					previousActiveLink.classList.remove("active");
					expandSubMenu(
						link,
						link.firstElementChild.getAttribute("data-menu-name"),
						"hide"
					);
				} else {
					previousActiveLink.classList.remove("active");
					link.classList.add("active");
					expandSubMenu(
						link,
						link.firstElementChild.getAttribute("data-menu-name"),
						"switch"
					);
				}
			}
		});
	});
}

function expandSubMenu(linkHtmlNode, menuLink, triggerState) {
	let matchingSubmenu = document.querySelector(
		`#desktop-submenu[data-menu-name="${menuLink}"]`
	);

	if (matchingSubmenu === null) {
		return;
	}

	if (triggerState === "show") {
		matchingSubmenu.classList.add("active");
	} else if (triggerState === "hide") {
		matchingSubmenu.classList.remove("active");
		document.querySelector(`#desktop-submenu`).classList.remove("active");
	} else if (triggerState === "switch") {
		document
			.querySelector("#desktop-submenu.active")
			.classList.remove("active");
		matchingSubmenu.classList.add("active");
	}
}
