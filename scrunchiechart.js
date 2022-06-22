<canvas id="scrunchieChart" width="400" height="400"></canvas>
const mixedChart = new Chart(ctx, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40]
        }, {
            type: 'line',
            label: 'Line Dataset',
            data: [50, 50, 50, 50],
        }],
        labels: ['Fall Scrunchies', 'Halloween Scrunchies', 'Plaid Scrunchies', 'Linen Scrunchies', 'The Mandalorian', 'Minky Scrunchies', 'Polkadot Scrunchies', 'B&W Scrunchies', 'Pastel Scrunchies', 'Orange Scrunchies', 'Floral Scrunchies', 'Christmas Scrunchies', 'Stars & Stripes', 'Pink Scrunchies', 'Green Scrunchies', 'Other Scrunchies', 'Satin Scrunchies', 'Harry Potter']
    },
    options: options
});
 