
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

const ctx2 = document.getElementById('Chart2').getContext('2d');
const chartData2 = [4, 8, 5, 7, 8, 3, 4];

if (ctx2)
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

const ctx3 = document.getElementById('Chart3').getContext('2d');
const chartData3 = [12, 7, 4, 5, 5, 6];

if (ctx3)
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'jully'],
            datasets: [{
                label: 'sales this year',
                data: chartData3,
                borderWidth: 2,
                borderColor: 'rgb(97, 174, 65)',
                backgroundColor: 'rgb(97, 174, 65)',
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

const ctx4 = document.getElementById('Chart4').getContext('2d');
const chartData4 = [4, 8, 5, 7, 8, 3, 4];

if (ctx4)
    new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'jully'],
            datasets: [{
                label: 'profit this year',
                data: chartData4,
                borderWidth: 2,
                borderColor: 'rgb(84,170,213)',
                backgroundColor: 'rgb(84,170,213)',
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