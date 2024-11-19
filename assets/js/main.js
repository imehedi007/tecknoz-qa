/*========Loader js===========*/
$(window).on('load', function () {
	$(".loader").slideUp("slow");
	$("body").addClass("animate");
	$("html").addClass("animate");
});
/* ============= Toggle button js =========*/
$(document).ready(function () {
'use strict';
	$("document").ready(function () {
		$(".tab-slider--body:nth-child(1)").addClass('active');
	});
$(".btn-toggle").on('click', function() {
		if ($(this).hasClass("active")) {
			$('.tab-slider--body:nth-child(1)').addClass('active');
			$('.tab-slider--body:nth-child(2)').removeClass('active');
		} else {
			$('.tab-slider--body:nth-child(2)').addClass('active');
			$('.tab-slider--body:nth-child(1)').removeClass('active');
		}
	});
});

/* ============= Navbar White =========*/
$(document).ready(function () {
'use strict';
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.navbar-light').addClass('nav-white');
		} else if (scroll < '20') {
			$('.navbar-light').removeClass('nav-white');
		}
	});
	$(document).ready(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.navbar-light').addClass('nav-white');
		} else if (scroll < '20') {
			$('.navbar-light').removeClass('nav-white');
		}
	});

});
$(document).ready(function () {
'use strict';
	$(window).on('load', function () {
		$('body').scrollspy({
			target: '#nav-main',
			offset: 70
		});
	});
	$('.page-scroll').on('click', function (event) {
		var $anchor = $(this);
		if ($(window).width() > 768) {
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 65
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		} else {
			if ($(window).width() < 768) {
				$(".navbar-toggler").on('click');
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - 50
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			}
		}
	});
});
/* ============= Review Slider Js =========*/

$(document).ready(function () {
'use strict';
	$('.testimonial-slider').slick({
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		arrows: false,
		fade: true,
		autoplay: false,
		centerMode: true,
		centerPadding: 0,
		initialSlide: 0,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1
			}
		}]
	});


});
/* ============= PreReview Slider Js =========*/
$(document).ready(function () {
'use strict';
	$('.testimonial-slider1').slick({
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		prevArrow: false,
		nextArrow: false,
		centerMode: true,
		centerPadding: "0px",
		responsive: [{
			breakpoint: 1365,
			settings: {
				slidesToShow: 3,
			},
			breakpoint: 990,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
});
/* ============= FAQs Panel Js =========*/
$(document).ready(function () {
'use strict';
	$('.panel-collapse').on('show.bs.collapse', function () {
		$(this).parent('.card').find('.fa-minus').show();
		$(this).parent('.card').find('.fa-plus').hide();
	});
	$('.panel-collapse').on('hide.bs.collapse', function () {
		$(this).parent('.card').find('.fa-minus').hide();
		$(this).parent('.card').find('.fa-plus').show();
	});
});
