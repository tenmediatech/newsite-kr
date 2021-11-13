/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (screen.width > 699) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-56px";
    }
  }
  else {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar-mobile").style.top = "0";
    } else {
      document.getElementById("navbar-mobile").style.top = "-8vh";
    }
  }
  prevScrollpos = currentScrollPos;
}
