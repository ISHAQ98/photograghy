// animate Smooth Scroll
$("#view-work").on("click", function () {
  const images = $("#images").position().top;

  $("html, body").animation(
    {
      scrolltop: images,
    },
    900
  );
});
