const dropContainers = document.querySelectorAll('.dropdown-container');

dropContainers.forEach(dropContainer => {
    const dropBtn = dropContainer.querySelector('.dropdown-btn');
    const dropDown = dropContainer.querySelector('.dropdown');

    dropBtn.addEventListener('click', () => {
        dropContainers.forEach(dropContainer1 => {
            if (dropContainer1 !== dropContainer)
                dropContainer1.querySelector('.dropdown').classList.remove('show');
        })
        dropDown.classList.toggle('show');
    });
    dropDown.addEventListener('mouseleave', () => {
        dropDown.classList.remove('show');
    });
});
