$(function () {
  $(".header").load("common.html .header>*", function () {
    // 在加载 header 完成後執行其他操作
    $(".nav_ul li:nth-child(4) a").addClass("active");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".menu_logo a").addClass("logo_on");
      } else {
        $(".menu_logo a").removeClass("logo_on");
      }
    });
    $(".footer").load("common.html .footer>*");
  });
});
