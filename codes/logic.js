// logic.js - Project 2 - Test File

// Create the map with our layers - center on data
var map = L.map("map-id", {
    center: [39.9612, -82.9988],
    zoom: 11
    //layers: [streetmap, ]
});

// Create the tile layer that will be the background of our map
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "streets-v11",
accessToken: API_KEY
}).addTo(map);

// create icon class
var CarIcon = L.Icon.extend({  
    options: {
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }
});

// create all four icons from this class
var blackIcon = new CarIcon({iconUrl: "caraccident_black.png"}),
    redIcon = new CarIcon({iconUrl: "caraccident_red.png"}),
    orangeIcon = new CarIcon({iconUrl: "caraccident_orange.png"}),
    yellowIcon = new CarIcon({iconUrl: "caraccident_yellow.png"});

// push class options into icons
L.icon = function (options) {
    return new L.Icon(options);
};

/*
/// test icons
L.marker([39.75, -84.230507], {icon:blackIcon}).addTo(map);
L.marker([39.770382, -84.194901], {icon:orangeIcon}).addTo(map);
L.marker([39.778061, -84.172005], {icon:redIcon}).addTo(map);
L.marker([39.79076,	-84.241547], {icon:yellowIcon}).addTo(map);
*/

//load csv data
d3.csv("static/data/OH_accident.csv", function(data) {
    data.forEach(function (landmark) {
        addMarker(landmark);
        });
});

// plot accidents classifed by serverity 1 to 4 black, yellow, orange, red
function addMarker(landmark) {
        if (landmark.Severity === '1') {
            return L.marker([landmark.Start_Lat, landmark.Start_Lng], {
                icon: blackIcon}).bindPopup(landmark.ID).addTo(map);
        } else if (landmark.Severity === '2') {
            return L.marker([landmark.Start_Lat, landmark.Start_Lng], {
                icon: yellowIcon}).bindPopup(landmark.ID).addTo(map);
        } else if (landmark.Severity === '3') {
            return L.marker([landmark.Start_Lat, landmark.Start_Lng], {
                icon: orangeIcon}).bindPopup(landmark.ID).addTo(map);
        } else {
            return L.marker([landmark.Start_Lat, landmark.Start_Lng], {
                icon: redIcon}).bindPopup(landmark.ID).addTo(map);
        }
    };

//end of file