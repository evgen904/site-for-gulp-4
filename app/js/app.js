window.mobileCheck = function() {
  //let check = false;
  //(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return window.innerWidth < 768 ? true : false;
};

if (!mobileCheck()) {
	s3Animator.once = true;
}

$(function(){	
	if (!mobileCheck()) {
		if ($('#home-fullpage') && !mobileCheck()) {
			$('#home-fullpage').fullpage({
				paddingTop: '100px',
				navigation: false,
				lockAnchors: true,
		        scrollingSpeed: 1000,
		        sectionSelector: '.fullpage-section',
		        scrollHorizontally: true,
		        slidesNavigation: false,
		        controlArrows: false,
		        parallax: true,
		        // scrollOverflow: true,
		        menu: '#menu',
		        anchors: ['screen-hero', 'screen-services', 'screen-projects', 'screen-video', 'screen-team', 'screen-team-1','screen-team-slider', 'screen-contacts'],
		        // normalScrollElements: '.header-nav-wrp',
		        scrollOverflowOptions: {
		            probeType: 3,
		            mouseWheel: true,
		            scrollbars: false
		        },
		        parallaxOptions: {
		            type: 'cover',
		            percentage: 100,
		            property: 'translate'
		        },
		        responsiveWidth: 768,
				afterLoad: function (origin, destination, direction) {
		            if (destination.index === 4 || destination.index === 5 ||destination.index === 6) {
						$('#nav-comanda').addClass('active')
						$('.comand-li').addClass('active')
						if (destination.index === 4) {
							$('.nav-comanda-1').removeClass('active')
							$('.nav-comanda-2').addClass('active')
							$('.nav-comanda-3').removeClass('active')
						} else if (destination.index === 5) {
							$('.nav-comanda-1').addClass('active')
							$('.nav-comanda-2').removeClass('active')
							$('.nav-comanda-3').addClass('active')
						} else if (destination.index === 6) {
							$('.nav-comanda-1').removeClass('active')
							$('.nav-comanda-2').addClass('active')
							$('.nav-comanda-3').removeClass('active')
						}
					} else {
						$('#nav-comanda').removeClass('active')
						$('.comand-li').removeClass('active')
					}
					//history.pushState(null, null, "index.html");
		        },
			});
		}
	}

		

	$('.nav-comanda-1').on('click', function() {
		$.fn.fullpage.moveTo(5);
	});
	$('.nav-comanda-2').on('click', function() {
		$.fn.fullpage.moveTo(6);
	});
	$('.nav-comanda-3').on('click', function() {
		$.fn.fullpage.moveTo(7);
	});

	$('.js-logo-slide').on('click', function() {
		$.fn.fullpage.moveTo(1);
	});



	if ($('.js-slider-command-mobile') && mobileCheck()) {
		$('.js-slider-command-mobile').slick({
		    dots: true,
		    arrows: false,
		    slidesPerRow: 2,
		    rows: 2,
		});
	}


	$('.js-menu-header-btn').on('click', function() {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active')
			$('.js-menu-header').addClass('active')
			$('body').css({'overflow':'hidden'})
		} else {
			$(this).removeClass('active')
			$('.js-menu-header').removeClass('active')
			$('body').css({'overflow':'visible'})
		}
	})


	if (mobileCheck()) {
		$('#menu li a').on('click', function(event) {
			event.preventDefault()
			$('.js-menu-header, .js-menu-header-btn').removeClass('active')
			$('body').css({'overflow':'visible'})
			window.scrollTo({
			    top: $($(this).attr('href').replace('screen-','')).position().top,
			    behavior: "smooth"
			});
		})
	}



	let owlCarousel = $('.js-projects');

	if (owlCarousel) {
		owlCarousel.on('initialized.owl.carousel changed.owl.carousel', function(e) {
		    if (!e.namespace)  {
		      return;
		    }
		    let carousel = e.relatedTarget;
		    let current = Number(carousel.relative(carousel.current()));

		    if (current === 0) {
		    	$('.js-one-slide').addClass('active')
		    	$('.js-two-slide').removeClass('active')
		    } else if (current === 1) {
		    	$('.js-one-slide').removeClass('active')
		    	$('.js-two-slide').addClass('active')
		    }
		    
		 }).owlCarousel({
		    loop:false,
		    margin:0,
		    nav:true,
		    mouseDrag: false,
		    touchDrag: true,
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

	  var videos = document.querySelectorAll('.js-video-slider video');
	  videos.forEach(video => { 
	    video.pause();
	 });
	}

	var playYouTubeVideos = (element) => { 
	  var iframes = element;
	  Array.prototype.forEach.call(iframes, iframe => { 
	    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
	    	func: 'playVideo' }), '*');
	 });
	}

	$('.js-video-slider').slick({
	  centerMode: true,
	  centerPadding: '28%',
	  slidesToShow: 1,
	  infinite: true,
	  //variableWidth: true,
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
	}).on('afterChange init', function(event, slick, direction){
	    // remove all prev/next
	    slick.$slides.removeClass('prevdiv').removeClass('nextdiv');

	    // find current slide
	    for (var i = 0; i < slick.$slides.length; i++)
	    {
	        var $slide = $(slick.$slides[i]);
	        if ($slide.hasClass('slick-current')) {
	            // update DOM siblings
	            $slide.prev().addClass('prevdiv');
	            $slide.next().addClass('nextdiv');
	            break;
	        }
	    }
	  }
	).on('beforeChange', function(event, slick){
	  stopAllYouTubeVideos();
	  slick.$slides.removeClass('prevdiv').removeClass('nextdiv');
	});





	$(document).on('click','.slick-active .js-btn-video',function(e){
		$(this).removeClass('active');
		$(this).prev().get(0).play();
		//playYouTubeVideos($(this).prev())
	})

	function activeSlide(e){
		var $currTarget = $(e.currentTarget), 
		    index = $currTarget.data('slick-index'),
		    slickObj = $('.js-video-slider').slick('getSlick');

		slickObj.slickGoTo(index);
	}

	$(document).on('click','.prevdiv',function(e){
		activeSlide(e)
	})

	$(document).on('click','.nextdiv',function(e){
		activeSlide(e)
	})





});