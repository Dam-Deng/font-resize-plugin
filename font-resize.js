/**
 * Created by dam on 26/7/2016.
 */
(function ($, window, document, cookie, undefined) {
    "use strict";
    $.fn.FontResize = function (option) {

        var $this = $(this);
        option = $.extend({}, $.fn.FontResize.defaultOptions, option);

        var cookie_size = cookie.get(option.cookieKey);
        $('body').addClass(cookie_size);

        for (var i = 0; i < option.size.length; i++) {
            var html = '<span class="font-resize ' + option.size[i] + '" data-resize="' + option.size[i] + '">'
                + '<span class="font-A">' + option.word[i] + '</span>'
                + '<span class="font-hover">' + option.hoverWord[i] + '</span>'
                + '</span>';
            $this.append(html);
        }

        $('.font-resize').click(function () {
            var cookie_size = cookie.get(option.cookieKey);
            var new_size = $(this).attr('data-resize');

            $('body').removeClass(cookie_size).addClass(new_size);
            cookie.set(option.cookieKey, new_size, {path: '/'});
        });

    };

    $.fn.FontResize.defaultOptions = {
        size: ['font-small', 'font-medium', 'font-large'],
        word: ['A', 'A', 'A'],
        hoverWord: ['最小', '默認', '最大'],
        cookieKey: 'font-resize'
    };
})(jQuery, window, document, cookie);
