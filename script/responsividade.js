

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
