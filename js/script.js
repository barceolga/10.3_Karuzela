/*jshint esversion: 6*/
$(function() {
  var $buttonsWrap = $('.controls');
  var $carousel = $('.carousel');
  var $listCarousel = $('.list_carousel');
  var $carouselItem = $('.list_carousel .list_carousel-item');
  var carouselLength = $carouselItem.length;
  var $arrowLeft = $('.arrows .arrow_left');
  var $arrowRight = $('.arrows .arrow_right');
  var currentSlide = 1;
  var firstSlide = $listCarousel.find('li:first');
  var lastSlide = $listCarousel.find('li:last');
  var slideWidth = $carousel.width();

  $listCarousel.width(slideWidth * (carouselLength + 1));

 function setSlide(x) {
    if (x < 0) {
      currentSlide = carouselLength - 1;

      $listCarousel.css({
        marginLeft: (currentSlide + 1) * slideWidth * -1
      });

      $listCarousel.animate({
        marginLeft: (currentSlide) * slideWidth * -1
      }, 400);

  }else if (x > (carouselLength)) {
      currentSlide = 1;

      $listCarousel.css({
      marginLeft: (currentSlide - 1) * slideWidth * -1
    });

      $listCarousel.animate({
       marginLeft: (currentSlide) * slideWidth * -1
      }, 400);

   } else  {
    $listCarousel.animate({
      marginLeft: (x) * slideWidth * -1
    }, 400);
    currentSlide = x;
  }
  $buttons.css("background-color", "transparent");
  $buttons.eq(currentSlide-1).css('background-color', '#ff8533' );
}

  for (let x = 0; x < carouselLength; x++) {
    $buttonsWrap.append("<button></button>");
  }

  var $buttons =$('.controls button');

  $buttons.each((index, elem) => {
      $(elem).click(() => {setSlide(index + 1);
    });

  });

  firstSlide.before(lastSlide.clone(true).appendTo($listCarousel));

  $arrowRight.click(() => {
      setSlide(currentSlide + 1);
  });

  $arrowLeft.click(() => {
    setSlide(currentSlide - 1);
  });

});
