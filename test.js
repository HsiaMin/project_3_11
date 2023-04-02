$(function () {
  $(".header").load("common.html .header>*", function () {
    // 在加载 header 完成後執行其他操作
    $(".nav_ul li:nth-child(4) a").addClass("active");
    $(".footer").load("common.html .footer>*");
  });
});
