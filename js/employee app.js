const showBtns = document.querySelectorAll('.view-btn');
const infoContainers = document.querySelectorAll('.extra-info');
showBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        infoContainers.forEach(container => {
            container.classList.remove('show-i');
        });
        const infoContainer = document.querySelector(`#i${i}`);
        infoContainer.classList.add('show-i');
        location.href = `#i${i}`;
    });
});