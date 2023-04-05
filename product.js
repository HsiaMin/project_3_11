$(function () {
  $(".header").load("common.html .header>*", function () {
    // 在加载 header 完成後執行其他操作
    $(".nav_ul li:nth-child(3) a").addClass("active");

    // 螢幕寬度大於414才執行雪碧圖
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
    });
    // 頁尾
    $(".footer").load("common.html .footer>*");
  });
});

// 原生JS
//產品輪播1
let btn_left_el = document.getElementById("btn_left");
let btn_right_el = document.getElementById("btn_right");
let times = 0;

//往右滾事件
btn_right_el.addEventListener("click", function (e) {
  let product_el = document.getElementsByClassName("product")[0];
  let product = product_el.querySelectorAll("li");
  let btn_show = document.getElementById("btn_left");
  btn_show.classList.remove("btn_hidden");

  //   往右滾
  times -= 370;
  for (let i = 0; i < product.length; i++) {
    product[i].style.transform = `translate(${times}px)`;
  }

  //   對第一個沒有class的新增class
  let add_class = product_el.querySelector("ul li:not(.hidden)");
  add_class.classList.add("hidden");

  //   移除最後一個沒有class的下一個的class
  let delete_class = product_el.querySelectorAll("ul li:not(.hidden)");
  delete_class = delete_class[delete_class.length - 1];
  delete_class.nextElementSibling.classList.remove("hidden");

  // 當最後一個商品出現時，按鈕消失
  let right_prevent = product[product.length - 1].getAttribute("class");
  if (right_prevent != "hidden") {
    btn_right_el.classList.add("btn_hidden");
  }
});

// 往左滾事件
btn_left_el.addEventListener("click", function (e) {
  let product_el = document.getElementsByClassName("product")[0];
  let product = product_el.querySelectorAll("li");
  let btn_show = document.getElementById("btn_right");
  btn_show.classList.remove("btn_hidden");
  // 往左滾
  times += 370;
  for (let i = 0; i < product.length; i++) {
    product[i].style.transform = `translate(${times}px)`;
  }

  //對最後一個沒有class的新增class;
  let add_class = product_el.querySelectorAll("ul li:not(.hidden)");
  add_class = add_class[add_class.length - 1];
  add_class.classList.add("hidden");

  //   移除第一個沒有class的前一個的class
  let delete_class = product_el.querySelector("ul li:not(.hidden)");
  delete_class.previousElementSibling.classList.remove("hidden");

  // 當第一個商品出現時，按鈕消失
  let right_prevent = product[0].getAttribute("class");
  if (right_prevent != "hidden") {
    btn_left_el.classList.add("btn_hidden");
  }
});

// 產品輪播2
let btn_left_el1 = document.getElementById("btn_left1");
let btn_right_el1 = document.getElementById("btn_right1");
let times1 = 0;

//往右滾事件
btn_right_el1.addEventListener("click", function (e) {
  let product_el1 = document.getElementsByClassName("product")[1];
  let product1 = product_el1.querySelectorAll("li");
  let btn_show1 = document.getElementById("btn_left1");
  btn_show1.classList.remove("btn_hidden");

  //   往右滾
  times1 -= 370;
  for (let i = 0; i < product1.length; i++) {
    product1[i].style.transform = `translate(${times1}px)`;
  }

  //   對第一個沒有class的新增class
  let add_class1 = product_el1.querySelector("ul li:not(.hidden)");
  add_class1.classList.add("hidden");

  //   移除最後一個沒有class的下一個的class
  let delete_class1 = product_el1.querySelectorAll("ul li:not(.hidden)");
  delete_class1 = delete_class1[delete_class1.length - 1];
  delete_class1.nextElementSibling.classList.remove("hidden");

  // 當最後一個商品出現時，按鈕消失
  let right_prevent1 = product1[product1.length - 1].getAttribute("class");
  if (right_prevent1 != "hidden") {
    btn_right_el1.classList.add("btn_hidden");
  }
});

// 往左滾事件
btn_left_el1.addEventListener("click", function (e) {
  let product_el1 = document.getElementsByClassName("product")[1];
  let product1 = product_el1.querySelectorAll("li");
  let btn_show1 = document.getElementById("btn_right1");
  btn_show1.classList.remove("btn_hidden");
  // 往左滾
  times1 += 370;
  for (let i = 0; i < product1.length; i++) {
    product1[i].style.transform = `translate(${times1}px)`;
  }

  //對最後一個沒有class的新增class;
  let add_class1 = product_el1.querySelectorAll("ul li:not(.hidden)");
  add_class1 = add_class1[add_class1.length - 1];
  add_class1.classList.add("hidden");

  //   移除第一個沒有class的前一個的class
  let delete_class1 = product_el1.querySelector("ul li:not(.hidden)");
  delete_class1.previousElementSibling.classList.remove("hidden");

  // 當第一個商品出現時，按鈕消失
  let right_prevent1 = product1[0].getAttribute("class");
  if (right_prevent1 != "hidden") {
    btn_left_el1.classList.add("btn_hidden");
  }
});
