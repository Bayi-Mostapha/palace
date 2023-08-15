const dropContainers = document.querySelectorAll('.dropdown-container');

if (dropContainers)
    dropContainers.forEach(dropContainer => {
        const dropBtn = dropContainer.querySelector('.mb-dropdown-btn');
        const dropDown = dropContainer.querySelector('.mb-dropdown');

        dropBtn.addEventListener('click', () => {
            dropContainers.forEach(dropContainer1 => {
                if (dropContainer1 !== dropContainer)
                    dropContainer1.querySelector('.mb-dropdown').classList.remove('show');
            })
            dropDown.classList.toggle('show');
        });
        dropDown.addEventListener('mouseleave', () => {
            dropDown.classList.remove('show');
        });
    });
