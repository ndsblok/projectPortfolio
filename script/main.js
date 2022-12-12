// arrow

$(".header-arrow").click(() => {
  $("html, body").animate(
    {
      scrollTop: $(".portfolio").offset().top,
    },
    10
  );
});

// button

$(".btn").click(function () {
  $(".block_with_text").fadeToggle(400);
});
