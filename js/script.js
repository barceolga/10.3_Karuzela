/*jshint esversion: 6*/
$(function() {
  var $buttons = $('.controls button');
  var $carousel = $('.carousel');
  var $listCarousel = $('.list_carousel');
  var $carouselItem = $('.list_carousel .list_carousel-item');
  var $arrowLeft = $('.arrows .arrow_left');
  var $arrowRight = $('.arrows .arrow_right');
  var currentSlide = 1;
  var slideWidth = $carousel.width();

  $listCarousel.width(slideWidth * $carouselItem.length);

 function setSlide(x) {
   if (x < 0) x = $carouselItem.length - 1;
    currentSlide = Math.abs(x) % $carouselItem.length;

   $listCarousel.animate({
     marginLeft: (currentSlide) * slideWidth * -1
   }, 400);
}

$buttons.each((index, elem) => {
    $(elem).click(() => {setSlide(index + 1);
    $buttons.css('background-color', 'transparent');
    $(elem).css('background-color', '#ff8533');
  });
});


  $arrowRight.click(() => {setSlide(currentSlide + 1);});
  $arrowLeft.click(() => {setSlide(currentSlide - 1);});


});
