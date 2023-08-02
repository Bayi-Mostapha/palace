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