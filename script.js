$(document).ready(function () {
    $(".container").on("mouseenter", function () {
        $(".card").stop().animate({ top: "-90px" }, "slow");
    });

    $(".container").on("mouseleave", function () {
        $(".card").stop().animate({ top: "0" }, "slow");
    });
});
