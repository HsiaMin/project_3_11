$(function () {
  $(".header").load("common.html .header>*", function () {
    $(window).ready(function () {
      var width = $(window).width();
      if (width > 414) {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 0) {
            $(".menu_logo a").addClass("logo_on");
          } else {
            $(".menu_logo a").removeClass("logo_on");
          }
        });
      }
    });

    // Header_RWD
    $(".toggle").click(function () {
      // 導覽列出現
      $("nav").toggleClass("nav_on");
      $(this).toggleClass("open");
      $(".container").toggleClass("open");
    });
    // 頁尾
    $(".footer").load("common.html .footer>*");
  });
});
