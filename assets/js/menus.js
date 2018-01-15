$(document).ready(function() {
    $("#traveldetailstext").hide();
    $("#lodgingdetailstext").hide();
    $("#venuebutton").css("text-shadow", "1px 1px 1px");

    $("#litodo").hide();
    $("#pjtodo").hide();
    $("#nybutton").css("text-shadow", "1px 1px 1px");

    $("#nybutton").click(function() {
        $("#nytodo").show();
        $("#litodo").hide();
        $("#pjtodo").hide();

        $("#nybutton").css("text-shadow", "1px 1px 1px");
        $("#libutton").css("text-shadow", "");
        $("#pjbutton").css("text-shadow", "");
    });

    $("#libutton").click(function() {
        $("#nytodo").hide();
        $("#litodo").show();
        $("#pjtodo").hide();

        $("#nybutton").css("text-shadow", "");
        $("#libutton").css("text-shadow", "1px 1px 1px");
        $("#pjbutton").css("text-shadow", "");
    });

    $("#pjbutton").click(function() {
        $("#nytodo").hide();
        $("#litodo").hide();
        $("#pjtodo").show();

        $("#nybutton").css("text-shadow", "");
        $("#libutton").css("text-shadow", "");
        $("#pjbutton").css("text-shadow", "1px 1px 1px");
    });

    $("#venuebutton").click(function() {
        $("#lodgingdetailstext").hide();
        $("#traveldetailstext").hide();
        $("#venuedetailstext").show();

        $("#venuebutton").css("text-shadow", "1px 1px 1px");
        $("#travelbutton").css("text-shadow", "");
        $("#lodgingbutton").css("text-shadow", "");
    });

    $("#travelbutton").click(function() {
        $("#lodgingdetailstext").hide();
        $("#venuedetailstext").hide();
        $("#traveldetailstext").show();

        $("#venuebutton").css("text-shadow", "");
        $("#travelbutton").css("text-shadow", "1px 1px 1px");
        $("#lodgingbutton").css("text-shadow", "");
    });

    $("#lodgingbutton").click(function() {
        $("#traveldetailstext").hide();
        $("#venuedetailstext").hide();
        $("#lodgingdetailstext").show();

        $("#travelbutton").css("text-shadow", "");
        $("#venuebutton").css("text-shadow", "");
        $("#lodgingbutton").css("text-shadow", "1px 1px 1px");
    });

    var scrollToCenter = function(elem) {
        return function() {
            var el = $(elem)
            var eloffset = el.offset().top;
            var height = el.height();
            var windowheight = $(window).height();
            var offset;

            if (height < $(window).height()) {
                offset = eloffset - ((windowheight / 2) - (height / 2));
            } else {
                offset = eloffset;
            }
            $("html, body").animate({
                scrollTop: offset
            }, 2500)
        };
    };

    var scrollToTop = function(elem) {
        return function() {
            $("html, body").animate({
                scrollTop: $(elem).offset().top }, 2500);
        };
    };


    $("#storybutton").click(scrollToTop("#story"));
    $("#vtbutton").click(scrollToTop("#details"));
    $("#todobutton").click(scrollToCenter("#horizpanel1"));
    $("#teambutton").click(scrollToCenter("#carolyn"));
    $("#qabutton").click(scrollToCenter("#handhug"));
    $("#thxbutton").click(scrollToCenter("#thanksbody"));
});
