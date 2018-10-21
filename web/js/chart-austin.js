//austin
// chart

const chart2elAustin = document.getElementById("chart2-austin").getContext('2d');
const chart3elAustin = document.getElementById("chart3-austin").getContext('2d');

let chart2Austin = new Chart(chart2elAustin, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Spending",
          backgroundColor: ["green","green","green","green","green","green","green","green","green","green","green","green"],
          data: [60, 30, 50, 40, 60, 70, 50, 40, 50, 30, 60, 70]
        },
        {
            label: "Spending",
            backgroundColor: ["red","red","red","red","red","red","red","red","red","red","red","red"],
            data: [70, 50, 40, 90, 30, 50, 40, 60, 50, 30, 60, 70]
        },
        {
            label: "Spending",
            backgroundColor: ["orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange"],
            data: [50, 30, 60, 20, 30, 50, 40, 60, 70, 50, 40, 70]
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: 'Monthly Expenses',
        class: 'card-titles'
      }
    }
});

let chart3Austin = new Chart(chart3elAustin, {
    type: 'doughnut',
    data: {
      labels: ["Transportation", "Entertainment", "Utility", "Rent"],
      datasets: [
        {
          label: "Some metric",
          backgroundColor: ["#73C2FB", "#38bfc3","#0F52BA","#007bff"],
          data: [2478,5267,734,784]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Expense Categories'
      }
    }
});
