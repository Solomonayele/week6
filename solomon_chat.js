let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['coke', 'pepsi', 'Either', 'Neither', 'sprite'],
        datasets: [{
            label: 'number of votes',
            data: [18,14,7,10,89],
            backgroundColor: ['red','blue','black','green','yello']
        }]

    },
    options: {
        scales: {
            yAxes: [{
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }
})