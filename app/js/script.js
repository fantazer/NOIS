$(document).ready(function () {

	// nice select
	$('.select-beauty').niceSelect();
	// nice select === end

	//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	var scrollWidth= window.innerWidth - $(document).width();
	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%',
				paddingRight:scrollWidth
			});

		}
		modalState.isModalShow = true;
	};

	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos,
			paddingRight:0
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').addClass('modal-hide-animation');
		setTimeout(function(){
			$('.modal').removeClass('modal-hide-animation');
			$('.modal').removeClass('modal__show');
		},600);
		modalState.isModalShow = false;
	};

	var initModal = function (el) {
		openModal();

		$('.modal').each(function () {
			if ($(this).data('modal') === el) {
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);

	};

	$('.modal-get').click(function () {
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-close, .modal-hide').click(function () {
		closeModal();
	});
	//modals===end

	// fix top-menu
	/*var shrinkHeader = 250;
	var head = $('.header');
	var heightHeader = head.height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('body').css('paddingTop',heightHeader);
				head.addClass('shrink');
			}
			else {
					$('body').css('paddingTop',0);
					head.removeClass('shrink');
			}
	});

	$(window).resize(function(){
		heightHeader=head.height();
	});*/
	// fix top-menu === end

	// slider
		$('.slider-list').slick({
			slidesToShow: 3,
			speed: 500,
			dots:false,
			arrows:false,
			rows:0,// убирает вложенный пустой div
			//autoplay: true,
			//fade: true
			//autoplaySpeed: 8000, time between
			customPaging : function(slider, i) {
				return '<span class="dot"></span>';
			}
		});

		$('.slider-banner').slick({
			slidesToShow: 1,
			speed: 500,
			dots:true,
			arrows:false,
			rows:0,
			customPaging : function(slider, i) {
				return '<span class="dot"></span>';
			}
		});
		// ==== simple end ===

		// === custom arrow el ===
		$('.slider-control--right').click(function(){
			$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
		});

		$('.slider-control--left').click(function(){
			$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
		});
		// custom arrow el === end
	// slider === end

	// SWITCHERS
		// dropdown
		$('.js-drop-toggle').click(function(){
			$(this).closest(".js-drop-wrap").toggleClass("active")
			$(this).closest(".js-drop-wrap").find(".js-drop-cont").slideToggle();
		});
		// dropdown === end

		// choose
		$('.js-choose').click(function () {
			$(this).toggleClass('active');
		});
		// choose === end

		// choose-group
		$('.js-choose-group-el').click(function () {
			$(this).closest(".js-choose-group").find(".js-choose-group-el").removeClass("active");
			$(this).addClass('active');
		});
		// choose-group === end

	// SWITCHERS === end

	// template scroll
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
	if(!isMac) {
		$(".scroll").niceScroll({
			autohidemode: false,
			cursorcolor: "#dcdcdc",
			scrollspeed: 160, // scrolling speed
			mousescrollstep: 10,
		});
	}
	// template scroll === end

	// toggle catalog view
	$('.type-view__el').click(function(){
		$('.type-view__el').removeClass('type-view__el--active')
		$(this).addClass('type-view__el--active')
		if($(this).data("type") === "line"){
			$('.item-list').addClass("item-list--line")
		}else{
			$('.item-list').removeClass("item-list--line")
		}
	});
	// toggle catalog view === end

});
