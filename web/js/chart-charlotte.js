//Charlotte
// chart

const chart2elCharlotte = document.getElementById("chart2-charlotte").getContext('2d');
const chart3elCharlotte = document.getElementById("chart3-charlotte").getContext('2d');

let chart2Charlotte = new Chart(chart2elCharlotte, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Spending",
          backgroundColor: ["green","green","green","green","green","green","green","green","green","green","green","green"],
          data: [85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85]
        },
        {
            label: "Spending",
            backgroundColor: ["red","red","red","red","red","red","red","red","red","red","red","red"],
            data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
        },
        {
            label: "Spending",
            backgroundColor: ["orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange"],
            data: [30, 50, 32, 37, 55, 40, 103, 83, 70, 50, 96, 83]
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

let chart3Charlotte = new Chart(chart3elCharlotte, {
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
