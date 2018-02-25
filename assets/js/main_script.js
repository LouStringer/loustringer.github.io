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

// To prevent very high number of executions
// on scroll, change state variable didScroll to true.
// Check every 250ms if scroll has occured
window.addEventListener("scroll", function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
  }
}, 250);
