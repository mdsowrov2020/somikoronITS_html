$(window).on('load', function () {
  // makes sure the whole site is loaded
  $('#line').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({ overflow: 'visible' });
});

window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// =====================
var containerEl = document.querySelector('.product_main');

var mixer = mixitup(containerEl);
$('.filtering').on('click', '.control', function () {
  $(this).addClass('control-active').siblings().removeClass('control-active');
});
