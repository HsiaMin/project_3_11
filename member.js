$(function () {
  $(".header").load("common.html .header>*", function () {
    // 在加载 header 完成後執行其他操作
    $(".nav_ul li:nth-child(5) a").addClass("active");
    $(window).ready(function () {
      var width = $(window).width();
      if (width > 414) {
        // 雪碧圖
        $(window).scroll(function () {
          if ($(this).scrollTop() > 0) {
            $(".menu_logo a").addClass("logo_on");
          } else {
            $(".menu_logo a").removeClass("logo_on");
          }
        });

        //腳印
        $(document).ready(function () {
          let i = 0;
          $(window).on("wheel", function (event) {
            let scrollTop = $(this).scrollTop();
            console.log(scrollTop);
            if (scrollTop < 1700) {
              if (event.originalEvent.deltaY > 0) {
                i++;
                $(`#foot_print${i}`).css("opacity", "1");
                // scrollCount++;
              } else {
                $(`#foot_print${i}`).css("opacity", "0");
                i--;
                // scrollCount--;
              }

              if (i < 0) {
                i = 0;
              } else if (i > 16) {
                i = 16;
              }
            }
          });
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
