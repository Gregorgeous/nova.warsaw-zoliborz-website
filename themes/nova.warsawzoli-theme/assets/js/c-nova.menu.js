document.addEventListener('DOMContentLoaded', function () {
    mobileMenuClick();
});

function mobileMenuClick() {
    document.querySelectorAll('#mobileMenu.links>li:not(:first-child)').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // let correspondingSubmenu = link.nextElementSibling;
            let previousActiveLink = document.querySelector('#mobileMenu.links>li.active');
            if (previousActiveLink === null) {
                link.classList.add('active');
                expandOrHideSubmenu(link, "expand");
            } else if (previousActiveLink === link) {
                previousActiveLink.classList.remove('active');
                expandOrHideSubmenu(previousActiveLink, "hide");
            } else {
                previousActiveLink.classList.remove('active');
                expandOrHideSubmenu(previousActiveLink, "hide");
                link.classList.add('active');
                expandOrHideSubmenu(link, "expand");

            }
        })
    })
}

function expandOrHideSubmenu(linkNode, expand) {
    if (expand === "expand") {
        return linkNode.nextElementSibling.classList.add('active');
    } else {
        return linkNode.nextElementSibling.classList.remove('active');
    }
}
