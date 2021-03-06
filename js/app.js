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

    if ( y == 'down' && scrollTop > 90 ){
      $('header').addClass('hide');
    } else {
      $('header').removeClass('hide');
    }

    if ( scrollTop > 90 ){
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }

    lastScrollTop = scrollTop;

  }

});


var explore    = document.querySelector('#explore');
var exploreBtn = document.querySelector('.explore-btn');

exploreBtn.addEventListener("click", function(e){

  e.preventDefault();
  explore.scrollIntoView({behavior:'smooth'});

});


// Card Slider
let cardsSlider = document.querySelectorAll(".card-slider");
let cards;

cardsSlider.forEach(function(p){
  let card      = p.querySelectorAll(".card");
  let cardsNext = p.querySelector(".card-slider_next");
  let cardsPrev = p.querySelector(".card-slider_prev");

  if(cardsNext){
    cardsNext.addEventListener("click", scrollCardsLeft);
  }
  if(cardsPrev){
    cardsPrev.addEventListener("click", scrollCardsRight);
  }
  card.forEach(function(c){
    //c.addEventListener("mousemove", hoverCardCircle);
  });
  
});

function scrollCardsLeft(){
  cards = this.parentNode.querySelector(".card-slider_scroll");
  cards.scrollBy({
    left: 640, 
    behavior: 'smooth'
  });
}
function scrollCardsRight(){
  cards = this.parentNode.querySelector(".card-slider_scroll");
  cards.scrollBy({
    left: -640, 
    behavior: 'smooth'
  });
}
function hoverCardCircle(e){
  let rect    = this.getBoundingClientRect();
  let circle  = this.querySelector(".card-circle");

  if(circle){
    let curX    = e.clientX - rect.left;
    let curY    = e.clientY - rect.top;
    let offsetX = circle.offsetWidth/2;
    let offsetY = circle.offsetHeight/2;

    circle.style.top = (curY - offsetY) + "px";
    circle.style.left = (curX - offsetX) + "px";

    console.log(curX - offsetX)
  }
}









