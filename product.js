$(function () {
  $(".header").load("common.html .header>*", function () {
    // 在加载 header 完成後執行其他操作
    $(".nav_ul li:nth-child(3) a").addClass("active");
    $(".footer").load("common.html .footer>*");
  });
});
//產品輪播
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
