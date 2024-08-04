
// cross btn 
const iconclosedriversignin = document.querySelector('#icon-close')
iconclosedriversignin.addEventListener('click', ()=>{
    location.replace("/signin-signup-ride")
})


// eye icon coding show password 

const eyeicon = document.getElementById('eyeicon')
const password = document.getElementById('password')

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        eyeicon.classList= "fa-solid fa-eye"
        // <i class="fa-solid fa-eye"></i>
    }
    else if(password.type == "text"){
        password.type = "password";
        eyeicon.classList= "fa-solid fa-eye-slash";
    }
}
// console.log("hello");

//animation
// function loadingAnimation() {
//     gsap.from(".overlay", {
//         y: -40,
//         opacity: 0,
//         delay: 0.4,
//         duration: .9,
//         stagger: 0.3
//       })

//     gsap.from(".wrapper", {
//       y: -40,
//       opacity: 0,
//       delay: 0.9,
//       duration: 2,
//       stagger: 0.3
//     })
    
//     gsap.from(".form-box", {
//       y: 50,
//       opacity: 0,
//       delay: 0.9,
//       duration: 2,
//       stagger: 0.3
//     })
  
//     gsap.from(".left-div", {
//       // y : 50,
//       scale: 0.9,
//       opacity: 0,
//       delay: 0.6,
//       duration: .8,
//     })
//     gsap.from(".right-div", {
//       // y : 40,
//       scale: 0.9,
//       opacity: 0,
//       delay: 0.6,
//       duration: .8,
  
//     })
//     gsap.from(".focus", {
//         // y : 40,
//         scale: 0.9,
//         opacity: 0,
//         delay: 0.6,
//         duration: .8,
    
//       })
//       gsap.from(".icon-container", {
//         // y : 40,
//         scale: 0.9,
//         opacity: 0,
//         delay: 0.6,
//         duration: .8,
    
//       })
//       gsap.from(".icon-container-content", {
//         // y : 40,
//         scale: 0.9,
//         opacity: 0,
//         delay: 0.6,
//         duration: .8,
    
//       })
//   }
//   loadingAnimation();
  

  