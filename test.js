$(function () {
  $(".header").load("common.html .header>*", function () {
    // 在加载 header 完成後執行其他操作
    $(".nav_ul li:nth-child(4) a").addClass("active");

    $(window).ready(function () {
      if ($(window).width() > 414) {
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

    // 被選到的答案+Class
    function inputAddClass(groupName) {
      $('input[name="' + groupName + '"]').change(function () {
        $('label[for^="' + groupName + '"]').removeClass("answer_checked");
        let labelFor = $('input[name="' + groupName + '"]:checked').attr("id");
        console.log(labelFor);
        $('label[for="' + labelFor + '"]').addClass("answer_checked");
      });
    }

    inputAddClass("q1");
    inputAddClass("q2");
    inputAddClass("q3");
    inputAddClass("q4");
    inputAddClass("q5");
    inputAddClass("q6");

    // 頁尾
    $(".footer").load("common.html .footer>*");
  });
});
