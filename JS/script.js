$(window).scroll(() => {
  let distanceFromTop = $(window).scrollTop() - $('header').offset().top;
    if (distanceFromTop > 75) {
      $('header').addClass(`header-animation`);
    } else {
      $('header').removeClass(`header-animation`);
    }
});