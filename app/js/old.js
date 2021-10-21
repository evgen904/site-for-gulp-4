document.addEventListener("DOMContentLoaded", function () {
	
	console.log()

	function sliderInterestingInit() {

		document.querySelector('.js-slider-reviews').classList.add('active')


		let widthWrap = document.querySelector('.js-slider-reviews').offsetWidth
		let sliderInteresting = document.querySelector('.js-slider-reviews-wrap')
		let slide = document.querySelectorAll('.js-slider-reviews-wrap > .review')

		let viewSlide = 3

		let currentSlide = 0;


		if (slide.length <= viewSlide) {
			document.querySelector('.js-slider-reviews-nav').classList.add('hide')
		}


		let wS = Math.ceil((widthWrap-40) / viewSlide);

		slide.forEach(item => {
			item.style.minWidth = `${wS}px`
		})

		if (sliderInteresting) {
			let btnPrev = document.querySelector('.js-slider-reviews-prev')
			let btnNext = document.querySelector('.js-slider-reviews-next')
			let oneSlideW = (slide[0].offsetWidth+20) * viewSlide



			let translateLeft = 0
			let lastSlide = (slide.length/viewSlide-1)*oneSlideW;

			let countLastSlide = (slide.length/viewSlide).toFixed(1).slice(-1)


			btnPrev.addEventListener('click', () => {
				//moveSlide('prev', oneSlideW)


				let countDots = Math.ceil(slide.length/viewSlide)-1;

				
				if (currentSlide === 0) {
					currentSlide = countDots
				} else {
					currentSlide--
				}

				console.log(currentSlide)

				moveSlideDots(currentSlide, Math.ceil(slide.length/viewSlide))
			})
			btnNext.addEventListener('click', () => {
				//moveSlide('next', oneSlideW)



				let countDots = Math.ceil(slide.length/viewSlide)-1;

				
				if (countDots > currentSlide) {
					currentSlide++
				} else {
					currentSlide = 0
				}

				console.log(currentSlide)

				moveSlideDots(currentSlide, Math.ceil(slide.length/viewSlide))
			})

			


			let wrDots = document.querySelector('.js-slider-reviews-dots')


			for (let i = 0; i < Math.ceil(slide.length/viewSlide); i++) {

				let newDot = document.createElement("button");
				newDot.classList.add('page')

				if (i === 0) {
					newDot.classList.add('active')
				}

				wrDots.appendChild(newDot)


				newDot.addEventListener('click', () => {
					moveSlideDots(i, Math.ceil(slide.length/viewSlide))
					currentSlide = i
				})

			}

			function moveSlideDots(activeDots, lengthDots) {
				if (activeDots === 0) {
					translateLeft = 0
				} else if (activeDots === lengthDots-1) {
					translateLeft = -lastSlide
				} else {
					translateLeft = -oneSlideW
				}

				sliderInteresting.setAttribute('style', `transform: translate(${translateLeft}px, 0px)`)

				document.querySelectorAll('.js-slider-reviews-dots .page').forEach((item, index) => {

					if (index == activeDots) {
						item.classList.add('active')
					} else {
						item.classList.remove('active')
					}

				})
			}



			function moveSlide(position, widthSlide) {

				if (position == 'prev') {

					if (translateLeft < 0) {
		
						if (countLastSlide === '7') {

							if (currentSlide === 1) {
								translateLeft = 0
							} else {
								translateLeft += widthSlide
							}

						} else if (countLastSlide === '3') {							
							if (currentSlide === 1) {
								translateLeft = 0
							} else {
								translateLeft += widthSlide
							}

						} else {
							translateLeft += widthSlide
						}
						currentSlide--						

					} else {
						translateLeft = -lastSlide
						currentSlide = (countLastSlide === '3') ? Math.round(slide.length/viewSlide) : Math.round(slide.length/viewSlide)-1
					}

				} else if (position == 'next') {
					if (Math.abs(translateLeft) === lastSlide) {
						translateLeft = 0
						currentSlide = 0
					} else {
						
						if (countLastSlide === '7') {
							if (Math.round(slide.length/3)-2 === currentSlide) {
								translateLeft = -lastSlide
							} else {
								translateLeft -= widthSlide
							}
						} else if (countLastSlide === '3') {

							if (Math.round(slide.length/3)-1 === currentSlide) {
								translateLeft = -lastSlide
							} else {
								translateLeft -= widthSlide
							}
						} else {
							translateLeft -= widthSlide
						}
						currentSlide++
					}					
				}

				sliderInteresting.setAttribute('style', `transform: translate(${translateLeft}px, 0px)`)
				
				document.querySelectorAll('.js-slider-reviews-dots .page').forEach((item, index) => {
					if (index == currentSlide) {
						item.classList.add('active')
					} else {
						item.classList.remove('active')
					}
				})
			}
		}
	}

	sliderInterestingInit()

	
});