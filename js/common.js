$(document).ready(function() {

//function mouse scroll
$('html, body').mousewheel(function(e, delta) { 
    $('html, body').stop().animate({scrollLeft: '-='+(500*delta)+'px' }, 200, 'easeOutQuad');
    e.preventDefault();
});

//functions
function wnd_size() {	
	var wnd_h = $(window).height();
	var wnd_w = $(window).width();
	var min_h = 650;	
	$('.main, .about').css({'width': wnd_w, 'height': wnd_h});
	$('.services__block').css('height', wnd_h/2);	
	$('.salon').css('line-height', wnd_h + 'px');	
	function portfolio_width() {
		var items = $('.portfolio__item').length;
		var koef = items/3;
		var koef_new = Math.floor(koef);
		if (koef == koef_new) {
			$('.portfolio__list').css('width', koef_new * 400);
		};
		if (koef > koef_new) {
			$('.portfolio__list').css('width', (koef_new + 1) * 400);
		};
	};		
	function partners_width() {
		var items = $('.partners__item').length;
		var koef = items/4;
		var koef_new = Math.floor(koef);
		if (wnd_h < min_h) {
			$('.partners__list').css('width', (koef_new + 1) * min_h/4);
		}
		else {
			$('.partners__list').css('width', (koef_new + 1) * wnd_h/4);
		};
	};
	portfolio_width();
	partners_width();
	if (wnd_h < min_h) {
		$('.js-height').css('height', '650px');
		$('body').css('overflow-y', 'auto');
		$('.main').css({'width': wnd_w, 'height': '650px'});	
		$('.portfolio__item').css({'height': min_h/3, 'line-height': min_h/3 + 'px'});		
		$('.catalog__item-in').css('height', '610px');			
		$('.partners__item').css({'width': min_h/4 - 2, 'height': min_h/4 - 2});
	}
	else {
		$('.js-height').css('height', wnd_h);
		$('body').css('overflow-y', 'hidden');
		$('.portfolio__item').css({'height': wnd_h/3, 'line-height': wnd_h/3 + 'px'});
		$('.catalog__item-in').css('height', wnd_h - 60);
		$('.partners__item').css({'width': wnd_h/4 - 2, 'height': wnd_h/4 - 2});
	}
	if (wnd_h < 800) {
		$('.catalog__list').addClass('catalog__list_less');
	}
	else {
		$('.catalog__list').removeClass('catalog__list_less');
	}
};

//lux slider
function lux_slider() {
	var el = $('.lux__slider .lux__item.cycle-slide-active');
	var prev = $('#lux-prev');
	var next = $('#lux-next');

	var el_next_current = el.next();
	var el_prev_current = el.prev();	

	var title_next_current = el_next_current.find('.lux__title span').text();
	var title_prev_current = el_prev_current.find('.lux__title span').text();	

	next.html(title_next_current + '<i></i>');
	prev.html(title_prev_current + '<i></i>');

	next.click(function() {
		var el = $('.lux__slider .lux__item.cycle-slide-active');		
		var el_next = el.next().next();
		var el_prev = el.prev().prev().prev();
		var title_next = el_next.find('.lux__title span').text();
		var title_prev = el_prev.find('.lux__title span').text();
		next.html(title_next + '<i></i>');
		prev.html(title_prev + '<i></i>');
	});
	prev.click(function() {
		var el = $('.lux__slider .lux__item.cycle-slide-active');		
		var el_next = el.next().next().next();
		var el_prev = el.prev().prev();
		var title_next = el_next.find('.lux__title span').text();
		var title_prev = el_prev.find('.lux__title span').text();
		next.html(title_next + '<i></i>');
		prev.html(title_prev + '<i></i>');
	});

};
lux_slider();

//portfolio description
$('.portfolio__block').click(function() {
	var el = $(this).next();
	var top = el.offset().top;
	var left = el.offset().left;
	var right = $(window).width() - (el.offset().left + el.outerWidth());
	var bottom = $(window).height() - (el.offset().top + el.outerHeight());
	el.addClass('is-active');
	el.css({'left': left, 'right': right, 'top': top, 'bottom': bottom});	
	el.animate({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }, 500, 'easeInQuart');
});

//acordeon
$('.acord__item:not(:first)').find('.acord__desc').hide();
$('.acord__item').click(function() {
	if (!$(this).hasClass('is-active')) {
		$('.acord__item').removeClass('is-active');
		$('.acord__item').find('.acord__desc').slideUp();
		$(this).addClass('is-active');
		$(this).find('.acord__desc').slideDown();
	};
});

//init
wnd_size();

//window resize
$(window).resize(function() {
	wnd_size();
});

});

