const nav_right = document.querySelector('.nav-right');
const menu = document.querySelector('#menu');

  

//to show or hide profile dropdown 
const Showdropdown = () =>{
   menu.classList.toggle('enable-nav-right');
}
nav_right.addEventListener('click', Showdropdown)


// close popup onclick outsite popup anywhere
// window.onload = function () {
//   var hidediv = document.getElementById('menu')
//   document.onclick = function (div) {
//     if (div.target.id !== 'menu') {
//       hidediv.style.display = 'none';
//     }
//   }
// }


// for Animation 
function loadingAnimation() {
    gsap.from(".nav-bar", {
      y: -40,
      opacity: 0,
      delay: 0.4,
      duration: .9,
      stagger: 0.3
    })
    gsap.from(".nav-left", {
      x: -40,
      opacity: 0,
      delay: 0.4,
      duration: .9,
      stagger: 0.3
    })
    gsap.from(".nav-right", {
        x: 40,
        opacity: 0,
        delay: 0.4,
        duration: .9,
        stagger: 0.3
      })
    gsap.from(".maindiv", {
      y: 50,
      opacity: 0,
      delay: 0.4,
      duration: .9,
      stagger: 0.3
    })
  
    gsap.from(".focus", {
      // y : 50,
      scale: 0.9,
      opacity: 0,
      delay: 0.6,
      duration: .8,
    })
    gsap.from(".two-img", {
        // y : 50,
        scale: 0.9,
        opacity: 0,
        delay: 0.6,
        duration: .8,
      })
    gsap.from(".rideWithUber", {
      // y : 40,
      scale: 0.9,
      opacity: 0,
      delay: 0.6,
      duration: .8,
  
    })
    gsap.from(".autoBike", {
        // y : 40,
        scale: 0.9,
        opacity: 0,
        delay: 0.6,
        duration: .8,
    
      })
      gsap.from(".Rental-intercity", {
        // y : 40,
        scale: 0.9,
        opacity: 0,
        delay: 0.6,
        duration: .8,
    
      })
  }
  loadingAnimation()

  // close popup onclick outsite popup anywhere
  window.onload = function () {
    var hidediv = document.getElementById('company-popup')
    document.onclick = function (div) {
      if (div.target.id !== 'company-popup') {
        hidediv.style.display = 'none';
      }
    }
  }
  
  
  // for smmoth scrolling 
  const scroLL = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
  });
  

