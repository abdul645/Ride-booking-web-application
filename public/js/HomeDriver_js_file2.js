

//map initialization
var map = L.map('map').setView([28.5693135, 77.2857563], 12);

// leaflet map with osm tilelayer 
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

osm.addTo(map);

// leaflet map with  Stadia_AlidadeSmooth tilelayer 
var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 13,
	// attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

Stadia_AlidadeSmooth.addTo(map);

// link for Geolocation
// https://github.com/domoritz/leaflet-locatecontrol
L.control.locate().addTo(map);  // it show the button that will take us to our location


if(!navigator.geolocation){
    console.log("your browser doesn't support geolocation feature");
}else{
    setInterval(()=>{
        navigator.geolocation.getCurrentPosition(getPosition)
    },9000);
}


var cm;

function getPosition(position){
    console.log(position);
    var lat = position.coords.latitude
    var lng = position.coords.longitude
    var accuracy = position.coords.accuracy

    // if(marker){
    //     map.removeLayer(marker);
    // }
    
    // if(circle){
    //     map.removeLayer(circle);
    // }


    // marker = L.marker([lat, lng])
    // circle = L.circle([lat, lng], {radius: 50, accuracy})
    // var featureGroup = L.featureGroup([circle]).addTo(map)
    // map.fitBounds(featureGroup.getBounds())
   
    console.log("Your coordinates is: Lat: " + lat +"  Long: "+ lng + "  Accuracy: "+  accuracy);
 
    if(cm){
        map.removeLayer(cm);
    }
    // var taxiIcon = L.icon({
    //     iconUrl: '/public/images/taxi.png',
    //     iconSize: [70,70]
    // })

    // custom circle  marker
     cm = new L.circleMarker([lat, lng],{
        // icon: taxiIcon,
        radius: 8,
        stroke: true,
        color: 'white',
        opacity: 6,
        weight: 3,
        fill: true,
        fillColor: 'blue',
        fillOpacity: 0.4
    })

    var featureGroup = L.featureGroup([cm]).addTo(map)

    map.fitBounds(featureGroup.getBounds())
    
    cm.addTo(map).bindPopup([lat, lng]);
      // Set the map view to the new position with a zoom level of 12
    //   map.setView([lat, lng], 15);

       // Log the current zoom level
    // console.log("Current Zoom Level: " + map.getZoom());
}



// // leaflet routing machine 
// L.Routing.control({
//     waypoints: [
//       L.latLng(28.5693135, 77.2857563),
//     //   L.latLng(35.5693135, 88.2857563)
//     ]
//   }).addTo(map);