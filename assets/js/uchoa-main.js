$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:4000,
    // autoplayHoverPause:true,
    animateOut: 'fadeOut',
    dots: false
  });
  // $('.lightgallery').lightGallery({});
  // $('.example-image-link').lightbox({
  //   'resizeDuration': 200,
  //   'wrapAround': true
  // });

});
