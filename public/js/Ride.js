
// if (pickupInput.value == null && destInput.value == null) {
//     // disable search button 
//     const disableButton = true; //change this value to false and the button will be clickable
//     const button = document.querySelector('.btn-search');
//     if (disableButton) button.disabled = "disabled";
// }
// else{
//     // enable search button 
// const disableButton = false; //change this value to false and the button will be clickable
// const button = document.querySelector('.btn-search');
// if (disableButton) button.enabled = "enabled";
// }


// to enable search button
const btn_search = document.querySelector('.btn-search')
const textPickup = document.querySelector('#text-pickup')
const textDropoff = document.querySelector('#text-dropoff')

textDropoff.addEventListener('keyup', (e) => {
  const value = e.currentTarget.value;
  btn_search.disabled = false;
  if (value === '') {
    btn_search.disabled = true;
  }
})

//onkeyup event to show close buttn
const text_pickup = document.querySelector('#text-pickup')
const cross_icon_pickup = document.querySelector('.cross-icon-pickup')
var showClosebtn = () => {
  getlocationicon.classList.add('disablelocationarrow');
  cross_icon_pickup.classList.add('enable-cross-icon-pickup')

}
text_pickup.addEventListener('keyup', showClosebtn)


//onkeyup event to show close buttn
const text_dropoff = document.querySelector('#text-dropoff')
const cross_icon_drop = document.querySelector('.cross-icon-drop')
var showClosebtn = () => {
  cross_icon_drop.classList.add('enable-cross-icon-drop')
}
text_dropoff.addEventListener('keyup', showClosebtn)



// to clear input box of pickup location
var getlocationicon = document.querySelector('.getlocation');
const pickup_icon = document.querySelector('#pickup-icon')
const pickupInput = document.querySelector('.pickup-input')
const ClearPickupInput = () => {
  pickupInput.value = '';
  cross_icon_pickup.classList.remove('enable-cross-icon-pickup')
  getlocationicon.classList.add('getlocation')
  getlocationicon.classList.remove('disablelocationarrow')

}
pickup_icon.addEventListener('click', ClearPickupInput)




// to clear input box of pickup location
const dropoff_icon = document.querySelector('#dropoff-icon')
const destInput = document.querySelector('.dest-input');
const CleardropInput = () => {
  destInput.value = '';
  cross_icon_drop.classList.remove('enable-cross-icon-drop')
}
dropoff_icon.addEventListener('click', CleardropInput)


// }
// cross_icon_pick.addEventListener('click', clear);
var cross_icon_pick = document.querySelector('.cross-icon-pickup');
var inputs = document.querySelector('input');

// get user current loaction on click on icon and change icon 
var getLocation = () => {
  getlocationicon.classList.add('disablelocationarrow');
  cross_icon_pickup.classList.add('enable-cross-icon-pickup')
  // icon_circle.classList.add('fa-solid fa-circle')
  // icon_circle.classList.remove('fa-regular fa-circle')

  // get the location from user
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
      let { road, suburb, state_district, state, county, postcode, country } = allDetails;
      var finalResult = document.getElementById('text-pickup').value = ` ${road},${suburb}, ${county}, ${state_district}, ${state}, ${postcode}, ${country}`
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


