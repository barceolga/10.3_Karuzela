/*jshint esversion: 6*/
$(function() {
  var $buttons = $('.controls');
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

  $listCarousel.width(slideWidth * carouselLength);

 function setSlide(x) {
    if (x < 0) x = carouselLength - 1;
    currentSlide = Math.abs(x) % carouselLength;

    if ((x > carouselLength) || (currentSlide !== 0)) {
      $listCarousel.animate({
       marginLeft: (currentSlide) * slideWidth * -1
     }, 400);
   }

 if (currentSlide === 0) {
    $listCarousel.css({marginLeft: -400 * currentSlide});
  }
}

  for(let x = 0; x < carouselLength; x++) {
    $buttons.append("<button></button>");
  }

  $buttons =$('.controls button');

  $buttons.each((index, elem) => {
      $(elem).click(() => {setSlide(index + 1);
        $buttons.css('background-color', 'transparent');
        $(elem).css('background-color', '#ff8533');
    });

  });

  firstSlide.before(lastSlide.clone(true).appendTo($listCarousel));
  lastSlide.after(firstSlide.clone(true).appendTo($listCarousel));
  //(firstSlideClone = lastSlide.after(firstSlide.clone(true).appendTo($listCarousel));
  //lastSlideClone = firstSlide.before(lastSlide.clone(true).appendTo($listCarousel));

  $arrowRight.click(() => {
      setSlide(currentSlide + 1);
    $buttons.css('background-color', 'transparent');
  });

  $arrowLeft.click(() => {
    setSlide(currentSlide - 1);
    /*if (currentSlide === 0) {
        $listCarousel.css({marginLeft: -1600});
    }*/
    $buttons.css('background-color', 'transparent');
  });

  var fourthSlide = $listCarousel.find("li:nth-child(4)");
  var thirdSlide  = $listCarousel.find("li:nth-child(3)");
  var fithSlide = $listCarousel.find("li:nth-child(5)");
  //console.log(thirdSlide);
   //console.log(fourthSlide);
   console.log(fithSlide);
   console.log(lastSlide);
  // console.log(firstSlideClone);

   $("li").click(function(){
        console.log($(this).index());
    });
});
