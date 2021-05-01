//настройки fancybox
$.fancybox.defaults.autoFocus = false;
//$.fancybox.defaults.touch = false;
$.fancybox.defaults.hash = false;
$.fancybox.defaults.toolbar = false;
//$.fancybox.defaults.smallBtn = false;
$.fancybox.defaults.i18n.en.CLOSE = "Закрыть";
$.fancybox.defaults.i18n.en.NEXT = "Вперёд";
$.fancybox.defaults.i18n.en.PREV = "Назад";
//$.fancybox.defaults.closeExisting = true;


$(document).ready(function() {
	//слайдер акций
	if($('.js-actions-slider').length > 0) {
		$('.js-actions-slider').slick({
			autoplay: true,
			fade: true,
			adaptiveHeight: true,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			arrows: false
		});
	}

	//слайдер фотографий
	if($('.js-slider').length > 0) {
		$('.js-slider').slick({
		  dots: false,
		  infinite: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
			mobileFirst: true,
			prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#arrow_prev"/></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#arrow_next"/></svg></button>',
		  responsive: [
				{
		      breakpoint: 1023,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4
		      }
		    },
				{
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 599,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  ]
		});
	}

	//слайдер отзывов
	if($('.js-reviews').length > 0) {
		$('.js-reviews').slick({
			adaptiveHeight: true,
		  dots: false,
		  infinite: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
			mobileFirst: true,
			prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#arrow_prev"/></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#arrow_next"/></svg></button>',
		  responsive: [
				{
		      breakpoint: 1023,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  ]
		});
	}
});

//навешивание класса на форму при поаытке отправки
$(document).on('click', 'button[type=submit]', function () {
	$(this).closest('form').addClass('submitted');
});
