
// socket event

// console.log(username, pickupLoc, nameIcon);


var socket = io('/homeDriver');
const rideDiv = document.getElementsByClassName('Recommended-share');

for (let i = 0; i < rideDiv.length; i++) {
  rideDiv[i].addEventListener('click', function () {

    const rideDetails = {
      nameIcon: nameIcon,
      name: username,
      pickupLoc: pickupLoc,
      vehicleId: rideDiv[i].getAttribute('data-id') //get vehicle id
    };
    socket.emit("RequestRidePopup", rideDetails);
    console.log('Ride request emitted:', rideDetails);
  });
}

console.log("name Icon " + nameIcon);
console.log("username: " + username);
console.log("pickup location: " + pickupLoc);

// socket event


// https://chatgpt.com/share/1130410d-745c-4ad3-a2dc-174d8e7d06d8
// const socket = io();

// document.querySelectorAll('.Recommended-share').forEach(item => {
//   item.addEventListener('click', function() {
//     socket.emit("RequestRidePopup", {
//       nameIcon :nameIcon ,
//       name: username,
//       pickupLoc: pickupLoc
//   })
//       const vehicleId = this.id;
//       const vehicleId2 = this.dataset.id;
//       console.log("Clicked on:", vehicleId); // id of div
//       console.log("Clicked on:", vehicleId2);//id from mongodb
//   });
// });


