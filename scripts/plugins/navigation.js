(function(init) {
    'use strict';
    // The global jQuery object is passed as a parameter
    init(window.jQuery, window, document);

}(function($, window, document) {
    'use strict';
    // The $ is now locally scoped 

    // Listen for the jQuery ready event on the document
    $(function() {

        var $mainView = $("#view");
        //The DOM is ready!

        function init() {
            // Do this when a page loads.
        };

        function ajaxLoad(html) {
            // Do this after ajax loads.
        };

        function loadView(href) {
            $mainView.load(href + " main>*", ajaxLoad);
        };

        init();

        $(window).on("popstate", function(e) {
            if (e.originalEvent.state !== null) {
                var href = ($(location).attr('href') + ''),
                    origin = ($(location).attr('origin') + '/iscoutgames/'),
                    viewName = href.replace(origin, "");
                href = viewName;
                loadView(href);
            }
        });

        $(document).on("click", ".nav-list li", function() {
            var $element = $(this),
                href = $(this).attr("data-rel");
            if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
                history.pushState({}, '', href);
                $mainView.load(href + " #view>*", ajaxLoad);
                console.log($(this).attr("data-rel"));
            }
        });

    });

    // The rest of code goes here!

}));