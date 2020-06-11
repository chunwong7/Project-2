// wlogic.js - Project 2 - logic - weather conditions

// Create the tile layer that will be the background of our map
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "streets-v11",
accessToken: API_KEY
});

// Initialize all of the Layer Groups as an object
var layers = {
	CLEAR: new L.LayerGroup(),
    FOG: new L.LayerGroup(),
    FREEZING_RAIN: new L.LayerGroup(),
    HAIL: new L.LayerGroup(),
    HAZE: new L.LayerGroup(),
    OVERCAST: new L.LayerGroup(),
    RAIN: new L.LayerGroup(),
    SNOW: new L.LayerGroup(),
    THUNDERSTORM: new L.LayerGroup(),
    TORNADO: new L.LayerGroup()
	};

// Create the map with our layers
// Create the map with our layers - center on Columbus Ohio
var map = L.map("map", {
    center: [39.9612, -82.9988],
    zoom: 11,
    layers: [
		layers.CLEAR,
        layers.FOG,
        layers.FREEZING_RAIN,
        layers.HAIL,
        layers.HAZE,
        layers.OVERCAST,
        layers.RAIN,
        layers.SNOW,
        layers.THUNDERSTORM,
        layers.TORNADO
		]
});

// add streets map to tile layer
streetmap.addTo(map);

// Create an overlays
var overlays = {
	"CLEAR": layers.CLEAR,
    "FOG": layers.FOG,
    "FREEZING_RAIN": layers.FREEZING_RAIN,
    "HAIL": layers.HAIL,
    "HAZE": layers.HAZE,
    "OVERCAST": layers.OVERCAST,
    "RAIN": layers.RAIN,
    "SNOW": layers.SNOW,
    "THUNDERSTORM": layers.THUNDERSTORM,
    "TORNADO": layers.TORNADO
	};

// create control layer
L.control.layers(null, overlays).addTo(map);

// create a legend
var info = L.control({
	position: "bottomright"
	});

// when the layer control is added insert a div with a class of "legend"
info.onAdd = function() {
	var div = L.DomUtil.create("div", "legend");
	return div;
};
    
// add the info legend to the map
info.addTo(map);


// initialze object containing icons
var icons = {
    CLEAR: new L.Icon({
        iconUrl: "assets/img/sunny.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    FOG: new L.Icon({
        iconUrl: "assets/img/fog.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    FREEZING_RAIN: new L.Icon({
        iconUrl: "assets/img/icy_road.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    HAIL: new L.Icon({
        iconUrl: "assets/img/hail.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    HAZE: new L.Icon({
        iconUrl: "assets/img/haze.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    OVERCAST: new L.Icon({
        iconUrl: "assets/img/cloudy.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    RAIN: new L.Icon({
        iconUrl: "assets/img/rainy.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    SNOW: new L.Icon({
        iconUrl: "assets/img/snowy-2.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    THUNDERSTORM: new L.Icon({
        iconUrl: "assets/img/thunderstorm.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    TORNADO: new L.Icon({
        iconUrl: "assets/img/tornado-2.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    })
};


var accidentStatusCode = [];
var accidentCount = {
    CLEAR: 0,
    FOG: 0,
    FREEZING_RAIN: 0,
    HAIL: 0,
    HAZE: 0,
    OVERCAST: 0,
    RAIN: 0,
    SNOW: 0,
    THUNDERSTORM: 0,
    TORNADO: 0  
};


//load csv data - using OH_accidentc.csv - use Time, Lat, Lng
d3.csv("assets/OH_accidentc.csv", function(data) {
        var Adata = data;  
        console.log(Adata);
        console.log(Adata.length);
        Adata.forEach(function(data) {
               
                data.Lat = +data.Lat;
                data.Lng = +data.Lng;
                console.log(`data.Start_Lng: ${data.Lng}`);
                console.log(`Adata.Start_Lng: ${data.Lng}`);
                console.log(data.Weather_Condition);

                switch(data.Weather_Condition) {
                    case "Clear":
                        accidentStatusCode = "CLEAR"
                        break;
                    case "Fog":
                        accidentStatusCode = "FOG"
                        break;
                    case "Freezing Rain":
                        accidentStatusCode = "FREEZING_RAIN"
                        break;
                    case "Hail":
                        accidentStatusCode = "HAIL"
                        break;
                    case "Haze":
                        accidentStatusCode = "HAZE"
                        break;
                    case "Overcast":
                        accidentStatusCode = "OVERCAST"
                        break;
                    case "Rain":
                        accidentStatusCode = "RAIN"
                        break;
                    case "Snow":
                        accidentStatusCode = "SNOW"
                        break;
                    case "Thunderstorm":
                        accidentStatusCode = "THUNDERSTORM"
                        break;
                    default:
                        accidentStatusCode = "TORNADO"
                }
 
                // update accidentStatusCode
                accidentCount[accidentStatusCode]++;
                console.log(`accidentStatusCode 146: ${accidentStatusCode}`)
                // create new marker
                var newMarker = L.marker([data.Lat, data.Lng], {
                    icon: icons[accidentStatusCode]
                });
                // add the new marker
                newMarker.addTo(layers[accidentStatusCode]);
                // bind popup
                newMarker.bindPopup(data.ID + "<br> Date: " + data.Time + "<br> Severity:" + data.Severity);
            //}
            // update legend
            updateLegend(accidentCount);
       }); // end of for each loop	
});


// update legend html with icons for crash severity
function updateLegend(accidentCount) {
	document.querySelector(".legend").innerHTML = [
	"<p class='CLEAR'><img src=\"assets/img/sunny.png\">Clear: " + accidentCount.CLEAR + "</p>",
	"<p class='FOG'><img src=\"assets/img/fog.png\">Fog: " + accidentCount.FOG + "</p>",
    "<p class='FREEZING_RAIN'><img src=\"assets/img/icy_road.png\">Freezing Rain: " + accidentCount.FREEZING_RAIN + "</p>",
    "<p class='HAIL'><img src=\"assets/img/hail.png\">Hail: " + accidentCount.HAIL + "</p>",
    "<p class='HAZE'><img src=\"assets/img/haze.png\">Haze: " + accidentCount.HAZE + "</p>",
    "<p class='OVERCAST'><img src=\"assets/img/cloudy.png\">Overcast: " + accidentCount.OVERCAST + "</p>",
    "<p class='RAIN'><img src=\"assets/img/rainy.png\">Rain: " + accidentCount.RAIN + "</p>",
    "<p class='SNOW'><img src=\"assets/img/snowy-2.png\">Snow: " + accidentCount.SNOW + "</p>",
    "<p class='THUNDERSTORM'><img src=\"assets/img/thunderstorm.png\">Thunderstorm: " + accidentCount.THUNDERSTORM + "</p>",
    "<p class='TORNADO'><img src=\"assets/img/tornado-2.png\">Tornado: " + accidentCount.TORNADO + "</p>"	
	].join("");
}


//end of file