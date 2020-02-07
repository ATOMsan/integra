$(function () {

	$('.to__top').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '1000');
	});

	var companySlider = $('.company__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		arrows: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.sl-prev').on('click', function (e) {
		e.preventDefault();
		companySlider.slick('slickPrev');;
	});

	$('.sl-next').on('click', function (e) {
		e.preventDefault();
		companySlider.slick('slickNext');;
	});

	$('.hamburger').on('click', function () {
		$(this).toggleClass('is-active');
		$('.menu').toggleClass('is-active');
	});

	//1C -page

	var rSlider = $('.r-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		arrows: false
	});

	$('.rs-prev').on('click', function (e) {
		e.preventDefault();
		rSlider.slick('slickPrev');
	});

	$('.rs-next').on('click', function (e) {
		e.preventDefault();
		rSlider.slick('slickNext');
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('.header__logo').addClass('scroll');
		} else {
			$('.header__logo').removeClass('scroll');
		}
	});
	if ($(window).scrollTop() > 600) {
		$('.header__logo').addClass('scroll');
	} else {
		$('.header__logo').removeClass('scroll');
	}

	var rSlider1 = $('.r-slider1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		arrows: false
	});

	$('.rs1-prev').on('click', function (e) {
		e.preventDefault();
		rSlider1.slick('slickPrev');
	});

	$('.rs1-next').on('click', function (e) {
		e.preventDefault();
		rSlider1.slick('slickNext');
	});

	var rSlider2 = $('.r-slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		arrows: false
	});

	$('.rs-prev2').on('click', function (e) {
		e.preventDefault();
		rSlider2.slick('slickPrev');
	});

	$('.rs-next2').on('click', function (e) {
		e.preventDefault();
		rSlider2.slick('slickNext');
	});

	$('.form-open').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href');
		$(this).addClass('open-active').siblings('.form-open').removeClass('open-active');
		$(id).addClass('tab-active').siblings('.tab').removeClass('tab-active');
	});


	// CKC //

	var slider1 = $('.perform-slider').lightSlider({
		item: 1,
		pager: false,
		controls: false,
	});

	$('.sl1-prev').on('click', function (e) {
		e.preventDefault();
		slider1.goToPrevSlide();
	});

	$('.sl1-next').on('click', function (e) {
		e.preventDefault();
		slider1.goToNextSlide();
	});

	var slider2 = $('.company__slider2').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		arrows: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					centralMode: true,
					variableWidth: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					item: 1,
				}
			}
		]
	});

	$('.sl2-prev').on('click', function (e) {
		e.preventDefault();
		slider2.slick('slickPrev');
	});

	$('.sl2-next').on('click', function (e) {
		e.preventDefault();
		slider2.slick('slickNext');
	});

	var slider3 = $('.company__slider1').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		arrows: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					variableWidth:false,
					centralMode: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					centralMode: true,
					variableWidth: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
					centralMode: true
				}
			}
		]
	});

	$('.sl-prev3').on('click', function (e) {
		e.preventDefault();
		slider3.slick('slickPrev');
	});

	$('.sl-next3').on('click', function (e) {
		e.preventDefault();
		slider3.slick('slickNext');
	});

	var slider3 = $('.releab__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		arrows: false,
	});

	$('.sl3-prev').on('click', function (e) {
		e.preventDefault();
		slider3.slick('slickPrev');
	});

	$('.sl3-next').on('click', function (e) {
		e.preventDefault();
		slider3.slick('slickNext');
	});

	var slider4 = $('.res__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		arrows: false,
	});

	$('.sl4-prev').on('click', function (e) {
		e.preventDefault();
		slider4.slick('slickPrev');
	});

	$('.sl4-next').on('click', function (e) {
		e.preventDefault();
		slider4.slick('slickNext');
	});

	$(".tab__link").on("click", function(e){
		e.preventDefault(); 
		var id = $(this).attr("href");
		$(this).addClass("link-active").siblings(".tab__link").removeClass("link-active");
		$(id).addClass("tab-active").siblings(".tab").removeClass("tab-active");
	});

	$('.form-open1').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href');
		$(this).addClass('open-active').siblings('.form-open1').removeClass('open-active');
		$(id).addClass('tab-active').siblings('.tab-form').removeClass('tab-active');
	});

});
