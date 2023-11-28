(function ($) {
    "use strict";

    //FAQ page Expand/Collapse
    $(".collapse-all-btn").click(function(){
        $(".accordion-collapse").toggleClass("show");
        $(".accordion-button").toggleClass("collapsed");

        if ($('.accordion-collapse').hasClass("show")) {
            $('.collapse-all-btn').text("Collapse All");
        }
        else {
            $('.collapse-all-btn').text("Expand All");
        }
    });



    //Back to Top
    $('.backToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500);
        return false;
    });


})(jQuery);

