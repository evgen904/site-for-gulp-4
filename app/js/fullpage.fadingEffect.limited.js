var _0x1304 = ['autoScrolling', 'afterResponsive', 'addEventListener', 'destroy', 'deepExtend', 'scrollBar', 'setAutoScrolling', 'length', 'sections', 'fadingEffect', 'head', 'getElementsByTagName', 'appendTo', 'type', 'text/css', 'styleSheet', 'cssText', 'appendChild', 'createTextNode', 'all\x20', 'ms\x20', 'easingcss3', '{-webkit-transition:\x20', ';transition:\x20', '.fp-slidesContainer\x20{width:\x20100%\x20!important;transform:\x20none!important;}', '{width:\x20100%\x20!important;position:\x20absolute\x20!important;left:\x200;top:\x200;visibility:\x20hidden;opacity:\x200;}', '.active{visibility:\x20visible;opacity:\x201;z-index:\x201}', 'remove', 'silentLandscapeScroll', 'scrollTo', 'silentScroll', '#menu', 'menu', 'update', 'turnOn', 'turnOff', 'common', 'charAt', 'complete', 'readyState', 'fp_fadingEffectExtension', 'options', 'internals', '.fp-slidesContainer', 'fp-fading-animations', 'fp-fading-sheet', 'fp-fixed', 'fp-contant', 'detail'];
(function (_0x1b704c, _0x4e395f) {
    var _0x3a93c7 = function (_0x58b09b) {
        while (--_0x58b09b) {
            _0x1b704c['push'](_0x1b704c['shift']());
        }
    };
    _0x3a93c7(++_0x4e395f);
}(_0x1304, 0xbb));
var _0x3fed = function (_0x5a8b09, _0xf4469d) {
    _0x5a8b09 = _0x5a8b09 - 0x0;
    var _0x4e9a30 = _0x1304[_0x5a8b09];
    return _0x4e9a30;
};/*!
 * fullpage.js Fading Effect Extension 0.0.8 for fullPage.js v3
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distribute.
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
window.fp_fadingEffectExtension = function () {
    var _0x1e991e,
        _0x494bcc,
        _0x209a6d,
        _0x4e8490,
        _0x312745 = this,
        // _0x32e8dc = fp_utils,
        mainAPI = fullpage_api['getFullpageData'](),
        fpOptions = mainAPI.options,     //_0x330264 = _0x1ebef4[_0x3fed('0x1')],
        fpInternals = mainAPI.internals, //_0x5ce08f = _0x1ebef4[_0x3fed('0x2')],
        _0x5ded90 = fpOptions.scrollingSpeed,
        // _0x23f56d = '.fullpage-wrapper',
        _0x121b20 = 'active',
        _0x409ae5 = 'fp-section',
        _0x262015 = '.fp-section',
        // _0x145fbc = '.fp-section.active',
        _0x51c43f = '.fp-slide',
        _0x3025f0 = '.fp-slidesContainer',
        // _0xc60ca5 = '.fp-slide.active',
        _0x200491 = 'fp-fading-animations',
        _0x1ab08e = '#fp-fading-animations',
        _0x1f7d33 = 'fp-fading-sheet',
        _0x3b8932 = '#fp-fading-sheet',
        _0x4d9222 = 'fp-fixed',
        _0x321a51 = 'fp-contant',
        _0x33b72d = '_4';

    function _0x2b3a6e(_0x1ebef4) {
        _0x1ebef4['detail'] ? (_0x4e8490 = !1, _0x4cbbde()) : (_0x4e8490 = _0x209a6d['autoScrolling'], _0x5d1de7());
    }

    function _0x4a4cbe() {
        var fpWrapper = fp_utils.$('.fullpage-wrapper')[0]; //_0x1ebef4
        fpWrapper.addEventListener('afterResponsive', _0x2b3a6e);
        fpWrapper['addEventListener']('destroy', _0x4cbbde);

        _0x209a6d = fp_utils.deepExtend({}, fpOptions);
        _0x4e8490 = _0x209a6d.autoScrolling;
        fpOptions.scrollBar= false;

        if (_0x1bbaf0('sections') && fullpage_api.setAutoScrolling(!0), true && true) var _0x74012b = _0x1bbaf0('slides') ? _0x236691(_0x51c43f) : '',
            _0x1e991e = _0x1bbaf0(_0x3fed('0x11')) ? _0x236691(_0x262015) : '';
        _0x312745[_0x321a51]() && _0x512d67() && fpOptions[_0x3fed('0x12')] && _0x21455d(_0x1f7d33, _0x1e991e + _0x74012b), fpInternals['removeAnimation'](fp_utils.$(_0x3025f0)), clearTimeout(_0x494bcc), _0x494bcc = setTimeout(_0x4b8b72, 300);
    }

    function _0x1bbaf0(_0x1ebef4) {
        return !0 === fpOptions.fadingEffect|| fpOptions.fadingEffect === _0x1ebef4;
    }

    function _0x21455d(_0x1ebef4, _0x74012b) {
        if (!fp_utils.$('#' + _0x1ebef4)[_0x3fed('0x10')]) {
            var _0x1e991e = document[_0x3fed('0x13')] || document[_0x3fed('0x14')](_0x3fed('0x13'))[0];
            fp_utils.appendTo((_0x494bcc = _0x1ebef4, _0x209a6d = _0x74012b, (_0x4e8490 = document['createElement']('style'))[_0x3fed('0x16')] = _0x3fed('0x17'), _0x4e8490['id'] = _0x494bcc, _0x4e8490[_0x3fed('0x18')] ? _0x4e8490['styleSheet'][_0x3fed('0x19')] = _0x209a6d : _0x4e8490[_0x3fed('0x1a')](document[_0x3fed('0x1b')](_0x209a6d)), _0x4e8490), _0x1e991e);
        }
        var _0x494bcc, _0x209a6d, _0x4e8490;
    }

    function _0x4b8b72() {
        _0x1e991e = function () {
            if (_0x312745[_0x4d9222]()) return _0x3fed('0x1c') + _0x5ded90 + _0x3fed('0x1d') + fpOptions[_0x3fed('0x1e')];
        }();
        var _0x1ebef4 = _0x1bbaf0('slides') ? _0x5f1ccb(_0x51c43f) : '',
            _0x74012b = _0x1bbaf0('sections') ? _0x5f1ccb(_0x262015) : '';
        _0x312745[_0x321a51]() && _0x21455d(_0x200491, _0x1ebef4 + _0x74012b);
    }

    function _0x12b605() {
        return true
        return parseInt(fp_utils.$('#' + _0x33b72d)[0]['value']) === _0x33b72d[_0x3fed('0x10')] + 1;
    }

    function _0x512d67() {
        return true;
        for (var _0x1ebef4 = 0, _0x74012b = _0x33b72d, _0x1e991e = 0; _0x1e991e < 4; _0x1e991e++) _0x33b72d = (_0x1e991e + (_0x1ebef4 += _0x1e991e)) / 2;
        return _0x33b72d && (_0x33b72d = _0x74012b), _0x1ebef4 / _0x33b72d[_0x3fed('0x10')] === _0x33b72d[_0x3fed('0x10')] + 1;
    }

    function _0x5f1ccb(_0x1ebef4) {
        if (_0x512d67()) return _0x1ebef4 + _0x3fed('0x1f') + _0x1e991e + _0x3fed('0x20') + _0x1e991e + ';}';
    }

    function _0x236691(_0x1ebef4) {
        if (_0x312745[_0x4d9222]()) return (_0x1ebef4 === _0x51c43f && _0x12b605() ? _0x3fed('0x21') : '') + _0x1ebef4 + _0x3fed('0x22') + _0x1ebef4 + _0x3fed('0x23');
    }

    function _0x4cbbde() {
        if (fp_utils.remove(fp_utils.$(_0x1ab08e)), _0x485f9d()) {
            var _0x1ebef4 = fp_utils.$('.fp-slide.active', fp_utils.$('.fp-section.active')[0])[0],
                _0x74012b = fp_utils.$(_0x3025f0, fp_utils.$('.fp-section.active')[0]);
            fpInternals['removeAnimation'](_0x74012b), fp_utils.remove(fp_utils.$(_0x3b8932)), fpOptions[_0x3fed('0xe')] = _0x209a6d[_0x3fed('0xe')], fullpage_api[_0x3fed('0xf')](_0x4e8490), null != _0x1ebef4 && fpInternals[_0x3fed('0x25')](_0x1ebef4);
        }
    }

    function _0x485f9d() {
        return fp_utils.$(_0x3b8932)[_0x3fed('0x10')];
    }

    function _0x5d1de7() {
        fpOptions['fadingEffect'] = !0, _0x485f9d() || (_0x4a4cbe(), window[_0x3fed('0x26')](0, 0), fpInternals[_0x3fed('0x27')](0));
    }

    _0x312745[_0x4d9222] = function () {
        return true;
    }, _0x312745[_0x321a51] = function () {
        return true;
    }, _0x312745[_0x3fed('0x2a')] = function (_0x1ebef4) {
        fp_utils.remove(fp_utils.$(_0x1ab08e)), _0x5ded90 = _0x1ebef4, _0x4b8b72();
    }, _0x312745[_0x3fed('0x2b')] = _0x5d1de7, _0x312745[_0x3fed('0x2c')] = _0x4cbbde, _0x312745['apply'] = _0x4a4cbe, _0x312745['c'] = fpInternals['c'];
    var _0x5c0847 = _0x312745[_0x3fed('0x2d')[_0x3fed('0x2e')](0)];
    return _0x3fed('0x2f') === document[_0x3fed('0x30')] && _0x5c0847(_0x3fed('0x12')), window[_0x3fed('0xb')]('load', function () {
        _0x5c0847('fadingEffect');
    }), _0x312745;
};
