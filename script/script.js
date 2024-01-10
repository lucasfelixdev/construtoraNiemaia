

// MENU BURGUER
let show = true;
const menuSection = document.querySelector(".nav__Menu")
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () =>{
  
  document.body.style.overflow = show ? "hidden" : "initial"
  
  menuSection.classList.toggle("on", show)
  show = !show;
})


// EVENTO NAV BAR 
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var burguernav = document.querySelectorAll(".one, .two, .three");
  var navlink = document.querySelectorAll(".nav__Menu a");
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;

    // Calcula a porcentagem de rolagem
    var scrollPercentage = (scrollTop / (bodyHeight - windowHeight)) * 100;
    // Ajusta a opacidade com base na porcentagem de rolagem
    var opacity = Math.min(1, scrollPercentage / 40); // Máximo de 1 de opacidade após 50% de rolagem
    navbar.style.backgroundColor = `rgba(255, 246, 246, ${opacity})`;

   // ALTERA COR DOS LINKS DE ACORDO COM A ROLAGEM


    var linkColor = `rgba(0, 0, 0, ${Math.min(1, scrollPercentage / 40)})`;
    navlink.forEach(function (link) {
      link.style.color = linkColor;
    });
    
    // COLOR DO MENU BURGUER
    burguernav.forEach(function(link){
      link.style.backgroundColor = linkColor;
    });
    
    
    // Reverte a cor do texto para branco se a porcentagem de rolagem for menor que 50%
    if (scrollPercentage <= 25) {

      burguernav.forEach(function (link) {
        link.style.backgroundColor = "#fff";
      });

      navlink.forEach(function (link) {
        link.style.color = "#fff";
      });
    }

    lastScrollTop = scrollTop;
  });
});
  