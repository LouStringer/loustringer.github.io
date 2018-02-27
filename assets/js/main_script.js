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
      nav.classList.remove("nav-down")
    }
    // scroll up
    else if (lastScrollY > sy) {
      nav.classList.add("nav-down")
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

//////// Pop out details of work on click
var workExamples = document.querySelectorAll(".work-example");
var workDetail = document.querySelectorAll(".work-example > .work-detail")

// write function for workClicked/workTabbed

for (var i = 0; i < workExamples.length; i++) {
 workExamples[i].addEventListener("click", workClicked);
 workExamples[i].addEventListener("keypress", workTabbed);
 workExamples[i].setAttribute("tabindex", i+6);
}

function workClicked() {
 for (var i = 0; i < workExamples.length; i++) {
   // workExamples[i].classList.add("work-example");
   // workExamples[i].classList.remove("work-example-clicked");
   workDetail[i].classList.add("hide");
   if (workExamples[i] === this) {
     // this.classList.remove("work-example");
     // this.classList.add("work-example-clicked");
     workDetail[i].classList.remove("hide");
     window.scrollTo(0, this.offsetTop - 70);
   };
 };
};

// function workClicked() {
//  for (var i = 0; i < workExamples.length; i++) {
//    workExamples[i].classList.add("work-example");
//    workExamples[i].classList.remove("work-example-clicked");
//    workDetail[i].classList.add("hide");
//    if (workExamples[i] === this) {
//      this.classList.remove("work-example");
//      this.classList.add("work-example-clicked");
//      workDetail[i].classList.remove("hide");
//      window.scrollTo(0, this.offsetTop - 70);
//    };
//  };
// };

function workTabbed(event) {
  if (event.keyCode === 13) {
    workClicked();
  };
}
