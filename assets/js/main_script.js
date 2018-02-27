// Lou Stringer portfolio: main JavaScript

////////// Nav bar: hide on scroll down, show on scroll up
var nav = document.querySelector("nav");
var lastScrollY = 0;
var delta = 10;
var navHeight = 50;
var didScroll = false;

function scrolled() {
  sy = window.scrollY;
  if (Math.abs(lastScrollY - sy) > delta) {
    // scroll down
    if (sy > lastScrollY && sy > navHeight) {
      nav.classList.add("nav-up");
    }
    // scroll up
    else if (lastScrollY > sy) {
      nav.classList.remove("nav-up");
    };
  };
  lastScrollY = sy;
}

// Make scroll execution managable
window.addEventListener("scroll", function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
  };
}, 250);

// //////// Add tab through functionality
// make array of all tabbable elements (in order they appear)
// add tab index in order (example -> buttons within there)
//
//////// Pop out details of work on click
var workExamples = document.querySelectorAll(".work-example");
var workDetail = document.querySelectorAll(".work-detail")

// write function for workClicked/workTabbed

for (var i = 0; i < workExamples.length; i++) {
 workExamples[i].addEventListener("click", workClicked);
 workExamples[i].addEventListener("keypress", workTabbed);
 workExamples[i].setAttribute("tabindex", i+6);
}

function workClicked() {
 for (var i = 0; i < workExamples.length; i++) {
   workDetail[i].classList.add("hide");
   if (workExamples[i] === this) {
     workDetail[i].classList.remove("hide");
     window.scrollTo(0, this.offsetTop - 70);
   };
 };
};

function workTabbed(event) {
  if (event.keyCode === 13) {
    for (var i = 0; i < workExamples.length; i++) {
      workDetail[i].classList.add("hide");
      if (workExamples[i] === this) {
        workDetail[i].classList.remove("hide");
        window.scrollTo(0, this.offsetTop - 70);
      };
    };
  };
}

// Not sure why this doesn't work, seeing as both of the above do?
// function workTabbed(event) {
//   if (event.keyCode === 13) {
//     workClicked();
//   };
// }
