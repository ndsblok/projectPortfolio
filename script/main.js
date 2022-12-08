// arrow

$(".header-arrow").click(() => {
  $("html, body").animate(
    {
      scrollTop: $(".portfolio").offset().top,
    },
    1000
  );
});

// button

$(".btn").click(function () {
  $(".block_with_text").fadeToggle(100);
});

// header

$(window).on("load", function () {
  $("#header").vide("./video/cover"),
    {
      bgColor: "rgba(36, 36, 36, 0.822)",
    };
});

