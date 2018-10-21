
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

var sf = 45;
let chart2 = new Chart(chart2el, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Spending",
          backgroundColor: ["green","green","green","green","green","green","green","green","green","green","green","green"],
          data: [83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83]
        },
        {
            label: "Spending",
            backgroundColor: ["red","red","red","red","red","red","red","red","red","red","red","red"],
            data: [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45]
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

var lastval = 1;
//car
slider.oninput = function() {
    // output.innerHTML = this.value;
    var sfsaving = parseInt($('#sfsaving').text());
    var currentVal = this.value;
    if (currentVal == 1) {
        currentCar.src = "img/car/uber.jpg";
        output.innerHTML = "Walking and Shared Rides";
        if(lastval > 1)
        {
          $('#sfsaving').text(sfsaving + 1000);  
          sf = sf  - 1;
        }
        lastval = currentVal;
    } else if (currentVal == 2) {
        currentCar.src = "img/car/toyota.jpg";
        output.innerHTML = "Used Toyota Corolla";
        if(lastval < 2)
        {
          $('#sfsaving').text(sfsaving - 1000);
          sf = sf  + 1; 
        }
        else
        {
         $('#sfsaving').text(sfsaving + 5000); 
         sf = sf  - 5;
        }
        lastval = currentVal;
    } else if (currentVal == 3) {
        currentCar.src = "img/car/prius.jpg";
        output.innerHTML = "Prius";
        if(lastval < 3)
        {
          $('#sfsaving').text(sfsaving - 5000);
          sf = sf  + 5;
        }
        else
        {
         $('#sfsaving').text(sfsaving + 10000); 
         sf = sf  - 10;
        }
        lastval = currentVal;

    } else if (currentVal == 4) {
        currentCar.src = "img/car/bmw.jpg";
        output.innerHTML = "BMW";
        if(lastval < 4)
        {
          $('#sfsaving').text(sfsaving - 10000);
          sf = sf  + 10;
        }
        else
        {
         $('#sfsaving').text(sfsaving + 20000); 
         sf = sf  - 20;
        }
        lastval = currentVal;
    } else {
        currentCar.src = "img/car/lambo.jpg";
        output.innerHTML = "Lamborghini";
        $('#sfsaving').text(sfsaving - 20000);
        sf = sf  + 20;
        lastval = currentVal;
    }
    
    chart2.data.datasets[1].data = [parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf)];
    chart2.update();
}

//home
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = "Room Mates";

var lastval2 = 2
slider2.oninput = function() {
    // output2.innerHTML = this.value;
    var currentVal = this.value;
    var sfsaving = parseInt($('#sfsaving').text());

    console.log(currentVal);
    if (currentVal == 1) {
        currentHome.src = "img/home/street.jpg";
        output2.innerHTML = "Stay on the Street";
        if(lastval2 > 1)
        {
          $('#sfsaving').text(sfsaving + 25000);  
                    sf = sf  - 15;

        }
    } else if (currentVal == 2) {
        currentHome.src = "img/home/roommate.jpg";
        output2.innerHTML = "Room Mates";
        if(lastval2 < 2)
        {
          $('#sfsaving').text(sfsaving - 25000);
          sf = sf  + 15;
        }
        else
        {
         $('#sfsaving').text(sfsaving + 15000); 
         sf = sf  - 15;
        }
    } else if (currentVal == 3) {
        currentHome.src = "img/home/1bedroom.jpg";
        output2.innerHTML = "1 Bedroom Apartment";
        if(lastval2 < 3)
        {
          $('#sfsaving').text(sfsaving - 15000);
          sf = sf  + 15;
        }
        else
        {
         $('#sfsaving').text(sfsaving + 25000); 
         sf = sf  - 25;
        }
    } else if (currentVal == 4) {
        currentHome.src = "img/home/home.jpg";
        output2.innerHTML = "Home";
        if(lastval2 < 4)
        {
          $('#sfsaving').text(sfsaving - 25000);
          sf = sf  + 25;
        }
        else
        {
         $('#sfsaving').text(sfsaving + 100000); 
         sf = sf  - 100;
        }
    } else {
        currentHome.src = "img/home/mansion.jpg";
        output2.innerHTML = "Mansion";
        $('#sfsaving').text(sfsaving - 100000);
        sf = sf  + 100;
    }
            lastval2 = currentVal;

    chart2.data.datasets[1].data = [parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf)];
    chart2.update();

}

