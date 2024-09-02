
// tabs 
const opentab = (evt, tabname) => {
  var i, tabcontent, commonclss;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";

  }
  commonclss = document.getElementsByClassName("commonclss");
  for (i = 0; i < commonclss.length; i++) {
    commonclss[i].className = commonclss[i].className.replace("active", "");

  }

  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}


document.getElementById("defaultopen").click();
// OpenDefault.addEventListener('click', opentab);

// for Animation 
function loadingAnimation() {
  gsap.from(".nav-bar", {
    y: -40,
    opacity: 0,
    delay: 0.4,
    duration: .9,
    stagger: 0.3
  })
  gsap.from(".main-div", {
    y: 50,
    opacity: 0,
    delay: 0.4,
    duration: .9,
    stagger: 0.3
  })

  gsap.from(".tabs", {
    // y : 50,
    scale: 0.9,
    opacity: 0,
    delay: 0.6,
    duration: .8,
  })
  gsap.from(".tabcontent", {
    // y : 40,
    scale: 0.9,
    opacity: 0,
    delay: 0.6,
    duration: .8,

  })
}
loadingAnimation()


// // close popup onclick outsite popup anywhere
// window.onload = function () {
//   var hidediv = document.getElementById('company-popup')
//   document.onclick = function (div) {
//     if (div.target.id !== 'company-popup') {
//       hidediv.style.display = 'none';
//     }
//   }
// }


// for smmoth scrolling 
let smoothScroll = new LocomotiveScroll({
  el: document.querySelector('body'),
  smooth: true
});



// change background image onclick tabs 
const activeclass = document.querySelector('.main-div')
const rideimg = document.querySelector('#defaultopen')
rideimg.addEventListener('click', () => {
  var img = document.getElementById('rideimg')
  img.src = '/images/rides.png'

})

const drivetab = document.querySelector('#drivetab');

drivetab.addEventListener('click', () => {
  var img = document.getElementById('rideimg');
  img.src = '/images/bgdeliver.jpg'
})

const renttab = document.querySelector('#renttab');
renttab.addEventListener('click', () => {
  var img = document.getElementById('rideimg');
  img.src = '/images/Car-Rentals-in-Paxos.jpg'
})




// get user current loaction on click on icon and change icon 

var getlocationicon = document.querySelector('.getlocation')
var cross_btn = document.querySelector('.cross-btn')
var inputs = document.querySelector('input')
// var icon_circle =document.querySelector('#regualr-circle')



// to clear textbox of user location  code start
var clear = () => {
  document.querySelector('input').value = '';
  getlocationicon.classList.add('getlocation')
  cross_btn.classList.remove('enable-cross-btn');
  getlocationicon.classList.remove('disablelocationarrow')
}
cross_btn.addEventListener('click', clear);

//to clear textbox user location code end




var getLocation = () => {
  getlocationicon.classList.add('disablelocationarrow');
  cross_btn.classList.add('enable-cross-btn');
  // icon_circle.classList.add('fa-solid fa-circle')
  // icon_circle.classList.remove('fa-regular fa-circle')

  //get the location from user
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError)
  }
  else {
    alert("geolocation is not supported by this browser")
  }
}

getlocationicon.addEventListener('click', getLocation)



var showPosition = (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  console.log(lat, long);

  let apikey = "a62d7e8222d542308a4f02e215953394";   // api link https://opencagedata.com/dashboard#geocoding
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apikey}`)
    .then(response => response.json()).then(result => {
      console.log(result);
      let allDetails = result.results[0].components;
      let { suburb, state_district, state, county, postcode, country } = allDetails;
      var finalResult = document.getElementById('text').value = ` ${suburb}, ${county}, ${state_district}, ${state}, ${postcode}, ${country}`
      console.table(allDetails)
      console.log(finalResult);
    })
}


var showError = (error) => {
  console.log(error);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for geolocation")
      break;

    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable")

    case error.TIMEOUT:
      alert("The request to get user location time out");
      break;

    case error.UNKNOWN_ERROR:
      alert("An unknown error occured");
      break;

    default:
      alert("An unknown error occurred")
  }
}


const cross_btn_dest = document.querySelector('.cross-btn-dest')
const showbtn = () => {
  cross_btn_dest.classList.add('enable-cross-btn-dest')
}

// to clear destination textbox  code 

var cleardest = () => {
  document.querySelector('.dest-input').value = '';
  cross_btn_dest.classList.add('cross-btn-dest')
  cross_btn_dest.classList.remove('enable-cross-btn-dest')

}
cross_btn_dest.addEventListener('click', cleardest);


