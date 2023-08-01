function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg> 
                    ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

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

    const formattedDate = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
                        ${day} ${month}, ${year}`;

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
        responsive: true,
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
        responsive: true,
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
            <svg style="fill:${lastMonth > 0 ? 'var(--succes)' : 'var(--canceled)'};transform: rotate(${lastMonth > 0 ? '-90deg' : '90deg'});" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            <span style="color:${lastMonth > 0 ? 'var(--succes)' : 'var(--canceled)'}">
                ${lastMonth > 0 ? '+' : ''}${lastMonth}%
            </span>
            </p>
        <p>
            Last 6 months:
            <svg style="fill:${last6Months > 0 ? 'var(--succes)' : 'var(--canceled)'};transform: rotate(${last6Months > 0 ? '-90deg' : '90deg'});" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            <span style="color:${last6Months > 0 ? 'var(--succes)' : 'var(--canceled)'}">
                ${last6Months > 0 ? '+' : ''}${last6Months}%
            </span>
        </p>
        `;
}
gr1.innerHTML = grContent(chartData1);
gr2.innerHTML = grContent(chartData2);