const nav_right = document.querySelector('.nav-right');
const menu = document.querySelector('#menu');


const Showdropdown = () =>{
   menu.classList.toggle('enable-nav-right');
}
nav_right.addEventListener('click', Showdropdown)



// for Animation 
function loadingAnimation() {
    gsap.from(".nav-bar", {
      y: -40,
      opacity: 0,
      delay: 0.4,
      duration: .9,
      stagger: 0.3
    })
    
    gsap.from(".div", {
      y: 50,
      opacity: 0,
      delay: 0.4,
      duration: .9,
      stagger: 0.3
    })
  
    gsap.from(".left-div", {
      // y : 50,
      scale: 0.9,
      opacity: 0,
      delay: 0.6,
      duration: .8,
    })
    gsap.from(".right-div", {
      // y : 40,
      scale: 0.9,
      opacity: 0,
      delay: 0.6,
      duration: .8,
  
    })
    gsap.from(".focus", {
        // y : 40,
        scale: 0.9,
        opacity: 0,
        delay: 0.6,
        duration: .8,
    
      })
      gsap.from(".icon-container", {
        // y : 40,
        scale: 0.9,
        opacity: 0,
        delay: 0.6,
        duration: .8,
    
      })
      gsap.from(".icon-container-content", {
        // y : 40,
        scale: 0.9,
        opacity: 0,
        delay: 0.6,
        duration: .8,
    
      })
  }
  loadingAnimation();
  
  
  // for smmoth scrolling 
  const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
  });




  const socket = io();

  socket.on('newRideRequest', (data) => {
      const { rideType, username, pickup } = data;
      document.getElementById('name').textContent = username;
      document.querySelector('.popup-div').style.transform = 'scale(1)';
      document.querySelector('.address').textContent = pickup;
  });