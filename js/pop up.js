const popupBtn = document.querySelector('.show-pop-up');
const closePopup = document.querySelector('.close-pop-up');

const popup = document.querySelector('.pop-up-container');
const popupContent = document.querySelector('.pop-up-content')
const popupBg = document.querySelector('.pop-up-bg');

popupBtn.addEventListener('click', () => {
    popupBg.classList.add('show-pop-up-bg');
    popupContent.classList.add('show-pop-up-content');
    popup.classList.add('show-pop-up');
});
popupBg.addEventListener('click', () => {
    popupBg.classList.remove('show-pop-up-bg');
    popupContent.classList.remove('show-pop-up-content');
    setTimeout(() => {
        popup.classList.remove('show-pop-up');
    }, 200);
});
closePopup.addEventListener('click', () => {
    popupBg.classList.remove('show-pop-up-bg');
    popupContent.classList.remove('show-pop-up-content');
    setTimeout(() => {
        popup.classList.remove('show-pop-up');
    }, 200);
});