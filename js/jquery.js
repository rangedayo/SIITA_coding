$(document).ready(function () {
  $(window).scroll(function () {
    var pageY = $(window).scrollTop();

    if (pageY >= 700) {
      $("header").addClass("header_fix");
    } else {
      $("header").removeClass("header_fix");
    }
  });
});
