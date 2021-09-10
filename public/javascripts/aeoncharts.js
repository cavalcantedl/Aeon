let ctx = document.getElementById('aeonChart');
const data = {
    labels: ['05', '06', '07', '08', '09', '10'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [21,236,32,12,35,15],
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
      {
        label: 'Dataset 2',
        data: [55,66,132,102,5,150],
        borderColor: 'red',
        backgroundColor: 'red',
      }
    ]
  };
let aeonChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});