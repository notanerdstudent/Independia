$(window).on("load", function () {
  $(".loader-wrapper").delay(2000).fadeOut("slow");
  setTimeout(() => {
    $(".slide").removeAttr("data-aos");
  }, 3000);
});
