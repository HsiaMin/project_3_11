$(function () {
  $(".header").load("common.html .header>*", function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".menu_logo a").addClass("logo_on");
      } else {
        $(".menu_logo a").removeClass("logo_on");
      }
    });
  });
  $(".footer").load("common.html .footer>*");
});
