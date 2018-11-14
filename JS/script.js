$(window).scroll(() => {
  let distanceFromTop = $(window).scrollTop() - $('header').offset().top;
    if (distanceFromTop > 20) {
      $('header').addClass(`header-animation`);
    } else {
      $('header').removeClass(`header-animation`);
    }
});

$('.hamburger').on('click', () => {
  $('header').toggleClass('menu-rotate');
});