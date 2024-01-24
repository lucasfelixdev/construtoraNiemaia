


window.revelar = ScrollReveal({
  // Reset true para animação repetir
  reset:false
})

const duracao = 500;

revelar.reveal('.spotlight',
{
  duration: 500,
  distance: '0px',
  opacity: 0,
  delay: 550
})

revelar.reveal('.topFader', 
{
    duration: 800,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease',
    
})

revelar.reveal('.rigt-car', 
{
    duration: 1800,
    distance: '1000px',
    origin: 'right',
    easing: 'ease',
    
})

revelar.reveal('.left-concept', 
{
    duration: 600,
    distance: '100px',
    origin: 'left',
    easing: 'ease-out',
    
})

revelar.reveal('.right-concept', 
{
    duration: 600,
    distance: '150px',
    origin: 'right',
    easing: 'ease-out',
    
})

revelar.reveal('.leftIMG', 
{
    duration: 800,
    distance: '100px',
    origin: 'left',
    delay: 1000,
    easing: 'ease-out',
    
})

revelar.reveal('.left0', 
{
    duration: duracao,
    distance: '80px',
    origin: 'left',
    delay: 1500,
    easing: 'ease-out',
    
})

revelar.reveal('.left1', 
{
    duration: duracao,
    distance: '100px',
    origin: 'left',
    delay: 1300,
    easing: 'ease-out'
    
})

revelar.reveal('.left2', 
{
    duration: duracao,
    distance: '100px',
    origin: 'left',
    delay: 1100,
    easing: 'ease-out'
    
})

revelar.reveal('.left3', 
{
    duration: duracao,
    distance: '100px',
    origin: 'left',
    delay: 900,
    easing: 'ease-out'
    
})

revelar.reveal('.left4', 
{
    duration: duracao,
    distance: '100px',
    origin: 'left',
    delay: 700,
    easing: 'ease-out'
    
})

revelar.reveal('.left5', 
{
    duration: duracao,
    distance: '100px',
    origin: 'left',
    delay: 500,
    easing: 'ease-out'
    
})

revelar.reveal('.left6', 
{
    duration: duracao,
    distance: '100px',
    origin: 'left',
    delay: 300,
    easing: 'ease-out'
    
})

revelar.reveal('.left7', 
{
    duration: duracao,
    distance: '100px',
    origin: 'left',
    delay: 100,
    easing: 'ease-out'
    
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
  




tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12","950":"#431407"}
      }
    },
    fontFamily: {
      'body': [
    'Montserrat Alternates', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  }
}

