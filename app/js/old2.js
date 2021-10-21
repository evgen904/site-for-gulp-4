document.addEventListener("DOMContentLoaded", function() {

    console.log()

    function sliderInterestingInit() {

        let sliderWrap = document.querySelector('.js-slider-reviews')
        let slider = document.querySelector('.js-slider-reviews-body')
        let sliderList = document.querySelector('.js-slider-reviews-list')
        let sliderTrack = document.querySelector('.js-slider-reviews-track')
        let sliderNav = document.querySelector('.js-slider-reviews-nav')
        let btnPrev = document.querySelector('.js-slider-reviews-prev')
		let btnNext = document.querySelector('.js-slider-reviews-next')
        let slide = document.querySelectorAll('.js-slider-reviews-track > .review')

        let widthWrap = sliderWrap.offsetWidth
        let windowWidth = window.innerWidth
        
        let minDesktop = 1024
        let minMobile = 640

        let viewSlide = windowWidth <= minMobile ? 1 : windowWidth >= minDesktop ? 3 : 2;
        let countSlide = Math.ceil(slide.length / viewSlide) - 1;
        let currentSlide = 0;





        sliderWrap.classList.add('active')

        if (slide.length <= viewSlide) {
            sliderNav.classList.add('hide')
        }


        function itemWidth() {
        	let slideWidth = windowWidth <= minMobile ? Math.ceil((widthWrap) / viewSlide) : windowWidth >= minDesktop ? Math.ceil((widthWrap - 40) / viewSlide) : Math.ceil((widthWrap - 20) / viewSlide);

	        slide.forEach(item => {
	            item.style.minWidth = `${slideWidth}px`
	        })
        }

        itemWidth()
        

        if (sliderTrack) {
            
            let oneSlideWidth = (slide[0].offsetWidth + 20) * viewSlide


            let translateLeft = 0
            let lastSlide = (slide.length / viewSlide - 1) * oneSlideWidth;

            let countLastSlide = (slide.length / viewSlide).toFixed(1).slice(-1)


            btnPrev.addEventListener('click', () => {



                if (currentSlide === 0) {
                    currentSlide = countSlide
                } else {
                    currentSlide--
                }



                moveSlide(currentSlide)
            })
            btnNext.addEventListener('click', () => {




                if (countSlide > currentSlide) {
                    currentSlide++
                } else {
                    currentSlide = 0
                }



                moveSlide(currentSlide)
            })




            let wrDots = document.querySelector('.js-slider-reviews-dots')


            for (let i = 0; i < Math.ceil(slide.length / viewSlide); i++) {

                let newDot = document.createElement("button");
                newDot.classList.add('page')

                if (i === 0) {
                    newDot.classList.add('active')
                }

                wrDots.appendChild(newDot)


                newDot.addEventListener('click', () => {
                    moveSlide(i, Math.ceil(slide.length / viewSlide))
                    currentSlide = i
                })

            }

            function moveSlide(activeSlide) {

                if (activeSlide === 0) {
                    translateLeft = 0
                } else if (activeSlide === countSlide) {
                    translateLeft = -lastSlide
                } else {
                    translateLeft = -oneSlideWidth * activeSlide
                }

                sliderTrack.setAttribute('style', `transform: translate(${translateLeft}px, 0px)`)

                document.querySelectorAll('.js-slider-reviews-dots .page').forEach((item, index) => {

                    if (index == activeSlide) {
                        item.classList.add('active')
                    } else {
                        item.classList.remove('active')
                    }

                })
            }




let

  posInit = 0,
 posX1 = 0,
posX2 = 0,
getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  };


            swipeStart = function() {
                let evt = getEvent();

                posInit = posX1 = evt.clientX;
               
                document.addEventListener('touchmove', swipeAction);
                document.addEventListener('touchend', swipeEnd);

            },
            swipeAction = function() {

                let evt = getEvent()

                posX2 = posX1 - evt.clientX;
                posX1 = evt.clientX;

                let vvv = (posInit-posX1)

                sliderTrack.setAttribute('style', `transform: translate(${translateLeft-vvv}px, 0px); transition: transform 0s ease;`)


            },
            swipeEnd = function() {


                if (posX2 > 0) {
	                if (countSlide > currentSlide) {
	                    currentSlide++
	                } else {
	                    currentSlide = countSlide
	                }
                	moveSlide(currentSlide)
                } else {
                	if (currentSlide === 0) {
	                    currentSlide = 0
	                } else {
	                    currentSlide--
	                }
                	moveSlide(currentSlide)
                }

                document.removeEventListener('touchmove', swipeAction);
                document.removeEventListener('touchend', swipeEnd);

            },

            slider.addEventListener('touchstart', swipeStart);



        }
    }

    sliderInterestingInit()


});