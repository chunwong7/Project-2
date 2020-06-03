// logic.js - Project 2 - Test File

// Create the map with our layers - center on Columbus Ohio
var map = L.map("map-id", {
    center: [39.97, -82.91],
    zoom: 10
    //layers: [streetmap, ]
});

   //load csv data
d3.csv("static/data/OH_accident.csv", function(data) {
    data.forEach(function (landmark) {
        addMarker(landmark);
        });
});



function addMarker(landmark) {
    L.marker([landmark.Start_Lat, landmark.Start_Lng])
        .bindPopup(landmark.ID)
        //.fillColor(color) not a valid method for L.marker
        .addTo(map);
}


// Create the tile layer that will be the background of our map
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "streets-v11",
accessToken: API_KEY
}).addTo(map);



//end of file