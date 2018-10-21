
'use strict'

var range = $('#range');
var output = $('#output');

$(range).on('mousemove change', function() {
    $(output).text(range.val());
});

var range2 = $('#range2');
var output2 = $('#output2');

$(range2).on('mousemove change', function() {
    $(output2).text(range2.val());
});

// chart

const chart2el = document.getElementById("chart2").getContext('2d');
const chart3el = document.getElementById("chart3").getContext('2d');
const navToggle = document.getElementById("nav-toggle");
const pageWrap = document.getElementById("pagewrap");

let chart2 = new Chart(chart2el, {
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

let chart3 = new Chart(chart3el, {
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

function toggleMenu() {
  pageWrap.classList.toggle("page-container--collapsed");
}



// slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = "Walking and Shared Rides";

var currentCar = document.getElementById("lifestyle-car");
var currentHome = document.getElementById("lifestyle-home");

//car
slider.oninput = function() {
    // output.innerHTML = this.value;
    var currentVal = this.value;
    if (currentVal < 20) {
        currentCar.src = "img/car/uber.jpg";
        output.innerHTML = "Walking and Shared Rides";
    } else if (currentVal >= 20 && currentVal < 50) {
        currentCar.src = "img/car/toyota.jpg";
        output.innerHTML = "Used Toyota Corolla";
    } else if (currentVal >= 50 && currentVal < 80) {
        currentCar.src = "img/car/prius.jpg";
        output.innerHTML = "Prius";
    } else if (currentVal >= 80 && currentVal < 90) {
        currentCar.src = "img/car/bmw.jpg";
        output.innerHTML = "BMW";
    } else {
        currentCar.src = "img/car/lambo.jpg";
        output.innerHTML = "Lamborghini";
    }
}

//home
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = "Stay on the Street";

slider2.oninput = function() {
    // output2.innerHTML = this.value;
    var currentVal = this.value;
    console.log(currentVal);
    if (currentVal < 20) {
        currentHome.src = "img/home/street.jpg";
        output2.innerHTML = "Stay on the Street";
    } else if (currentVal >= 20 && currentVal < 50) {
        currentHome.src = "img/home/roommate.jpg";
        output2.innerHTML = "Room Mates";
    } else if (currentVal >= 50 && currentVal < 80) {
        currentHome.src = "img/home/1bedroom.jpg";
        output2.innerHTML = "1 Bedroom Apartment";
    } else if (currentVal >= 80 && currentVal < 90) {
        currentHome.src = "img/home/home.jpg";
        output2.innerHTML = "Home";
    } else {
        currentHome.src = "img/home/mansion.jpg";
        output2.innerHTML = "Mansion";
    }

}

