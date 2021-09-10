let ctx = document.getElementById('aeonChart');
const data = {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN','JUL','AGO','SET','OUT','NOV','DEZ'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [21,236,32,12,35,15,-15,0,159,-36,88,350],
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
      {
        label: 'Dataset 2',
        data: [210,23,32,102,305,105,-85,80,15,-66,28,50],
        borderColor: 'red',
        backgroundColor: 'red',
      }
    ]
  };
let aeonChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },
});