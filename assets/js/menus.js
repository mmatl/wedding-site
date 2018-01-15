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

    $("#storybutton").click(function() {
        $("html, body").animate({
            scrollTop: $("#story").offset().top }, 2000);
    });
    $("#vtbutton").click(function() {
        $("html, body").animate({
            scrollTop: $("#details").offset().top }, 2000);
    });
    $("#todobutton").click(function() {
        $("html, body").animate({
            scrollTop: $("#thingstodo").offset().top }, 2000);
    });
    $("#teambutton").click(function() {
        $("html, body").animate({
            scrollTop: $("#bridalparty").offset().top }, 2000);
    });
    $("#qabutton").click(function() {
        $("html, body").animate({
            scrollTop: $("#qanda").offset().top }, 2000);
    });
    $("#thxbutton").click(function() {
        $("html, body").animate({
            scrollTop: $("#thanks").offset().top }, 2000);
    });
});
