$(window).scroll(() => {
  checkHeader();
  checkProjects();
  checkContact();
});

function checkHeader() {
  let distanceFromTop = $(window).scrollTop() - $('header').offset().top;
    if (distanceFromTop > 20) {
      $('header').addClass(`header-animation`);
    } else {
      $('header').removeClass(`header-animation`);
      $('header').removeClass('menu-rotate');
    }
}

function checkProjects() {
  let distanceFromTop = $(window).scrollTop() - $('.projects').offset().top;
  if (distanceFromTop > -256) {
    $('header').addClass('project-color');
  } else {
    $('header').removeClass('project-color');
  }
}

function checkContact() {
  let distanceFromTop = $(window).scrollTop() - $('.contact').offset().top;
  if (distanceFromTop > -300) {
    $('header').addClass('contact-color');
  } else {
    $('header').removeClass('contact-color');
  }
}


$('.hamburger').on('click', () => {
  $('header').addClass('menu-rotate');
});

$('.hamburger-exit').on('click', () => {
  $('header').removeClass('menu-rotate');
});

$('.fa-angle-down').on('click', () => {
  if ($(window).scrollTop() === 0) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('.about').offset().top - 100
    }, 700);
  }
});

$('.fa-chevron-circle-up').on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('body').offset().top
    }, 700);
});

$('.projects-text-link').on('click', () => {
  $([document.documentElement, document.body]).animate({
        scrollTop: $('.projects').offset().top - 255
    }, 900);
});

$('.projects-link').on('click', () => {
  $([document.documentElement, document.body]).animate({
        scrollTop: $('.projects').offset().top - 255
    }, 900);
});

$('.about-link').on('click', () => {
  $([document.documentElement, document.body]).animate({
        scrollTop: $('.about').offset().top - 185
    }, 900);
});

$('.contact-link').on('click', () => {
  $([document.documentElement, document.body]).animate({
        scrollTop: $('.contact').offset().top - 280
    }, 900);
});

