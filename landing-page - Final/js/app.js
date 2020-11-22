/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Sections global var
const sections = document.querySelectorAll('section');
// navigation global var
const navBar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "border: 2px solid #eee;";
    };
};

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "border: none;";
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuilder = () => {
    let Links_list = '';

    // looping over all sections
    sections.forEach(section => {
        Links_list += `<li><a class="menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`;
    });
    // append all elements to the navigation
    navBar.innerHTML = Links_list;
};
navBuilder();

// Add class 'active' to section when near top of viewport
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);
        inviewport = () => elementOffset < 100 && elementOffset >= -100;
        removeActive(section);
        addActive(inviewport(),section);
    });
};
window.addEventListener('scroll' ,sectionActivation);

// Scroll to anchor ID using scrollTO event

var navLinks = document.querySelectorAll(".menu__link");
  
navLinks.forEach((link) => {
  link.addEventListener("click", (element) => {
    element.preventDefault();
    var currentId = element.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    
    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});

// set-Up buttom setting
var UpButtom = document.getElementById('GoUp') 

window.onscroll = function () {
    if (window.pageYOffset >=250) {
        UpButtom.style.display = 'block';
    }
    else {
        UpButtom.style.display = 'none';}
};
UpButtom.onclick = function() {
    window.scroll({
        top: 0,
        behavior: "smooth",
      });
   /* window.scrollTo(0, 0);
    removeAllActiveClasses();*/
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


