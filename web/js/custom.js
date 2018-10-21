$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.row-offcanvas').toggleClass('active')
  })
})

 $(document).ready(function(){
        $('.dropdown-toggle').dropdown()
    });



// stickynav
$(window).bind('scroll', function () {

    if ($(window).scrollTop() > 100)
        $('.mainmenu').addClass('nav-down');
    else
        $('.mainmenu').removeClass('nav-down');
});


// Hide Header on on scroll down
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.mainmenu').outerHeight();

$(window).scroll(function(event){

    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.mainmenu').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.mainmenu').removeClass('nav-up');
        }
    }

    lastScrollTop = st;
});

//prevent default
$('.prevdef').click(function(event) {
    event.preventDefault();
});

var range = $('#range');
var output = $('#output');

$(range).on('mousemove change', function() {
    $(output).text(range.val());
});


//prevent default
// $('.prevdef').click(function(event) {
//     event.preventDefault();
// });

var range2 = $('#range2');
var output2 = $('#output2');

$(range2).on('mousemove change', function() {
    $(output2).text(range2.val());
});



// chart

// const chart1el = document.getElementById("chart1").getContext('2d');
const chart2el = document.getElementById("chart2").getContext('2d');
const chart3el = document.getElementById("chart3").getContext('2d');
const navToggle = document.getElementById("nav-toggle");
const pageWrap = document.getElementById("pagewrap");


// let chart1 = new Chart(chart1el, {
//   type: 'line',
//   data: {
//     labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "This Week",
//         data: [10, 11, 14, 18, 13, 12, 15],
//         borderColor: "#38bfc3",
//         fill: false
//       },
//       {
//         label: "Last Week",
//         data: [11, 7, 9, 13, 12, 8, 14],
//         borderColor: "#007bff",
//         fill: false
//       }
//     ]
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     legend: { display: false },
//     title: {
//       display: true,
//       text: 'Weekly Expenses'
//     },
//     scales: {
//       xAxes: [{
//                   gridLines: {
//                       display:false
//                   }
//               }],
//       yAxes: [{
//                   gridLines: {
//                       display:false
//                   }   
//               }]
//     }
//   }
// });

let chart2 = new Chart(chart2el, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Spending",
          backgroundColor: ["#38bfc3", "#0F52BA","#007bff","#73C2FB", "#38bfc3", "#0F52BA","#007bff","#73C2FB", "#38bfc3", "#0F52BA","#007bff","#73C2FB"],
          data: [20, 30, 50, 40, 60, 70, 50, 40, 50, 30, 60, 70]
        }
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
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}