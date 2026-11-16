$(function () {
    var MORPH_MS = 1350;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var leaving = false;

    function openPoint(link) {
        if (leaving) {
            return;
        }
        if (reduceMotion) {
            window.location.href = link.href;
            return;
        }
        leaving = true;
        $("body").addClass("is-leaving");
        window.setTimeout(function () {
            window.location.href = link.href;
        }, MORPH_MS);
    }

    $(".point").on("click", function (event) {
        event.preventDefault();
        openPoint(this);
    });

    // Space opens a focused point, the same as Enter
    $(".point").on("keydown", function (event) {
        if (event.key === " ") {
            event.preventDefault();
            openPoint(this);
        }
    });

    // Coming back with the browser Back button restores the page mid-morph
    $(window).on("pageshow", function (event) {
        if (event.originalEvent && event.originalEvent.persisted) {
            leaving = false;
            $("body").removeClass("is-leaving");
        }
    });
});
