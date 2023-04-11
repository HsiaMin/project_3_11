$(function () {
  $(".header").load("common.html .header>*", function () {
    // 在加载 header 完成後執行其他操作
    $(".nav_ul li:nth-child(2) a").addClass("active");
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
      } //RWD調整
      else {
        $(".brand_introduction_wrap h3")
          .html(`時光倒流至1920年，那是一個充滿懷舊風情的年代，一位名叫愛德華的巧克力愛好者，開始了他為巧克力著迷的人生。<br /><br />
        愛德華年輕時曾到過歐洲旅遊，深深被當地的巧克力文化所吸引，他的心中種下了創立一個巧克力品牌的夢想。<br /><br />
        回到家鄉後，他決定著手創建自己的品牌，傳遞他對於巧克力的熱愛，經過多年的精心打磨和不斷創新，愛德華的品牌成功登上了舞台。<br /><br />
        愛德華對於巧克力的追求和熱情，使他的品牌贏得了眾人的認可， EAC至此掀起了一股風潮。<br /><br />
        從那時起，愛德華的品牌就成為了人們心中最愛的巧克力品牌之一，即使經過了這麼多年，愛德華的品牌依然保留著他對於巧克力的熱情和堅持，成為了無數巧克力愛好者的最愛。<br /><br />
        現在，當你品嚐著愛德華的巧克力時，你可以想像著這位鍾愛巧克力的創辦人所追求的熱情，
        以及他為實現夢想所付出的努力。`);
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
