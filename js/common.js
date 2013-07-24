$(document).ready(function() {

//functions
function wnd_size() {	
	var wnd_h = $(window).height();
	var wnd_w = $(window).width();
	var min_h = 650;	
	var min_w = 600;	
	if (wnd_w >= min_w) {
		//function mouse scroll
		$('html, body').mousewheel(function(e, delta) { 
		    $('html, body').stop().animate({scrollLeft: '-='+(200*delta)+'px' }, 400, 'easeOutQuad');
		    e.preventDefault();
		});
		//general
		$('.main, .about, .contacts, .bureau').css({'width': wnd_w, 'height': wnd_h});
		$('.salon').css('line-height', wnd_h + 'px');	
		function wrap_width() {
			var wrap_w = 0;
			$('.wrap .item').each(function() {			
				wrap_w += $(this).width();	
			});
			$('.wrap').width(wrap_w);
		}
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
		function articles_width() {
			var items = $('.article__item').length;
			var koef = items/3;
			var koef_new = Math.floor(koef);
			if (koef == koef_new) {
				$('.article__list').css('width', koef_new * 450);
			};
			if (koef > koef_new) {
				$('.article__list').css('width', (koef_new + 1) * 450);
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
		articles_width();
		partners_width();
		wrap_width();
		if (wnd_h < min_h) {
			$('.js-height').css('height', '650px');
			$('body').css('overflow-y', 'auto');
			$('.main, .about, .contacts, .bureau').css({'width': wnd_w, 'height': '650px'});	
			$('.services__block').css('height', min_h/2);	
			$('.portfolio__item').css({'height': min_h/3, 'line-height': min_h/3 + 'px'});	
			$('.article__item').css('height', (min_h - 40)/3);	
			$('.catalog__item-in').css('height', '610px');			
			$('.partners__item').css({'width': min_h/4 - 2, 'height': min_h/4 - 2});
		}
		else {
			$('.js-height').css('height', wnd_h);
			$('body').css('overflow-y', 'hidden');
			$('.services__block').css('height', wnd_h/2);	
			$('.portfolio__item').css({'height': wnd_h/3, 'line-height': wnd_h/3 + 'px'});
			$('.article__item').css('height', (wnd_h - 40)/3);
			$('.catalog__item-in').css('height', wnd_h - 60);
			$('.partners__item').css({'width': wnd_h/4 - 2, 'height': wnd_h/4 - 2});
			$('.article__page').css('width', wnd_w - 305);
			$('.page').css('width', wnd_w - 265);
		};
		if (wnd_h < 800) {
			$('.catalog__list').addClass('catalog__list_less');
			$('.article__list').addClass('article__list_less');
			$('.page__content').addClass('page__content_less');
		}
		else {
			$('.catalog__list').removeClass('catalog__list_less');
			$('.article__list').removeClass('article__list_less');
			$('.page__content').removeClass('page__content_less');
		};
	};
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

//portfolio description
$('.portfolio__item').click(function() {
	$(this).addClass('is-active');
	setTimeout("$('#project').addClass('is-active')", 200);
	$('body').addClass('no-scroll');
});
$('.catalog__more button').click(function() {
	$('#page').addClass('is-active');
	$('body').addClass('no-scroll');
});
$(document).on('click', '.back', function() {
	$(this).parent().removeClass('is-active');
	$('body').removeClass('no-scroll');
	$('.portfolio__item').removeClass('is-active');
});

//gallery
$(document).on('click', '.bb-close', function() {
	$('.gallery-wrap').removeClass('is-active');
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

//gallery book
function gallery_book() {
	var el = $('.bb-item');
	var caption = $('#bb-caption');
	var count = 1;
	var items = el.length;
	caption.find('span').last().html(items);
	caption.find('span').first().html(count);
};

//main slider
function main_slider (argument) {
	var el = $('.js-sl');
	var el_items = $('.js-sl-item');
	$('.js-sl-item:not(:first)').hide();
	//el_items.first().css('display', 'block');
	var next = el.find('.sl__next');
	next.click(function() {
		var pic = el.find('.cycle-slide-active').next().attr('data-item');
		el_items.fadeOut();
		$('#' + pic).fadeIn();
	});
};


//init
wnd_size();
lux_slider();
gallery_book();
main_slider();

//window resize
$(window).resize(function() {
	wnd_size();
});

});

