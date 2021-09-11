jQuery(document).ready(function ($) {

    function setHeight(selector, varname) {
        if (!selector.length) return;

        document.documentElement.style.setProperty(`--${varname}`, `${selector.outerHeight()}px`);
    }

    setHeight($(window), `vh`);
    setHeight($('#header'), `hh`);

    $(window).on(`resize`, function () {
        setHeight($(window), `vh`);
        setHeight($('#header'), `hh`);
        document.documentElement.style.setProperty(`--sh`, `${$(`.fp-tableCell`).outerHeight() - $('#header').outerHeight() - 50}px`);
    });

    $(`input`).on(`input`, function () {
        if ($(this).hasClass(`invalid`)) {
            $(this).removeClass(`invalid`);
        }
    });


    $('#home-fullpage').fullpage({
        navigation: false,
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
        responsiveWidth: 1200,
        afterLoad: function (origin, destination, direction) {
            if (destination.isFirst && !$(destination.item).hasClass('loaded')) {
                $(destination.item).addClass('loaded')
            }
            if (!$(`#home-fullpage`).hasClass('vis')) {
                $(`#home-fullpage`).addClass('vis')
            }
            if (!$(`#header`).hasClass('vis')) {
                $(`#header`).addClass('vis')
            }
            console.log($(`.fp-tableCell`).eq(0).outerHeight())
            document.documentElement.style.setProperty(`--sh`, `${$(`.fp-tableCell`).eq(0).outerHeight() - $('#header').outerHeight() - 100}px`);
        },
        afterRender: function () {
            //fullpage_api.setAllowScrolling(false);
            setTimeout(() => {
                fullpage_api.silentMoveTo(1);
            }, 10)
        },
        onLeave: function (origin, destination, direction) {
            if (!$(destination.item).hasClass('loaded')) {
                $(destination.item).addClass('loaded');
            }
            document.documentElement.style.setProperty(`--sh`, `${$(`.fp-tableCell`).eq(0).outerHeight() - $('#header').outerHeight() - 100}px`);

            if ($('.fp-scrollable', destination.item).length) {
                let iscroll = $('.fp-scrollable', destination.item)[0].fp_iscrollInstance;
                if (iscroll && typeof iscroll !== undefined) {
                    iscroll.on('scroll', function () {
                        if (this.y <= this.maxScrollY + 20 || this.y >= -10) {
                            setTimeout(() => {
                                fullpage_api.setAllowScrolling(true);
                            }, 50)
                        } else {
                            fullpage_api.setAllowScrolling(false);
                        }
                    });
                }
            }
        }
    });





    new Swiper(".projects-slider", {
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".projects-slider .arrow-right",
            prevEl: ".projects-slider .arrow-left",
        },
        on: {
            slideChange: function () {
                $(`.projects-slider .arrows .current`).text(this.realIndex + 1)
            },
        },
    });

    new Swiper(".videos-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
        pagination: {
            el: ".videos-pagination",
            clickable: true,
        },
        on: {

            slideChange: function () {
                $(`#video video`).each(function () {
                    this.pause();
                });
                $(`#video .slide-titles .slide-title:not(.active)`)
                    .text($(`.video-title`, this.slides[this.activeIndex]).text())
                    .addClass('active').siblings().removeClass('active');
            },
        },
    });

    new Swiper(".persons-slider", {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 65,
        slidesPerColumnFill: 'row',
        // loop: true,
        breakpoints: {
            1400: {
                spaceBetween: 40
            },
            1200: {
                spaceBetween: 25
            },
        }
    });

    $(`.expand-bio`).on('click', function () {
        $(this).toggleClass('expanded');
        if ($(this).hasClass('expanded')) {
            $(this).text('Свернуть')
        } else {
            $(this).text('Развернуть')
        }
        $(this).siblings('.long').stop(true, true).slideToggle();
        let iscroll = $('#team .fp-scrollable').get(0).fp_iscrollInstance;
        setTimeout(() => {
            iscroll.refresh();
        }, 400)
    });

    $(`img`).prop('draggable', false);

    $(`.zoom-btn`).on('click', function () {
        if ($(this).hasClass('zoomed')) {
            $(this).removeClass('zoomed');
            $(this).parents('.zooming').css({'width': '100%'})
        } else {
            let w = $(this).parents('.areas').width();
            $(this).addClass('zoomed');
            $(this).parents('.zooming').css({'width': w + 'px'})
        }
    });

    $(`#video video`).each(function () {
        this.addEventListener('play', function () {
            $(this).parents('.video').addClass('playing');
            $(this).parents('.swiper-slide').siblings().find('video').each(function () {
                this.pause();
            });
        });
        this.addEventListener('pause', function () {
            $(this).parents('.video').removeClass('playing');
        });
    })
});
