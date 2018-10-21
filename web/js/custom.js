
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
var austin = 20;
var charlotte = 8;
var denver = 10;
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
        var austinsaving = parseInt($('#austinsaving').text());
    var charlottesaving = parseInt($('#charlottesaving').text());
    var denversaving = parseInt($('#denversaving').text());

    var currentVal = this.value;
    if (currentVal == 1) {
        currentCar.src = "img/car/uber.jpg";
        output.innerHTML = "Walking and Shared Rides";
        if(lastval > 1)
        {
          $('#sfsaving').text(sfsaving + 1000);  
          $('#austinsaving').text(austinsaving + 1000);  
          $('#charlottesaving').text(charlottesaving + 1000);  
          $('#denversaving').text(denversaving + 1000);  

          sf = sf  - 1;
          austin = sf  - 1;
          charlotte = charlotte - 1;
          denver = denver - 1;
        }
        lastval = currentVal;
    } else if (currentVal == 2) {
        currentCar.src = "img/car/toyota.jpg";
        output.innerHTML = "Used Toyota Corolla";
        if(lastval < 2)
        {
          $('#sfsaving').text(sfsaving - 1000);
          $('#austinsaving').text(austinsaving - 1000);  
          $('#charlottesaving').text(charlottesaving - 1000);  
                    $('#denversaving').text(denversaving -1000);  

          sf = sf  + 1; 
          austin = sf  + 1;
          charlotte = charlotte + 1; 
                    denver = denver + 1;
        }
        else
        {
         $('#sfsaving').text(sfsaving + 5000); 
         $('#austinsaving').text(austinsaving + 5000);  
         $('#charlottesaving').text(charlottesaving + 5000);  
                   $('#denversaving').text(denversaving + 5000);  

         sf = sf  - 5;
         austin = sf  - 5;
         charlotte = charlotte - 5;
                   denver = denver - 5;

        }
        lastval = currentVal;
    } else if (currentVal == 3) {
        currentCar.src = "img/car/prius.jpg";
        output.innerHTML = "Prius";
        if(lastval < 3)
        {
          $('#sfsaving').text(sfsaving - 5000);
          $('#austinsaving').text(austinsaving - 5000);  
                   $('#charlottesaving').text(charlottesaving - 5000);  
          $('#denversaving').text(denversaving - 5000);  

          sf = sf  + 5;
          austin = sf  + 5;
          charlotte = charlotte + 5;
            denver = denver + 5;

        }
        else
        {
         $('#sfsaving').text(sfsaving + 10000); 
         $('#austinsaving').text(austinsaving + 10000);  
                  $('#charlottesaving').text(charlottesaving + 10000);  
          $('#denversaving').text(denversaving + 10000);  

         sf = sf  - 10;
         austin = sf  - 10;
         charlotte = charlotte - 10;
          denver = denver - 10;

        }
        lastval = currentVal;

    } else if (currentVal == 4) {
        currentCar.src = "img/car/bmw.jpg";
        output.innerHTML = "BMW";
        if(lastval < 4)
        {
          $('#sfsaving').text(sfsaving - 10000);
          $('#austinsaving').text(austinsaving - 10000);  
                   $('#charlottesaving').text(charlottesaving - 10000);  
          $('#denversaving').text(denversaving - 10000);  

          sf = sf  + 10;
          austin = sf  + 10;
          charlotte = charlotte + 10;
                    denver = denver + 10;

        }
        else
        {
         $('#sfsaving').text(sfsaving + 20000); 
         $('#austinsaving').text(austinsaving + 20000);  
                  $('#charlottesaving').text(charlottesaving + 20000);  
          $('#denversaving').text(denversaving + 20000);  

         sf = sf  - 20;
         austin = sf  - 20;
         charlotte = charlotte - 20;
                   denver = denver - 20;

        }
        lastval = currentVal;
    } else {
        currentCar.src = "img/car/lambo.jpg";
        output.innerHTML = "Lamborghini";
        $('#sfsaving').text(sfsaving - 20000);
                 $('#charlottesaving').text(charlottesaving - 20000);  
          $('#denversaving').text(denversaving - 20000);  

        sf = sf  + 20;
        austin = sf  + 20;
        charlotte = charlotte + 20;
                  denver = denver + 20;

        lastval = currentVal;
    }
    
    chart2.data.datasets[1].data = [parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf)];
    chart2.update();

    chart2Austin.data.datasets[1].data = [austin, austin, austin, austin, austin, austin, austin, austin, austin, austin, austin, austin];
    chart2Austin.update();

    chart2Charlotte.data.datasets[1].data = [charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte];
    chart2Charlotte.update();

    chart2Denver.data.datasets[1].data = [denver, denver, denver, denver, denver, denver, denver, denver, denver, denver, denver, denver];
    chart2Denver.update();
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
    var austinsaving = parseInt($('#austinsaving').text());
    var charlottesaving = parseInt($('#charlottesaving').text());
    var denversaving = parseInt($('#denversaving').text());
    console.log(currentVal);
    if (currentVal == 1) {
        currentHome.src = "img/home/street.jpg";
        output2.innerHTML = "Stay on the Street";
        if(lastval2 > 1)
        {
          $('#sfsaving').text(sfsaving + 25000);  
          $('#austinsaving').text(austinsaving + 8000);  
          $('#charlottesaving').text(charlottesaving + 6000);  
          $('#denversaving').text(denversaving + 5000);  
                    sf = sf  - 15;
                    austin = austin  - 8;
          charlotte = charlotte - 6;
          denver = denver - 5;

        }
    } else if (currentVal == 2) {
        currentHome.src = "img/home/roommate.jpg";
        output2.innerHTML = "Room Mates";
        if(lastval2 < 2)
        {
          $('#sfsaving').text(sfsaving - 25000);
          $('#austinsaving').text(austinsaving - 8000);  
          $('#charlottesaving').text(charlottesaving - 6000);
          $('#denversaving').text(denversaving - 5000);  

          sf = sf  + 15;
          austin = austin  + 8;
        charlotte = charlotte + 6;
                  denver = denver + 5;

        }
        else
        {
         $('#sfsaving').text(sfsaving + 15000); 
         $('#austinsaving').text(austinsaving + 10000);  
         $('#charlottesaving').text(charlottesaving + 6000);
         $('#denversaving').text(denversaving + 5000);  
         sf = sf  - 15;
         austin = austin  - 10;
          charlotte = charlotte - 6;
                    denver = denver - 5;

        }
    } else if (currentVal == 3) {
        currentHome.src = "img/home/1bedroom.jpg";
        output2.innerHTML = "1 Bedroom Apartment";
        if(lastval2 < 3)
        {
          $('#sfsaving').text(sfsaving - 15000);
          $('#austinsaving').text(austinsaving - 10000); 
          $('#charlottesaving').text(charlottesaving - 6000); 
                   $('#denversaving').text(denversaving - 6000);  

          sf = sf  + 15;
          austin = austin  + 10;
                   charlotte = charlotte + 6;
                             denver = denver + 5;

        }
        else
        {
         $('#sfsaving').text(sfsaving + 25000); 
         $('#austinsaving').text(austinsaving + 15000);  
         $('#charlottesaving').text(charlottesaving + 10000);
         $('#denversaving').text(denversaving + 12000);  
         sf = sf  - 25;
         austin = austin  - 15;
                  charlotte = charlotte - 10;
                            denver = denver - 12;

        }
    } else if (currentVal == 4) {
        currentHome.src = "img/home/home.jpg";
        output2.innerHTML = "Home";
        if(lastval2 < 4)
        {
          $('#sfsaving').text(sfsaving - 25000);
          $('#austinsaving').text(austinsaving - 15000);  
          $('#charlottesaving').text(charlottesaving - 10000);
          $('#denversaving').text(denversaving - 12000);  
          sf = sf  + 25;
          austin = austin  + 15;
                   charlotte = charlotte + 10;
                             denver = denver + 12;

        }
        else
        {
         $('#sfsaving').text(sfsaving + 100000); 
         $('#austinsaving').text(austinsaving + 50000);  
         $('#charlottesaving').text(charlottesaving + 35000);
         $('#denversaving').text(denversaving + 40000);  
         sf = sf  - 100;
         austin = austin  - 50;
                  charlotte = charlotte - 35;
                            denver = denver - 40;

        }
    } else {
        currentHome.src = "img/home/mansion.jpg";
        output2.innerHTML = "Mansion";
        $('#sfsaving').text(sfsaving - 100000);
        $('#austinsaving').text(austinsaving - 50000); 
        $('#charlottesaving').text(charlottesaving - 35000); 
        $('#denversaving').text(denversaving - 40000);
        sf = sf  + 100;
        austin = austin  + 50;
                 charlotte = charlotte + 35;
                           denver = denver + 40;

    }
            lastval2 = currentVal;

    chart2.data.datasets[1].data = [parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf), parseInt(sf)];
    chart2.update();

    chart2Austin.data.datasets[1].data = [austin, austin, austin, austin, austin, austin, austin, austin, austin, austin, austin, austin];
    chart2Austin.update();

    chart2Charlotte.data.datasets[1].data = [charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte, charlotte];
    chart2Charlotte.update();

    chart2Denver.data.datasets[1].data = [denver, denver, denver, denver, denver, denver, denver, denver, denver, denver, denver, denver];
    chart2Denver.update();
}

