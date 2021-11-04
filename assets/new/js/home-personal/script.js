(function($) {
	"use strict";
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length) {
			var windowpos=$(window).scrollTop();
			var siteHeader=$('.main-header');
			var scrollLink=$('.scroll-top');
			if (windowpos >=110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			}
			else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}
	headerStyle();
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
	}
	//Mobile Nav Hide Show
	if($('.mobile-menu').length) {
		$('.mobile-menu .menu-box').mCustomScrollbar();
		var mobileMenuContent=$('.main-header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		}
		);
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.megamenu').slideToggle(900);
		}
		);
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		}
		);
		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		}
		);
	}
	// banner-carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel( {
			loop:true, margin:0, nav:true, animateOut: 'fadeOut', animateIn: 'fadeIn', active: true, smartSpeed: 1000, autoplay: 6000, navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'], responsive: {
				0: {
					items: 1
				}
				, 600: {
					items: 1
				}
				, 800: {
					items: 1
				}
				, 1024: {
					items: 1
				}
			}
		}
		);
	}
	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	$(window).on('scroll', function() {
		headerStyle();
	}
	);
})(window.jQuery);

function newsletter() {
	var email = $.trim($('#getemail').val());
	if( email != "" ) {
		var url = SITEURL + '/home/newsletter';
		//alert(email);die;
		$.ajax({
			type: 'POST', 
			url: url, 
			data: {
				email: email
			}, 
			success: function (data) {
				var msg_dis='<p style="color:green" id="msg">'+data.msg+'</p>';
				$('#msg').html(msg_dis);
			}.bind(this), dataType: 'json', error: function (xhr, status, err) {
				console.log(status);
			}.bind(this)
		});
	} else {
		var msg_dis='<p style="color:red" id="msg">please add an email</p>';
		$('#msg').html(msg_dis);
	}
}