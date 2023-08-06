function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `<i class="fa-regular fa-clock"></i> ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    document.querySelector('.current-time').innerHTML = formattedTime;
}
updateTime();
setInterval(updateTime, 1000);


function getMonthName(month) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month];
}
function displayDate() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = getMonthName(currentDate.getMonth());
    const year = currentDate.getFullYear();

    const formattedDate = `<i class="fa-regular fa-calendar"></i> ${day} ${month}, ${year}`;

    document.querySelector('.dateDisplay').innerHTML = formattedDate;
}
displayDate();

// ****************************************************************************

const ctx1 = document.getElementById('Chart1').getContext('2d');
const chartData1 = [12, 7, 4, 5, 5, 6];

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

const ctx2 = document.getElementById('Chart2').getContext('2d');
const chartData2 = [4, 8, 5, 7, 8, 3, 4];

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'jully'],
        datasets: [{
            label: 'profit this year',
            data: chartData2,
            borderWidth: 2,
            borderColor: 'rgb(98, 89, 202)',
            backgroundColor: 'rgb(98, 89, 202)',
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

// ****************************************************************************


const gr1 = document.querySelector('.growth-rate1');
const gr2 = document.querySelector('.growth-rate2');

function grContent(chartData) {
    // Growth Rate = ((New Value - Old Value) / Old Value) * 100
    const n = chartData.length;
    const lastMonth = Math.round(((chartData[n - 1] - chartData[n - 2]) / chartData[n - 2]) * 10000) / 100;
    const last6Months = Math.round(((chartData[n - 1] - chartData[0]) / chartData[0]) * 10000) / 100;

    return `
        <p>
            Last month:
            <i style="color:${lastMonth >= 0 ? 'var(--positive)' : 'var(--negative)'};transform: rotate(${lastMonth >= 0 ? '-90deg' : '90deg'});" class="fa-solid fa-arrow-right"></i>
            <span style="color:${lastMonth >= 0 ? 'var(--positive)' : 'var(--negative)'}">
                ${lastMonth > 0 ? '+' : ''}${lastMonth}%
            </span>
            </p>
        <p>
            Last 6 months:
            <i style="color:${last6Months >= 0 ? 'var(--positive)' : 'var(--negative)'};transform: rotate(${last6Months >= 0 ? '-90deg' : '90deg'});" class="fa-solid fa-arrow-right"></i>
            <span style="color:${last6Months >= 0 ? 'var(--positive)' : 'var(--negative)'}">
                ${last6Months > 0 ? '+' : ''}${last6Months}%
            </span>
        </p>
        `;
}
gr1.innerHTML = grContent(chartData1);
gr2.innerHTML = grContent(chartData2);