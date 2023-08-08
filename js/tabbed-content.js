const navBtns = document.querySelectorAll('.tabbed-nav-btn');
const tabsContent = document.querySelectorAll('.tabbed-content');

navBtns.forEach((navBtn, i) => {
    navBtn.addEventListener('click', () => {
        navBtns.forEach(navBtn => {
            navBtn.classList.remove('active-tabbed-nav');
        })
        navBtn.classList.add('active-tabbed-nav');
        tabsContent.forEach(tabContent => {
            tabContent.classList.add('hide-content');
            tabContent.classList.remove('show-content');
        });
        tabsContent[i].classList.add('show-content');
    });
});



const ctx1 = document.getElementById('Chart1').getContext('2d');
const chartData1 = [12, 7, 4, 5, 5, 6];

if (ctx1)
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'jully'],
            datasets: [{
                label: 'sales this year',
                data: chartData1,
                borderWidth: 2,
                borderColor: 'rgb(84, 170, 213)',
                backgroundColor: 'rgb(84, 170, 213)',
                radius: 0,
                tension: 0.4
            }]
        },
        options: {
            hitRadius: 30,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });