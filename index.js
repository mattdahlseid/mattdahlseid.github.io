// for smooth scrolling on link click (from w3schools.com)
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
});

function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const responsiveNav = document.querySelector('.responsive-nav');
const navButton = document.querySelector('.nav__button');
const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav__link a');
const shape = document.querySelector('.shape');
const date = document.querySelector('.year');

// makes responsive nav visible and changes orientation of nav button 
function visibility() {
    if (responsiveNav.classList.contains('visible')) {
        responsiveNav.classList.remove('visible');
        navButton.classList.remove('open')
    } else {
        responsiveNav.classList.add('visible');
        navButton.classList.add('open')
    }
}

// checks if past header to determine whether to show navButton
function checkScroll() {
    if (!responsiveNav.classList.contains('visible')) {
        if (window.scrollY > header.offsetHeight - 10) {
            navButton.classList.add('showBtn');
        } else {
            navButton.classList.remove('showBtn');
        }
    }
}

// rotates shape on scroll
function rotateShape() {
    const rotateAt = (shape.offsetTop + shape.offsetHeight) * 2.5;
    if (window.scrollY > rotateAt) {
        shape.classList.add('rotate');
    }
}

navButton.addEventListener('click', visibility);
window.addEventListener('scroll', debounce(checkScroll));
navLink.forEach(link => {
    link.addEventListener('click', () => {
    responsiveNav.classList.remove('visible');
    navButton.classList.remove('open')
    })
});

window.addEventListener('scroll', debounce(rotateShape));

// set correct year for copyright
window.addEventListener('load', () => {
    date.innerText = (new Date().getFullYear());
});



 //CHANGES COLOR OF HEADER BASED ON MOUSEMOVE

// const heroTitleOne = document.querySelector('.hero-title-1');
// const heroTitleTwo = document.querySelector('.hero-title-2');

// function colorSlide(e) {
//   let { offsetX: x, offsetY: y } = e;

//   if (this == e.target && this == heroTitleOne) {
//     this.style.color = `rgb(${y * 4}, ${x}, ${x / 2})`;
//     this.style.webkitTextStroke = `3px rgb(${x/2}, ${y}, ${x/4})`
//   } else if (this == e.target && this == heroTitleTwo) {
//     this.style.color = `rgb(${y * 2}, ${x}, ${x / 2})`;
//     this.style.webkitTextStroke = `3px rgb(${x}, ${y * 3}, ${x})`
//   }

// }

// function blackOut(e) {
//     this.style.color = 'rgba(0,0,0,.6)';
//     this.style.webkitTextStroke = `3px rgb(238, 255, 0)`;
// }

// heroTitleOne.addEventListener('mousemove', colorSlide);
// heroTitleOne.addEventListener('mouseleave', blackOut);
// heroTitleTwo.addEventListener('mousemove', colorSlide);
// heroTitleTwo.addEventListener('mouseleave', blackOut);