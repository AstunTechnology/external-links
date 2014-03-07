External Links
==============

jQuery plug to identify external links on a page, by default adds a class of `external-link` to each element which when the supplied stylesheet and image are used will result in the links having a small external link icon displayed after the link text.

The function `externalLinks` returns all matched elements to allow further work to be done. The following options can be passed to `externalLinks` by passing an object with the keys:

* `class`
    * The css class name to add to matching elements, defaults to `external-link`, if no class is required set to an empty string

* `re`
    * The regular expression (`RegExp`) used to identify internal links, any href that does not match this regex is consider an external link. By default the hostname of the current page is used. If more than one domain is considered internal then use the regex or notation, for instance to count  astuntech.com and astuntechnology.com as internal use `/(astuntech\.com)|(astuntechnology\.com)/i`.

Usage
-----

    // Select all external links on the page and give them a lovely yellow background color
    jQuery('body').externalLinks().css('background-color', 'yellow');

    // Select external links that are children of the element with an id of
    // 'foo' and give each a custom class of 'bar'
    jQuery('#foo').externalLinks({'class': 'bar'});

    // Override the regex used to match URLs that are considered internal
    jQuery('body').externalLinks({'re': /astuntechnology\.com/i});

Example
-------

Clone the repository, serve the demo.html page under a local webserver and view in a browser (try changing into the repo and running `python -m SimpleHTTPServer` if you have python installed). Just opening the file demo.html in a browser won't work as the hostname will be empty.

You can also view the demo page thanks to [rawgithub.com](http://rawgithub.com) here: [external link demo](http://rawgithub.com/AstunTechnology/external-links/master/demo.html).
