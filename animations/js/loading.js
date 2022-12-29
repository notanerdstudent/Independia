$(window).on("load", function () {
  $(".loader-wrapper").delay(2500).fadeOut("slow");
  setTimeout(() => {
    $(".slide").removeAttr("data-aos");
  }, 2000);
});
