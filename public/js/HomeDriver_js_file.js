


// chatgpt - https://chatgpt.com/share/91c1a3d6-d294-446a-b346-bfe47365e263

const socket = io('/homeDriver');

socket.on('RequestRidePopup', (data) => {
  console.log("Received data: ", data);

  //Destructuring the Data Object 
  const { nameIcon, username, pickupLoc } = data;

  // Display the popup
  document.querySelector('.popup-div').classList.add('popup-div-enable');
  console.log("name Icon " + nameIcon);
  console.log("username: " + username);
  console.log("pickup location: " + pickupLoc);

  // Update the content
  document.getElementById('nameIcon').innerHTML = nameIcon;
  document.getElementById('name').innerHTML = username;
  document.querySelector('.address').innerHTML = pickupLoc;
});

// open and close profile popup

const nav_right = document.querySelector('.nav-right');
const menu = document.querySelector('#menu');

const Showdropdown = () => {
  menu.classList.toggle('enable-nav-right');
}
nav_right.addEventListener('click', Showdropdown)

// open and close profile popup


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




