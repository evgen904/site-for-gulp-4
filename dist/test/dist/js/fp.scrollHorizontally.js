window.fp_scrollHorizontallyExtension = function () {
    var mainAPI = fullpage_api['getFullpageData'](),
        fpOptions = mainAPI['options'],
        fpInternals = mainAPI['internals'],
        _0x2baee7 = '_4';

    this.getScrollSection = function (scrDirection, scrFunction) {

        var activeFpSlide, activeFpSection = fp_utils.$('.fp-section.active')[0], fbSlidesCount = fp_utils.$('.fp-slide', activeFpSection).length;
        if (fpOptions.scrollHorizontally && fbSlidesCount > 1) {
            activeFpSlide = fp_utils.$('.fp-slide.active', activeFpSection)[0]
            if ('down' === scrDirection) {
                if (fp_utils.index(activeFpSlide) + 1 != fbSlidesCount) {
                    return fullpage_api.moveSlideRight;
                }
            } else if (fp_utils.index(activeFpSlide)) return fullpage_api.moveSlideLeft;
        }
        return scrFunction;

    }, this.c = fpInternals.c;
    abcxyz = this.c
    return 'complete' === document.readyState && this.c('scrollHorizontally'), window.addEventListener('load', function () {
        abcxyz('scrollHorizontally');
    }), this;
};
