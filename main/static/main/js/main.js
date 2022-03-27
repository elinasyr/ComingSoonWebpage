const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navActive = document.querySelectorAll(".nav-menu.active"); 

/*Menu bar hamburger close on click */ 
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));



function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* Swiper */ 
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

let navOffsetY = 500

window.addEventListener('scroll', function() {
    socialContainer = document.querySelector("#social-container");
    footerOffsetY = document.querySelector('#footer').offsetTop;
    if (socialContainer != null) {
        if (window.pageYOffset > navOffsetY && window.pageYOffset < footerOffsetY-800) {
            socialContainer.classList.add('scrolled');
        }
        else {
            socialContainer.classList.remove('scrolled');
        }  
    }
});

/*Underscore */ 
consoleText(['Meet the 23 y.o editor in chief', 'Προσεγγίζοντας την βία'], 'text');

var js_list = "{{title}}";
function consoleText(words, id) {
  var colors = ['hsl(4, 80, 51)']
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
