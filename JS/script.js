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
  $('header').toggleClass('menu-rotate');
});