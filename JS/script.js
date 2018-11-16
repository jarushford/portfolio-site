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
  if (distanceFromTop > -271) {
    $('header').addClass('project-color');
  } else {
    $('header').removeClass('project-color');
  }
}

function checkContact() {
  let distanceFromTop = $(window).scrollTop() - $('.contact').offset().top;
  if (distanceFromTop > -475) {
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
        scrollTop: $('.projects').offset().top - 270
    }, 900);
});

$('.projects-link').on('click', () => {
  $([document.documentElement, document.body]).animate({
        scrollTop: $('.projects').offset().top - 270
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

$('.fa-envelope').on('click', () => {
  const el = document.createElement('textarea');
  el.value = 'jar.rushford@gmail.com';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  $('.email-popup').addClass('copied');
  $('.email-notch').addClass('copied-notch');
  $('.email-popup').text('Copied!');
});

$('.fa-envelope').on('mouseleave', () => {
  setTimeout(() => {
    $('.email-popup').text('This will copy my email address to your clipboard');
    $('.email-popup').removeClass('copied');
    $('.email-notch').removeClass('copied-notch');
  }, 600);
});

$('.project').on('mouseover', function() {
  const icons = Array.from($(this).children('.icons-container').children('.tech'));
  icons.forEach(icon => {
    $(icon).addClass(`${$(icon).attr('id')}-display`);
  })
});

$('.project').on('mouseleave', function() {
  const icons = Array.from($('.tech'));
  icons.forEach(icon => {
    $(icon).removeClass(`${$(icon).attr('id')}-display`);
  })
});

