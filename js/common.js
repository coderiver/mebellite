$(document).ready(function() {

//function mouse scroll
// $('body').mousewheel(function(event, delta) {
//   this.scrollLeft -= (delta * 100);
// 	event.preventDefault();
// });

//functions
function wnd_size() {	
	var wnd_h = $(window).height();
	var wnd_w = $(window).width();
	if (wnd_h > 650) {
		$('.wrap').css('height', wnd_h);
		$('.main').css({'width': wnd_w, 'height': wnd_h});
		$('.services__block').css('height', wnd_h/2);
		$('.lux__item, .salon, .salon__bg, .m-contacts').css('height', wnd_h);
		$('.salon').css('line-height', wnd_h + 'px');
	}
	else {
		$('.main').css({'width': wnd_w, 'height': '650px'});
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
lux_slider();



//init
wnd_size();

//window resize
$(window).resize(function() {
	wnd_size();
});

});

