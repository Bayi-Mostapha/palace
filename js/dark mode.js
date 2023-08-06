document.querySelector('.theme-btn').addEventListener('click', changeTheme);
let themeBtn = document.querySelector('.theme-btn');
let theme = localStorage.getItem('P.A.-M.B.-18-theme');
if (theme === null) {
    theme = 'light';
    localStorage.setItem('P.A.-M.B.-18-theme', theme);
} else if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

window.addEventListener('storage', (event) => {
    const theme1 = event.newValue;
    if (theme1 === 'light') {
        theme = 'light';
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.body.classList.remove('dark-mode');
    }
    else if (theme1 === 'dark') {
        theme = 'dark';
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        document.body.classList.add('dark-mode');
    }
});

function changeTheme() {
    if (theme === 'light') {
        theme = 'dark';
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        document.body.classList.add('dark-mode');
        localStorage.setItem('P.A.-M.B.-18-theme', theme);
    } else if (theme === 'dark') {
        theme = 'light';
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.body.classList.remove('dark-mode');
        localStorage.setItem('P.A.-M.B.-18-theme', theme);
    }
}