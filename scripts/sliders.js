//================= SLIDER =================== //

var sliderId = 0

function slide(n, context = '') {
  var x = document.getElementsByClassName(context + "slide")
  if (x == undefined) return
  sliderId += n
  
  if (sliderId >= x.length) { sliderId = 0 }
  if (sliderId < 0) { sliderId = x.length - 1 }

  for (let i = 0; i < x.length; i++) {
    x[i].style.opacity = 0
  }
  
  x[sliderId].style.opacity = 1

}

// setInterval(() => {
//   slide(1)
// }, 5000)


//================= SMALL SLIDER =================== //
var smallSliderId = 0, length = 6, max = 3;

function smallSlide(n, id = '') {
  var x = document.getElementById(id)
  var width = x.offsetWidth, unityWidth = width / length
  smallSliderId += n
  
  if (smallSliderId > length - max) { smallSliderId = length - max }
  if (smallSliderId < 0) { smallSliderId = 0 }
  
  x.style.left = -smallSliderId * unityWidth + 'px'
}
