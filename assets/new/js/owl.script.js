/*----------------------------------------------------*/
/*	Testimonials Rotator
/*----------------------------------------------------*/

if ( $('.reviews-holder').length ) {
	var owl = $('.reviews-holder');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
}

if ( $('.teams-holder').length ) {
	var owl = $('.teams-holder');
	owl.owlCarousel({
		items: 4,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 4
			},
			1000: {
				items: 4
			}
		}
	});
}

if ( $('.country-carousel').length ) {
	var owl = $('.country-carousel');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: false,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,

		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
}

if ( $('.students-carousel').length ) {
	var owl = $('.students-carousel');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
}

if ( $('.gti-carousel').length ) {
	var owl = $('.gti-carousel');
	owl.owlCarousel({
		stagePadding: 50,
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
}

if ( $('.immigration-opportunitie').length ) {
	var owl = $('.immigration-opportunitie');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
}

if ( $('.tp-banner').length ) {
	var revapi;
	revapi = jQuery('.tp-banner').revolution({
		delay: 9000,
		startwidth: 1170,
		startheight: 700,
		hideThumbs: 200,
		fullWidth: "on",
		forceFullWidth: "on"
	});
}

if ( $('.blog-carousel').length ) {
	var owl = $('.blog-carousel');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
}

if ( $('[data-appear-animation]').length ) {
	$("[data-appear-animation]").each(function () {
		var self = $(this);
		var animation = self.data("appear-animation");
		var delay = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);

		if ($(window).width() > 959) {
			self.html('0');
			self.waypoint(function (direction) {
				if (!self.hasClass('completed')) {
					var from = self.data('from');
					var to = self.data('to');
					var interval = self.data('interval');
					self.numinate({
						format: '%counter%',
						from: from,
						to: to,
						runningInterval: 2000,
						stepUnit: interval,
						onComplete: function (elem) {
							self.addClass('completed');
						}
					});
				}
			}, {
				offset: '85%'
			});
		} else {
			if (animation == 'animateWidth') {
				self.css('width', self.data("width"));
			}
		}
	});
}

if ( $('.imm-reviews-holder').length ) {
	var owl = $('.imm-reviews-holder');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
}

if ( $('.imm-reviews-holder-about').length ) {
	var owl = $('.imm-reviews-holder-about');
	owl.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		navText: ["<i class='fas fa-arrow-left owlsplstyle'></i>", "<i class='fas fa-arrow-right owlsplstyle'></i>"],
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 1
			},
			991: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
}

if ( $('#med-counter').length ) {
	var a = 0;
	$(window).scroll(function () {

		var oTop = $('#med-counter').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {

					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}

				});
			});
			a = 1;
		}

	});
}

if ( $('.we-help-you-slider').length ) {
	var owl = $('.we-help-you-slider');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
}

if ( $('.imm-reviews-holder-medical-inner').length ) {
	var owl = $('.imm-reviews-holder-medical-inner');
	owl.owlCarousel({
		items: 2,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: true,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	});
}