$(function () {
  $(".slider__box").slick({
    prevArrow:
      '<img class="slider__arrow slider__arrow-left" src="img/arrow-left.svg" alt="arrow-left">',
    nextArrow:
      '<img class="slider__arrow slider__arrow-right" src="img/arrow-right.svg" alt="arrow-right">',
  });

  $(".menu-btn").click(function () {
    $(".menu__list").toggleClass("active");
  });
});


window.onload = function(){
    let preloader = $('#preloader__time');
    preloader.css({display: 'none'})
    // preloader.css({opacity: '0'})
}


