
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
const targetIMG = document.querySelectorAll('.abt-us');

function handleScroll() {

  target.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });

  targetIMG.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('ease');
    }
  });
}


handleScroll();
if(target.length && targetIMG.length){
  window.addEventListener('scroll', debounce(function() {
    handleScroll();
  },130))
}


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
    navbar.style.backgroundColor = `rgba(245, 245, 245, ${opacity})`;

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
  