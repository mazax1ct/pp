//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > 0) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }

  if($(window).scrollTop() > h.height()*2) {
    h.addClass("full-scrolled");
  } else {
    h.removeClass("full-scrolled");
  }
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//главное меню
$(document).on('click', '.js-menu-toggler', function () {
  $(this).toggleClass('is-active');

  if($(this).hasClass('is-active')) {
    $('body').addClass('menu-open');
    $('.header__menu-block').fadeIn();
  } else {
    $('body').removeClass('menu-open');
    $('.header__menu-block').fadeOut();
  }

  return false;
});

//навигация по ссылкам в меню
$(document).on('click', '.main-menu__link', function () {
  $('.js-menu-toggler').removeClass('is-active');
  $('body').removeClass('menu-open');

  if($('body').width() > 1023) {
    $('.header__menu-block').removeClass('is-open');
  } else {
    $('.header__menu-block').fadeOut();
  }

  var id  = $(this).attr('href'),
  top = $(id).offset().top - 50;
  $('body, html').animate({scrollTop: top}, 1000);

  return false;
});
