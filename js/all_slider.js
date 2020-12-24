// team slider
$('.team_slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  prevArrow:
    '<span class="prev_arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next_arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: 'unslick',
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
