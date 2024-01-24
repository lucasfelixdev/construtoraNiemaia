
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    0: {
        slidesPerView: 1,
    },
    744: {
        slidesPerView: 2,
    },
    1144: {
        slidesPerView: 3,
    },
},
});

let show = true;
const menuSection = document.querySelector(".nav__Menu");
const menuToggle = document.querySelector(".menu-toggle");
const itens = document.querySelectorAll(".navUlDestk a");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menuSection.classList.toggle("on", show);
  show = !show;
});

itens.forEach(item => {
  item.addEventListener("click", () => {
    menuSection.classList.remove("on");
    document.body.style.overflow = "initial";
    show = true;
  });
});