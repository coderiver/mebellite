var Page = (function() {
	var $container = $( '#gallery-wrap' ),
		$bookBlock = $( '#bb-bookblock' ),
		$bookCurr = $( '#bb-current' ),
		$bookItems = $( '#bb-items' ),
		$items = $bookBlock.children(),
		itemsCount = $items.length,
		current = 0,
		bb = $( '#bb-bookblock' ).bookblock( {
			speed : 800,
			perspective : 2000,
			shadowSides	: 0.8,
			shadowFlip	: 0.4,
			onEndFlip : function(old, page, isLimit) {				
				current = page;
				updateNavigation(isLimit);
				page++;
				$bookCurr.html(page);
				$bookItems.html(itemsCount);
			}
		} ),
		$navNext = $( '#bb-nav-next' ),
		$navPrev = $( '#bb-nav-prev' ).addClass('disabled'),
		$menuItems = $( '.js-gallery-list > li' ),
		$tblcontents = $( '#tblcontents' ),
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},		
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		supportTransitions = Modernizr.csstransitions;
	function init() {
		initEvents();
	}	
	function initEvents() {
		// add navigation events
		$navNext.on( 'click', function() {
			bb.next();
			return false;
		} );
		$navPrev.on( 'click', function() {
			bb.prev();
			return false;
		} );		
		// add swipe events
		$items.on( {
			'swipeleft'		: function( event ) {
				if( $container.data( 'opened' ) ) {
					return false;
				}
				bb.next();
				return false;
			},
			'swiperight'	: function( event ) {
				if( $container.data( 'opened' ) ) {
					return false;
				}
				bb.prev();
				return false;
			}
		} );
		// click a menu item
		$menuItems.on( 'click', function() {
			$('.gallery-wrap').addClass('is-active');
			var $el = $( this );
			var	idx = $el.index();
			bb.jump( idx + 1 );
			return false;
		} );
	}
	function updateNavigation( isLastPage ) {		
		if( current === 0 ) {
			$navNext.removeClass('disabled');
			$navPrev.addClass('disabled');
		}
		else if( isLastPage ) {
			$navNext.addClass('disabled');
			$navPrev.removeClass('disabled');
		}
		else {
			$navNext.removeClass('disabled');
			$navPrev.removeClass('disabled');
		}
	}
	return { init : init };
})();
Page.init();