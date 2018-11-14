$(window).scroll(() => {
  let distanceFromTop = $(window).scrollTop() - $('header').offset().top;
    if (distanceFromTop > 20) {
      $('header').addClass(`header-animation`);
    } else {
      $('header').removeClass(`header-animation`);
      if ($('header').hasClass('menu-rotate')) {
        $('header').removeClass('menu-rotate');
      }
    }
});

$('.hamburger').on('click', () => {
  $('header').addClass('menu-rotate');
});

$('.hamburger-exit').on('click', () => {
  $('header').removeClass('menu-rotate');
});

$('.fa-angle-down').on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('.about').offset().top - 100
    }, 700);
});

$('.fa-chevron-circle-up').on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('body').offset().top
    }, 700);
});