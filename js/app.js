$(function(){

  // VARS
  var $window       = $(window),
      raf           = requestAnimationFrame,
      lastScrollTop = $window.scrollTop();

  // CHECK SCROLL POSITION & DIRECTION
  if (raf) {
    loop();
  }
  function loop() {

    var scrollTop = $window.scrollTop();
    var y         = (scrollTop > lastScrollTop) ? 'down' : ((scrollTop === lastScrollTop) ? 'none' : 'up');

    if (lastScrollTop === scrollTop) {
      raf(loop);
      return;
    } else {
      lastScrollTop = scrollTop;
      raf(loop);
    }

    if ( y == 'down' && scrollTop > 110 ){
      $('header').addClass('hide');
    } else {
      $('header').removeClass('hide');
    }
    lastScrollTop = scrollTop;

  }
  // ACT PLAZA SLIDER
  $('.plaza-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn')
  });

  $('.equipment-slider_btns').on('mouseenter', function(){
    $('.equipment').addClass('active');
  });
  $('.equipment-slider_btns').on('mouseleave', function(){
    $('.equipment').removeClass('active');
  });

});







