document.addEventListener("DOMContentLoaded", function() {

    function sliderInterestingInit() {

        const sliderWrap = document.querySelector('.js-slider-reviews')
        const slider = document.querySelector('.js-slider-reviews-body')
        const sliderList = document.querySelector('.js-slider-reviews-list')
        const sliderTrack = document.querySelector('.js-slider-reviews-track')
        const sliderNav = document.querySelector('.js-slider-reviews-nav')
        const btnPrev = document.querySelector('.js-slider-reviews-prev')
        const btnNext = document.querySelector('.js-slider-reviews-next')
        const slide = document.querySelectorAll('.js-slider-reviews-track > .js-slider-item')
        const dots = document.querySelector('.js-slider-reviews-dots')

        const widthWrap = sliderWrap.offsetWidth
        const windowWidth = window.innerWidth

        const minDesktop = 1024
        const minMobile = 640

        const viewSlide = windowWidth <= minMobile ? 1 : windowWidth >= minDesktop ? 3 : 2
        const countSlide = Math.ceil(slide.length / viewSlide) - 1
        let currentSlide = 0;

        let posInit = 0
        let posX1 = 0
        let posX2 = 0

        function showSlider() {
            sliderWrap.classList.add('active')

            if (slide.length <= viewSlide) {
                sliderNav.classList.add('hide')
            }
        }

        function itemWidth() {
            let slideWidth = windowWidth <= minMobile ? Math.ceil((widthWrap) / viewSlide) : windowWidth >= minDesktop ? Math.ceil((widthWrap - 40) / viewSlide) : Math.ceil((widthWrap - 20) / viewSlide)

            slide.forEach(item => {
                item.style.minWidth = `${slideWidth}px`
            })
        }

        function addDots() {
            for (let i = 0; i < countSlide + 1; i++) {
                let dot = document.createElement("button");

                if (i === 0) {
                    dot.classList.add('active')
                }
                dots.appendChild(dot)
                dot.addEventListener('click', () => {
                    moveSlide(i)
                    currentSlide = i
                })
            }
        }

        itemWidth()
        showSlider()
        addDots()

        if (sliderTrack) {

            let oneSlideWidth = (slide[0].offsetWidth + 20) * viewSlide
            let translateLeft = 0
            let lastSlide = (slide.length / viewSlide - 1) * oneSlideWidth

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

            function moveSlide(activeSlide) {
                if (activeSlide === 0) {
                    translateLeft = 0
                } else if (activeSlide === countSlide) {
                    translateLeft = -lastSlide
                } else {
                    translateLeft = -oneSlideWidth * activeSlide
                }

                sliderTrack.setAttribute('style', `transform: translate(${translateLeft}px, 0px)`)

                document.querySelectorAll('.js-slider-reviews-dots button').forEach((item, index) => {
                    if (index == activeSlide) {
                        item.classList.add('active')
                    } else {
                        item.classList.remove('active')
                    }
                })
            }

            let getEvent = function() {
                return (event.type.search('touch') !== -1) ? event.touches[0] : event;
            };

            let swipeStart = function() {
                posInit = posX1 = getEvent().clientX

                document.addEventListener('touchmove', swipeAction)
                document.addEventListener('touchend', swipeEnd)
            }
            let swipeAction = function() {
                posX2 = posX1 - getEvent().clientX
                posX1 = getEvent().clientX

                let posSwipe = (posInit - posX1)
                sliderTrack.setAttribute('style', `transform: translate(${translateLeft-posSwipe}px, 0px); transition: transform 0s ease;`)
            }
            let swipeEnd = function() {
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
                document.removeEventListener('touchmove', swipeAction)
                document.removeEventListener('touchend', swipeEnd)
            }

            slider.addEventListener('touchstart', swipeStart)

        }

    }

    sliderInterestingInit()

});