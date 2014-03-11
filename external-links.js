(function($) {
    $.fn.externalLinks = function(options) {
        options = options || {};
        var re = options.re || new RegExp(window.location.hostname.split('.').join('\\.'), 'i'),
            cssClass = options.hasOwnProperty('class') ? options['class'] : 'external-link';
        return this.find('a').filter(function () {
            var re = /^http(s)?/i
            return re.test(this.href);
        }).filter(function() {
            return !re.test(this.href);
        }).addClass(cssClass);
    }
})(jQuery);
