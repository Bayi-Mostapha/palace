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
    })
})