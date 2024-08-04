
// DOMContentLoaded Event: Ensure that your entire initialization script (initMap) is wrapped inside a
//  DOMContentLoaded event listener to ensure it runs only after the DOM is fully loaded.

// console.log("hii");
// Initialize and add the map
document.addEventListener('DOMContentLoaded', () => {
    async function initMap() {
        // console.log("hello");
        //javascript.js
        //set map options
        var myLatLng = { lat: 28.5667093, lng: 77.2824207 };
        var mapOptions = {
            center: myLatLng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        };
        //create map
        var map = new google.maps.Map(document.getElementById('mappp'), mapOptions);

        const { Marker } = await google.maps.importLibrary("marker");

        // The marker, positioned at Uluru
        const marker = new Marker({
            map: map,
            position: myLatLng,
            title: `My location`,
        });

        //create a DirectionsService object to use the route method and get a result for our request
        var directionsService = new google.maps.DirectionsService();

        //create a DirectionsRenderer object which we will use to display the route
        var directionsDisplay = new google.maps.DirectionsRenderer();

        //bind the DirectionsRenderer to the map
        directionsDisplay.setMap(map);


        //define calcRoute function
        function calcRoute(pickupInput, dropoffInput) {
            // var pickupInput = document.getElementById("text-pickup").value;
            // var dropoffInput = document.getElementById("text-dropoff").value;

            // console.log('Pickup:', pickupInput);
            // console.log('Dropoff:', dropoffInput);

            if (pickupInput && dropoffInput) {
                //create request
                var request = {
                    origin: pickupInput,
                    destination: dropoffInput,
                    travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
                    unitSystem: google.maps.UnitSystem.IMPERIAL
                }

                //pass the request to the route method
                directionsService.route(request, function (result, status) {
                    if (status == google.maps.DirectionsStatus.OK) {

                        //Get distance and time
                        const output = document.querySelector('#output');
                        // output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("text-pickup").value + ".<br />To: " + document.getElementById("text-dropoff").value + ".<br /> Driving distance : " + result.routes[0].legs[0].distance.text + ".<br />Duration : " + result.routes[0].legs[0].duration.text + ".</div>";


                        // Convert distance to kilometers
                        const distanceInKm = result.routes[0].legs[0].distance.value / 1000;
                        // result.routes[0].legs[0].distance.value provides the distance in meters.
                        // Divide the distance value by 1000 to convert it to kilometers.


                        // Display distance in kilometers
                        output.innerHTML = `<div class='alert-info'> Driving distance : ${distanceInKm.toFixed(2)} km.<br />Duration : ${result.routes[0].legs[0].duration.text}.</div>`;
                        // Use toFixed(2) to limit the distance to 2 decimal places for better readability.

                        //display route
                        directionsDisplay.setDirections(result);

                        const bikePrice = distanceInKm * 10;
                        const miniPrice = distanceInKm * 14;
                        const sedanPrice = distanceInKm * 18;
                        const topSedanPrice = distanceInKm * 22;
                        const xlPrice = distanceInKm * 25;
                        //  if(distanceInKm <= 5){
                        //     const bikePrice = distanceInKm * 10;
                        //     const miniPrice = distanceInKm * 16;
                        //     const sedanPrice = distanceInKm * 20;
                        //     const topSedanPrice = distanceInKm * 24;
                        //     const xlPrice = distanceInKm * 28;
                        // }else{
                        //     const bikePrice = distanceInKm * 10;
                        //     const miniPrice = distanceInKm * 12;
                        //     const sedanPrice = distanceInKm * 14;
                        //     const topSedanPrice = distanceInKm * 16;
                        //     const xlPrice = distanceInKm * 20;
                        // }

                        // console.log(bikePrice);


                        // Send the data to the server
                        const response = fetch('/go', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                pickup: pickupInput,
                                dropoff: dropoffInput,
                                bikePrice: bikePrice.toFixed(2),
                                miniPrice: miniPrice.toFixed(2),
                                sedanPrice: sedanPrice.toFixed(2),
                                topSedanPrice: topSedanPrice.toFixed(2),
                                xlPrice: xlPrice.toFixed(2),
                                route: result.routes[0] // Send the entire route object
                            }),
                        })
                            .then(response => {
                                if (response.redirected) {
                                    window.location.href = response.url;
                                }
                            })
                            .catch(error => console.error('Failed to fetch route data:', error));


                    } else {
                        //delete route from map
                        directionsDisplay.setDirections({ routes: [] });

                        //center map in my location
                        map.setCenter(myLatLng);

                        const output = document.querySelector('#output');
                        //show error message
                        output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
                    }
                });
            } else {
                console.error("Pickup and dropoff input elements not found.");
            }
        }


        //create autocomplete objects for all inputs
        var options = {
            // If you want to make the search even more general and inclusive of all types of places, you can simply omit the types option:
            // type : ['(cities)'], // it will search by city name 
            radius: 1000 // radius in meters
        }

        var input1 = document.getElementById("text-pickup");
        var input2 = document.getElementById("text-dropoff");

        if (input1 && input2) {
            var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
            var autocomplete2 = new google.maps.places.Autocomplete(input2, options);


            //  // Trigger route calculation on input change
            //  input1.addEventListener('input', calcRoute);
            //  input2.addEventListener('input', calcRoute);
        } else {
            // console.error("Input elements for autocomplete not found.");
        }


        const search_btn = document.querySelector('.btn-search');
        if (search_btn) {
            search_btn.addEventListener('click', async (event) => {
                event.preventDefault();
                const pickupInput = document.getElementById("text-pickup").value;
                const dropoffInput = document.getElementById("text-dropoff").value;
                const loadingBar = document.querySelector(".loader-container");

                calcRoute(pickupInput, dropoffInput);
                loadingBar.classList.add('enable-loader-container');

                setTimeout(() => {
                    loadingBar.classList.remove('enable-loader-container');
                    window.location.href = '/go'; // Redirect to /go after 5 seconds

                }, 3000); // 5000 milliseconds = 5 seconds


                // Reload the page after a delay (e.g., 5 seconds)
                setTimeout(() => {
                    window.location.reload(true); // true to force reload from the server
                }, 6000); // Adjust the delay as per your requirement


            });
        } else {
            // console.error("Search button not found.");
        }
    }

    if (typeof google !== 'undefined') {
        initMap();
    } else {
        console.error("Google Maps API not loaded.");
    }
});





// ***************************************************************************************
// leaflet map
// // Check if the map is already initialized
// if (typeof map === 'undefined') {
//     var map = L.map('mappp').setView([28.5693135, 77.2857563], 12);

//     var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     });

//     osm.addTo(map);

//     // Leaflet map with Stadia_AlidadeSmooth tile layer
//     var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
//         minZoom: 0,
//         maxZoom: 13,
//         ext: 'png'
//     });

//     Stadia_AlidadeSmooth.addTo(map);

//     // Link for Geolocation
//     // https://github.com/domoritz/leaflet-locatecontrol
//     L.control.locate().addTo(map);  // Show the button that will take us to our location
//     // L.control.locate({
//     //     locateOptions: {
//     //         maxZoom: 12,  // Adjust the maximum zoom level if needed
//     //         watch: true,  // Enable continuous watching of location
//     //         enableHighAccuracy: true,  // Use high accuracy for location
//     //         timeout: 5000,  // Timeout for geolocation request
//     //         setView: 'always',  // Always set the map view to the current location
//     //         radius: 100  // Radius of the circle representing the accuracy of location in meters
//     //     },
//     //     icon: 'fa fa-location-arrow',  // Customize the locate icon
//     //     iconLoading: 'fa fa-spinner fa-spin',  // Customize the loading icon
//     //     drawCircle: true,  // Draw a circle that shows the location accuracy
//     //     circleStyle: {
//     //         fillColor: '#3388ff',  // Fill color of the circle
//     //         color: '#3388ff',  // Border color of the circle
//     //         weight: 1,  // Border weight of the circle
//     //         opacity: 0.5  // Opacity of the circle
//     //     },
//     //     keepCurrentZoomLevel: false,  // Maintain the current zoom level when locating
//     //     showPopup: true,  // Show a popup when the user's location is found
//     //     metric: true,  // Use metric units for distances and radius
//     //     strings: {
//     //         title: "Show me where I am",  // Title for the locate control button
//     //         popup: "You are within {distance} {unit} from this point",  // Popup message showing the user's location accuracy
//     //         outsideMapBoundsMsg: "You seem located outside the boundaries of the map"  // Message when user is outside map bounds
//     //     }
//     // }).addTo(map);

// }


// if(!navigator.geolocation){
//     console.log("your browser doesn't support geolocation feature");
// }else{
//     setInterval(()=>{
//         navigator.geolocation.getCurrentPosition(getPosition)
//     },5000);
// }


// var cm;

// function getPosition(position){
//     console.log(position);
//     var lat = position.coords.latitude
//     var lng = position.coords.longitude
//     var accuracy = position.coords.accuracy

//     console.log("Your coordinates is: Lat: " + lat +"  Long: "+ lng + "  Accuracy: "+  accuracy);

//     if(cm){
//         map.removeLayer(cm);
//     }

//     // custom circle  marker
//      cm = new L.circleMarker([lat, lng],{
//         radius: 8,
//         stroke: true,
//         color: 'white',
//         opacity: 6,
//         weight: 3,
//         fill: true,
//         fillColor: 'blue',
//         fillOpacity: 0.4
//     })

// //     var featureGroup = L.featureGroup([cm]).addTo(map)
// //     map.fitBounds(featureGroup.getBounds())
// //     cm.addTo(map).bindPopup([lat, lng]);

// // Add the marker to the map
// // Added bindPopup to display the latitude and longitude in a popup on the marker.
// cm.addTo(map).bindPopup([lat, lng]);

// // Set the map view to the new position with a zoom level of 12
// map.setView([lat, lng], 12);

// }


// ******************************************************************************************

