s3Animator.once = true;

window.mobileCheck = function() {
  //let check = false;
  //(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return window.innerWidth < 768 ? true : false;
};

$(function(){
	
	let tabContent = $(".tab_content");
	let tabs = $(".js-menu-header li a");
	let hash = window.location.hash;

	tabs.click(function(e) {
		let activeTab = $(this)[0].hash;

		if (activeTab === "#video") {
			$('.js-video-slider .slick-dots li:nth-child(2) button').click();
		}

		if (mobileCheck()) {
			$('.js-menu-header-btn').removeClass('active')
			$('.js-menu-header').removeClass('active')

			window.scrollTo({
			    top: $(activeTab).position().top,
			    behavior: "smooth"
			});

		} else {
			e.preventDefault();
			$(this).parent().addClass('active').siblings().removeClass('active');
			tabContent.hide().removeClass('active');
			

			$(activeTab).fadeIn();

			if (activeTab == '#command') {
				$('#nav-comanda').addClass('active')
			} else {
				$('#nav-comanda').removeClass('active')
			}
		}
		return false;
	});


	/*$('#nav-comanda li').on('click', function() {
		$('#nav-comanda li').removeClass('active')
		$(this).addClass('active')

		let selector = $(this).data('tag')

		$('#fullpage').animate({
	        scrollTop: $(selector).offset().top-100
	    }, 1000); 
	})*/




	$('.js-main-slide').on('click', function(e) {
		e.preventDefault()
		$('#fp-nav').removeClass('active')
		tabContent.hide().removeClass('active');
		$('#main').fadeIn();
		$(".js-menu-header li").removeClass('active');
	}) 


	$('.js-menu-header-btn').on('click', function() {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active')
			$('.js-menu-header').addClass('active')
		} else {
			$(this).removeClass('active')
			$('.js-menu-header').removeClass('active')
		}
	})


	let owlCarousel = $('.js-projects');

	if (owlCarousel) {
		owlCarousel.on('initialized.owl.carousel changed.owl.carousel', function(e) {
		    if (!e.namespace)  {
		      return;
		    }
		    let carousel = e.relatedTarget;
		    let current = Number(carousel.relative(carousel.current())) + 1;
		    $('.js-counter-slide').html('<span>' + current + '</span>' + ' / ' + carousel.items().length);
		 }).owlCarousel({
		    loop:false,
		    margin:0,
		    nav:true,
		    mouseDrag: false,
		    touchDrag: false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
		    items:1
		})

		$('.js-prev-slide').on('click', function() {
			owlCarousel.trigger('prev.owl.carousel');
		})

		$('.js-next-slide').on('click', function() {
			owlCarousel.trigger('next.owl.carousel');
		})
	}


	var stopAllYouTubeVideos = () => { 
	  var iframes = document.querySelectorAll('iframe');
	  Array.prototype.forEach.call(iframes, iframe => { 
	    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
	  func: 'pauseVideo' }), '*');
	 });
	}

	$('.js-video-slider').slick({
	  centerMode: true,
	  centerPadding: '28%',
	  slidesToShow: 1,
	  infinite: false,
	  //initialSlide: 1,
	  dots: true,
	  draggable: true,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 640,
	      settings: {
	        centerPadding: '20%',
	      }
	    }
	  ]
	}).on('beforeChange', function(){
	  stopAllYouTubeVideos();
	}).on('wheel', (function(e) {
	  e.preventDefault();

	  if (e.originalEvent.deltaY < 0) {
	    $(this).slick('slickNext');
	  } else {
	    $(this).slick('slickPrev');
	  }
	}));



	// if ($('#fullpage') && !mobileCheck()) {
	// 	$('#fullpage').fullpage({
	// 		paddingTop: '0px',
	// 		css3: false,
	// 		navigation: true,
	// 		navigationPosition: 'right',
	// 		scrollingSpeed: 0,
	// 		fitToSectionDelay: 0,
	// 		sectionsColor:['#e4e4e4','#e4e4e4','#e4e4e4'],


	// 		onLeave: function(origin, destination, direction){

	// 			if (origin === 2) {
	// 				$('#section0 .block-contact-1--img').addClass('s3-animator-zoomIn s3-animator-d4')
	// 				$('#section0 .block-contact-1--text').addClass('s3-animator-fadeInRight s3-animator')

	// 				$('#section2 .block-command').addClass('s3-animator-zoomIn s3-animator-d4')


	// 			} else {
	// 				$('#section0 .block-contact-1--img').removeClass('s3-animator-zoomIn s3-animator-d4')
	// 				$('#section0 .block-contact-1--text').removeClass('s3-animator-fadeInRight s3-animator')

	// 				$('#section2 .block-command').removeClass('s3-animator-zoomIn s3-animator-d4')
	// 			}

	// 			if (origin === 1 || origin === 3) {
	// 				$('#section1 .block-contact-1--img').addClass('s3-animator-zoomIn s3-animator-d4')
	// 				$('#section1 .block-contact-1--text').addClass('s3-animator-fadeInLeft s3-animator')
	// 			} else {
	// 				$('#section1 .block-contact-1--img').removeClass('s3-animator-zoomIn s3-animator-d4')
	// 				$('#section1 .block-contact-1--text').removeClass('s3-animator-fadeInLeft s3-animator')
	// 			}




	// 		},
			
	// 	});
	// }


	let offsetSlideOne = window.innerHeight > 680 ? 375 : 180;
	let offsetSlideTwo = window.innerHeight > 680 ? 475 : 280;
	let offsetSlideThree = window.innerHeight > 680 ? 500 : 340;
	let offsetSlideFour = window.innerHeight > 680 ? 1992 : 1000;
	let offsetSlideSix = window.innerHeight > 680 ? 1800 : 1200;



	if (!mobileCheck()) {
		$('#fullpage').scroll(function() {

			let scroll = $(this).scrollTop();

			if (scroll > offsetSlideOne) {
				$('.site-wrap .block-main #section0 .block-contact-1--img').css({
					'transform': `translateY(100%)`
				})

				$('.site-wrap .block-main #section1 .block-contact-1--img').css({
					'transform': `translateY(20%)`
				})
				$('.site-wrap .block-main #section1 .block-contact-1--text').addClass('show-block')

				

				$('.nav-comanda-1').removeClass('active')
				$('.nav-comanda-2').addClass('active')
			
			} else {

				if (scroll < offsetSlideTwo) {
					$('.site-wrap .block-main #section1 .block-contact-1--img').css({
						'transform': `translateY(100%)`
					})
					
				}	
				$('.site-wrap .block-main #section0 .block-contact-1--img').css({
					'transform': `translateY(0%)`
				})
				$('.site-wrap .block-main #section1 .block-contact-1--text').removeClass('show-block')	
				$('.nav-comanda-2').removeClass('active')
				$('.nav-comanda-1').addClass('active')	
			}

			if (scroll > offsetSlideThree) {
				$('.site-wrap .block-main #section1 .block-contact-1--img').css({
					'transform': `translateY(0%)`
				})

			}


			if (scroll > $('#section2').offset().top-100) {
				$('.nav-comanda-2').removeClass('active')
			}

			if (scroll > offsetSlideFour) {
				$('.nav-comanda-3').removeClass('active')
			} else {
				if (scroll > offsetSlideSix) {
					$('.nav-comanda-3').addClass('active')
				}				
			}

		})



		let el = document.querySelector('#section2');

		let observer = new IntersectionObserver(function (entries) {
		    entries.forEach(function (entry) {
		    	if (entry.isIntersecting) {
		    		$('.site-wrap .block-main #section1 .block-contact-1--img').addClass('no-fixed')
		    		$('.nav-comanda-2').removeClass('active')
					$('.nav-comanda-3').addClass('active')	
		    	} else {
		    		$('.site-wrap .block-main #section1 .block-contact-1--img').removeClass('no-fixed')
		    		$('.nav-comanda-3').removeClass('active')	
		    	}
		    });
		});
		observer.observe(el);
	}



	if ($('.js-slider-command-mobile') && mobileCheck()) {
		$('.js-slider-command-mobile').slick({
		    dots: true,
		    arrows: false,
		    slidesPerRow: 2,
		    rows: 2,
		});
	}




});

