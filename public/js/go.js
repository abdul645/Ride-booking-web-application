


const socket = io();

function requestRide(rideType) {
    const username = "<%= username %>"; // Replace with the actual username if needed
    const pickup = "<%= pickup %>";
    const data = { rideType, username, pickup };
    
    socket.emit('rideRequest', data);

}


document.getElementById("Bike").addEventListener("click", function() {
    fetch('/HomeDriver', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pickup: document.getElementById('source').innerText,
            username: '<%= username %>'
        })
    }).then(response => {
        if (response.redirected) {
            window.location.href = response.url;
        }
    }).catch(error => console.error('Failed to fetch route data:', error));
});

// // const recommendedshare = document.querySelector('.Recommended-share')
// // recommendedshare.addEventListener('click', () => {
// //     recommendedshare.classList.add('rc')
// // })

// document.addEventListener('DOMContentLoaded', () => {
//     const routeDataElement = document.getElementById('route-data');
//     let routeData;

//     try {
//         routeData = JSON.parse(routeDataElement.textContent);
//     } catch (error) {
//         console.error('Error parsing route data:', error);
//         return;
//     }

//     if (!routeData) {
//         console.error('No route data available');
//         return;
//     }

//     function initMap() {
//         const mapOptions = {
//             center: routeData.origin,
//             zoom: 14,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };

//         const map = new google.maps.Map(document.getElementById('mappp'), mapOptions);

//         const directionsService = new google.maps.DirectionsService();
//         const directionsRenderer = new google.maps.DirectionsRenderer();
//         directionsRenderer.setMap(map);

//         const request = {
//             origin: routeData.origin,
//             destination: routeData.destination,
//             travelMode: google.maps.TravelMode.DRIVING
//         };

//         directionsService.route(request, (result, status) => {
//             if (status == google.maps.DirectionsStatus.OK) {
//                 directionsRenderer.setDirections(result);
//             } else {
//                 console.error('Directions request failed due to ' + status);
//             }
//         });
//     }

//     if (typeof google !== 'undefined') {
//         initMap();
//     } else {
//         console.error('Google Maps API not loaded.');
//     }
// });




