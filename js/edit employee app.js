const fileInput = document.getElementById('file');
const fileLabel = document.querySelector('.file-label');

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        fileLabel.textContent = files[0].name;
    } else {
        fileLabel.textContent = 'upload a picture of the employee. PNG or JPG';
    }
});


let inputs = document.querySelectorAll('.select-container');

inputs.forEach(input => {
    let selected = input.querySelector('.selected-item');
    let options = input.querySelectorAll('.option');
    let menu = input.querySelector('.select');

    selected.addEventListener('click', () => {
        inputs.forEach(otherInput => {
            if (otherInput !== input) {
                otherInput.querySelector('.select').classList.remove('show-menu');
            }
        });
        menu.classList.toggle('show-menu');
    });

    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('show-menu');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(option => {
                option.classList.remove('selected');
            });
            selected.querySelector('p').textContent = option.querySelector('.opt-radio').value;
            option.classList.add('selected');
        });
    });
});