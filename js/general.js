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

        fScreen.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/></svg>';
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

        fScreen.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" /></svg>';
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

const dropBtn = document.querySelector('.nav-dropdown-btn');
const dropDown = document.querySelector('.nav-dropdown');

userBtn.addEventListener('click', () => {
    userInfo.classList.toggle('show');
    dropDown.classList.remove('show');

});
userInfo.addEventListener('mouseleave', () => {
    userInfo.classList.remove('show');
});

dropBtn.addEventListener('mouseover', () => {
    dropDown.classList.add('show');
    userInfo.classList.remove('show');

});
dropDown.addEventListener('mouseleave', () => {
    dropDown.classList.remove('show');
});

// ****************************************************************************

const closeNav = document.querySelector('.close-nav');
const openNav = document.querySelector('.open-nav');
const sideNav = document.querySelector('.side-bar');

closeNav.addEventListener('click', () => {
    sideNav.classList.add('hide');
    openNav.classList.remove('hide2');
});

openNav.addEventListener('click', () => {
    sideNav.classList.remove('hide');
    openNav.classList.add('hide2');
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