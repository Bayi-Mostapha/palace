fScreen = document.getElementById("fullscreenButton");

function toggleFullscreen() {
    const element = document.documentElement;

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }

        fScreen.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        fScreen.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
}

fScreen.addEventListener('click', toggleFullscreen);

// ***************************************************************

let pinnedElements = [];
const pinBtns = document.querySelectorAll('.pin');
const navLinks = document.querySelectorAll('.nav-link');
const pinnedElementsContainer = document.querySelector('.pinned-elements');
const navLinksContainer = document.querySelector('.nav-body');

pinBtns.forEach((pin, i) => {
    pin.addEventListener('click', () => {
        const index = i;

        if (pinnedElements.includes(index)) {
            pinnedElements = pinnedElements.filter((pinnedIndex) => pinnedIndex !== index);
            updateDOM();
        } else {
            pinnedElements.push(index);
            updateDOM();
        }

    });
});

function updateDOM() {
    pinnedElementsContainer.innerHTML = '';
    navLinksContainer.innerHTML = '';
    let flag = 0;

    navLinks.forEach((navLink, i) => {
        if (pinnedElements.includes(i)) {
            pinnedElementsContainer.append(navLink);
            flag = 1;
        } else {
            navLinksContainer.append(navLink);
        }
    });
    if (flag) {
        document.querySelector('.pinned').textContent = 'pinned';
        document.querySelector('.break').innerHTML = '<hr>';
    } else {
        document.querySelector('.pinned').innerHTML = '';
        document.querySelector('.break').innerHTML = '';
    }
}

// **********************************************************
const userBtn = document.querySelector('.user-img1');
const userInfo = document.querySelector('.user-info');

// const dropBtn = document.querySelector('.nav-dropdown-btn');
// const dropDown = document.querySelector('.nav-dropdown');

userBtn.addEventListener('click', () => {
    userInfo.classList.toggle('show');
    // dropDown.classList.remove('show');

});
userInfo.addEventListener('mouseleave', () => {
    userInfo.classList.remove('show');
});

// dropBtn.addEventListener('click', () => {
//     dropDown.classList.toggle('show');
//     userInfo.classList.remove('show');

// });
// dropDown.addEventListener('mouseleave', () => {
//     dropDown.classList.remove('show');
// });

// ****************************************************************************

const mainContent = document.querySelector('main');
const mainNav = document.querySelector('.main-nav');
const closeNav = document.querySelector('.close-nav');
const openNav = document.querySelector('.open-nav');
const sideNav = document.querySelector('.side-bar');


closeNav.addEventListener('click', () => {
    openNav.classList.remove('hide2');

    sideNav.classList.add('hide');
    sideNav.classList.remove('side-bar-opened');
    sideNav.classList.add('side-bar-closed');

    mainContent.classList.add('side-bar-closed');
    mainNav.classList.add('side-bar-closed');
    mainContent.classList.remove('side-bar-opened');
    mainNav.classList.remove('side-bar-opened');
});

openNav.addEventListener('click', () => {
    openNav.classList.add('hide2');

    sideNav.classList.remove('hide');
    sideNav.classList.add('side-bar-opened');
    sideNav.classList.remove('side-bar-closed');

    mainContent.classList.remove('side-bar-closed');
    mainNav.classList.remove('side-bar-closed');
    mainContent.classList.add('side-bar-opened');
    mainNav.classList.add('side-bar-opened');
});

// ********************************************************************

const submenuBtns = document.querySelectorAll('.submenu-btn');

submenuBtns.forEach(submenuBtn => {
    submenuBtn.addEventListener('click', () => {
        const submenu = submenuBtn.querySelector('.submenu');
        const submenuState = submenuBtn.querySelector('.submenu-state');
        submenu.classList.toggle('show-submenu');
        submenuState.classList.toggle('rotate');
    });
});