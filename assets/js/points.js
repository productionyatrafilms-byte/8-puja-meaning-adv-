$(function () {
    var $names = $(".puja-name-item");
    var $meanings = $(".meaning-item");
    var total = $names.length;

    // points.html#3 opens on the third puja
    var requested = parseInt(window.location.hash.replace("#", ""), 10);
    var startIndex = requested >= 1 && requested <= total ? requested - 1 : 0;

    // a long puja name gets a smaller size so it stays inside the arch
    var LONG_NAME_CHARS = 30;
    $names.each(function () {
        var $name = $(this);
        $name.find(".english, .hindi, .gujrati").each(function () {
            if ($(this).text().length > LONG_NAME_CHARS) {
                $(this).addClass("is-long");
            }
        });
    });

    var MEANING_MOTION = "is-in-up is-in-down is-out-up is-out-down";
    var currentIndex = -1;

    // The meaning text slides up when moving forward and down when going back
    function showText(index) {
        if (index === currentIndex) {
            return;
        }
        var dir = index > currentIndex ? "up" : "down";

        $names.removeClass("is-active").eq(index).addClass("is-active");

        $meanings.removeClass("is-active " + MEANING_MOTION);
        if (currentIndex >= 0) {
            $meanings.eq(currentIndex).addClass("is-out-" + dir);
            $meanings.eq(index).addClass("is-in-" + dir);
        }
        $meanings.eq(index).addClass("is-active");

        currentIndex = index;
    }

    // the Pranam arrow only shows on the last slide
    var $arrow = $(".pranam-end-link");

    function showArrow(index) {
        var isLast = index === total - 1;
        $arrow.toggleClass("is-visible", isLast).attr("tabindex", isLast ? 0 : -1);
    }

    showText(startIndex);
    showArrow(startIndex);

    new Swiper(".puja-swiper", {
        direction: "horizontal",
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: startIndex,

        speed: 600,
        effect: "slide",

        loop: false,

        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        touchRatio: 1,
        grabCursor: true,

        resistance: true,
        resistanceRatio: 0.85,

        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },

        on: {
            slideChange: function (swiper) {
                showText(swiper.activeIndex);
                showArrow(swiper.activeIndex);
                history.replaceState(null, "", "#" + (swiper.activeIndex + 1));
            },
        },
    });
});
