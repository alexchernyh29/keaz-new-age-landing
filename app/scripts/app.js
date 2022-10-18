import $ from "jquery";
import slick from "slick-carousel";

$(() => {
	$(".assortment__list").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1190,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".crash-tests__content").slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		nextArrow: $(".crash-tests__arrow_next"),
		prevArrow: $(".crash-tests__arrow_prev"),
	});

	$(".shield-slider__list").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".certificates-slider__list").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	});

	const handleCloseMenu = () => {
		$("body").removeClass("header__page_lock");
		$(".header__burger__menu").removeClass("is-active");
		$(".header__burger__line").removeClass("is-active");
	};

	const handleOpenMenu = () => {
		$("body").addClass("header__page_lock");
		$(".header__burger__menu").addClass("is-active");
		$(".header__burger__line").addClass("is-active");
	};

	$(".header__menu__link").on("click", function () {
		handleCloseMenu();
	});

	$(".header__burger__button").on("click", function () {
		if ($(".header__burger__line").hasClass("is-active")) {
			handleCloseMenu();
		} else {
			handleOpenMenu();
		}
	});
});
