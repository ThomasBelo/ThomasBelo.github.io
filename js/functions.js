$(document).ready(function(){
  $('#twitter-quotes').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendDots: $('#the-dots')
  });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop':  parseInt($target.offset().top,10)
    }, 900, 'easeInOutExpo', function () {
        window.location.hash = target;
    });
  });
});
