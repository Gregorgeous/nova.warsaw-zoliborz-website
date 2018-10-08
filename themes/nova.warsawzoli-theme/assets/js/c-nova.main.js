document.addEventListener('DOMContentLoaded', function () {
    onMenuClick();
});


function onMenuClick() {
    document.querySelectorAll('#desktopMenu.links li').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let previousActiveLink = document.querySelector('#desktopMenu.links li.active');
            if (previousActiveLink === null) {
                link.classList.add('active');
                expandSubMenu(link, link.firstChild.getAttribute('data-menu-name'), "show")
            } else if (previousActiveLink === link) {
                previousActiveLink.classList.remove('active');
                expandSubMenu(link, link.firstChild.getAttribute('data-menu-name'), "hide")
            } else {
                previousActiveLink.classList.remove('active');
                link.classList.add('active');
                expandSubMenu(link, link.firstChild.getAttribute('data-menu-name'), "switch")
            }
        })
    })
}


function expandSubMenu(linkHtmlNode, menuLink, triggerState) {
    let matchingSubmenu = document.querySelector(`.hero-menu-expanded--submenu[data-menu-name="${menuLink}"]`);

    if (matchingSubmenu === null) {
        return;
    }

    document.querySelector(`.hero-menu-expanded`).classList.add('active');

    if (triggerState === "show") {
        matchingSubmenu.classList.add('active');
    } else if (triggerState === "hide") {
        matchingSubmenu.classList.remove('active');
        document.querySelector(`.hero-menu-expanded`).classList.remove('active');
    } else if (triggerState === "switch") {
        document.querySelector(".hero-menu-expanded--submenu.active").classList.remove('active');
        matchingSubmenu.classList.add('active');
    }


    // let currentExpandedMenu = document.querySelector(".hero-menu-expanded--submenu.active")
    // if (currentExpandedMenu === null) {
    //     matchingSubmenu.classList.add('active');
    // } else if (currentExpandedMenu.getAttribute('data-menu-name') === menuLink) {
    //     console.log("b");
    //     console.log("this is current expanded menu");
    //     console.log(currentExpandedMenu);
    //     console.log("this is target menu");
    //     console.log(matchingSubmenu);


    //     matchingSubmenu.classList.remove('active');
    // } else{
    //     console.log("c");
    //     currentExpandedMenu.classList.remove('active');
    //     matchingSubmenu.classList.add('active');
    // }
}