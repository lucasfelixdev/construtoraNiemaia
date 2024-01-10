
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
      const context = this;
      const later = function() {
          timeout = null;
          if(!immediate) func.apply(context, args)
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if(callNow) func.apply(context, args);
  };
};


// const target = document.querySelectorAll('[data-anime]');
// const animationClass = 'animate';

// function animeScroll() {
//   const windowTop = window.scrollY + ((window.innerHeight * 3) /4);

//   target.forEach(function(element){
//     const elementTop = element.getBoundingClientRect().top + window.scrollY;
    
//     if((windowTop) > elementTop){
//       element.classList.add(animationClass);
//     } else{
//       element.classList.remove(animationClass);
//     }
//   })
// }

// animeScroll()

// if(target.length){
//   window.addEventListener('scroll', debounce(function() {
//     animeScroll();
//   },150))
// }

// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}

// Função para adicionar a classe "visible" aos elementos quando estiverem visíveis
const target = document.querySelectorAll('.s-about__list');

function handleScroll() {
  target.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
    else{
      element.classList.remove('visible');
    }
  });
}


// window.addEventListener('scroll', handleScroll);

handleScroll();
if(target.length){
  window.addEventListener('scroll', debounce(function() {
    handleScroll();
  },150))
}




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
  