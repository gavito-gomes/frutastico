// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

window.onscroll = function() {myFunction()};

function myFunction() {
  // console.log(window.scrollY)
  if (window.scrollY >= 120) {
    document.getElementById("nav-header").classList.add("sticky")
  } else {
    document.getElementById("nav-header").classList.remove("sticky");
  }
}