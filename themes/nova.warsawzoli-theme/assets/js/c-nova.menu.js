document.addEventListener("DOMContentLoaded", function() {
	mobileMenuClick();
});

function mobileMenuClick() {
	document
		.querySelectorAll("#mobileMenu.links>li:not(:first-child)")
		.forEach((link, li_index) => {
			let menuLink = link.firstElementChild.getAttribute("data-menu-name");
			let matchingSubmenu = document.querySelector(
				`#desktop-submenu[data-menu-name="${menuLink}"]`
			);
			link.addEventListener("click", event => {
				if (matchingSubmenu) {
					event.preventDefault();
				} else {
					return;
				}
				let previousActiveLink = document.querySelector(
					"#mobileMenu.links>li.active"
				);
				if (previousActiveLink === null) {
					link.classList.add("active");
					expandOrHideSubmenu(link, "expand");
					if (
						document.querySelectorAll("#mobileMenu.links>li").length >= 9 &&
						li_index >= 5
					) {
						document
							.querySelector("#mobileMenu")
							.classList.add("height-adjusted");
					}
				} else if (previousActiveLink === link) {
					previousActiveLink.classList.remove("active");
					expandOrHideSubmenu(previousActiveLink, "hide");
					if (
						document.querySelectorAll("#mobileMenu.links>li").length >= 9 &&
						li_index >= 5
					) {
						document
							.querySelector("#mobileMenu")
							.classList.remove("height-adjusted");
					}
				} else {
					previousActiveLink.classList.remove("active");
					expandOrHideSubmenu(previousActiveLink, "hide");
					link.classList.add("active");
					expandOrHideSubmenu(link, "expand");
				}
			});
		});
}

function expandOrHideSubmenu(linkNode, expand) {
	if (linkNode.nextElementSibling === null) {
		return;
	}
	if (expand === "expand") {
		return linkNode.nextElementSibling.classList.add("active");
	} else {
		return linkNode.nextElementSibling.classList.remove("active");
	}
}
