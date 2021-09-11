let ctx = document.getElementById('aeonChart');
const data = {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN','JUL','AGO','SET','OUT','NOV','DEZ'],
    datasets: [
      {
        label: 'Receita',
        data: [21,236,32,12,35,15,-15,0,159,-36,88,350],
        borderColor: '#00b7ff8c',
        backgroundColor: '#00b7ff8c',
      },
      {
        label: 'Custo',
        data: [210,23,32,102,305,105,-85,80,15,-66,28,50],
        borderColor: '#18a0fbc7',
        backgroundColor: '#18a0fbc7',
      }
    ]
  };
let aeonChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    onResize: null,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  },
});