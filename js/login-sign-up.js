//prevent default
const passwords = document.querySelectorAll('.password');
passwords.forEach(password => {
    const pwdBtn = password.querySelector('.show-hide-pwd');
    const pwdInput = password.querySelector('input');
    pwdBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (pwdInput.type === 'password') {
            pwdInput.type = 'text';
            pwdBtn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
        } else {
            pwdInput.type = 'password';
            pwdBtn.innerHTML = '<i class="fa-regular fa-eye"></i>';
        }
    });
});

// const carouselBtns = document.querySelectorAll('.manual-btn');
// const radio1 = document.querySelector('#radio1');
// const radio2 = document.querySelector('#radio2');
// const radio3 = document.querySelector('#radio3');
// if (radio1.checked)
//     document.querySelector('.radio1-l').style.backgroundColor = 'white';
// radio1.addEventListener('change', () => {
//     rmBg();
//     document.querySelector('.radio1-l').style.backgroundColor = 'white';
// });
// radio2.addEventListener('change', () => {
//     rmBg();
//     document.querySelector('.radio2-l').style.backgroundColor = 'white';

// });
// radio3.addEventListener('change', () => {
//     rmBg();
//     document.querySelector('.radio3-l').style.backgroundColor = 'white';
// });
// function rmBg() {
//     carouselBtns.forEach(carouselBtn => {
//         carouselBtn.style.backgroundColor = 'transparent';
//     });
// }

const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    const inputTXT = input.querySelector('input');
    const label = input.querySelector('p');

    inputTXT.addEventListener('input', (e) => {
        if (e.value !== '') {
            label.classList.add('label');
            label.classList.remove('placeholder');
        } else {
            label.classList.remove('label');
            label.classList.add('placeholder');
        }
    });
    inputTXT.addEventListener('blur', () => {
        if (inputTXT.value !== '') {
            label.classList.add('label');
            label.classList.remove('placeholder');
        } else {
            label.classList.remove('label');
            label.classList.add('placeholder');
        }
    });
});