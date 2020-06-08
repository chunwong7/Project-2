// logic.js - Project 2 - Test File - logic

// Create the tile layer that will be the background of our map
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "streets-v11",
accessToken: API_KEY
});

// Initialize all of the Layer Groups as an object
var layers = {
	SEVERITY1: new L.LayerGroup(),
	SEVERITY2: new L.LayerGroup(),
	SEVERITY3: new L.LayerGroup(),
	SEVERITY4: new L.LayerGroup()
	};

// Create the map with our layers
// Create the map with our layers - center on Columbus Ohio
var map = L.map("map-id", {
    center: [39.9612, -82.9988],
    zoom: 11,
    layers: [
		layers.SEVERITY1,
		layers.SEVERITY2,
		layers.SEVERITY3,
		layers.SEVERITY4
		]
});

// add streets map to tile layer
streetmap.addTo(map);

// Create an overlays
var overlays = {
	"Severity 1": layers.SEVERITY1,
	"Severity 2": layers.SEVERITY2,
	"Severity 3": layers.SEVERITY3,
	"Severity 4": layers.SEVERITY4
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
    SEVERITY1: new L.Icon({
        iconUrl: "caraccident_black.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    SEVERITY2: new L.Icon({
        iconUrl: "caraccident_yellow.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    SEVERITY3: new L.Icon({
        iconUrl: "caraccident_orange.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    }),
    SEVERITY4: new L.Icon({
        iconUrl: "caraccident_red.png",
        iconSize:     [32, 37],
        iconAnchor:   [16, 37],
        popupAnchor:  [0, -35]
    })
};


var accidentStatusCode = [];
var accidentCount = {
    SEVERITY1: 0,
    SEVERITY2: 0,
    SEVERITY3: 0,
    SEVERITY4: 0  
};


//load csv data - 
d3.json("static/data/OH_test.json", function(data) {
        var Adata = data;  
        //console.log(Adata);
        //console.log(Adata.length);
        Adata.forEach(function(data) {
               
                data.Start_Lat = +data.Start_Lat;
                data.Start_Lng = +data.Start_Lng;
                //console.log(`data.Start_Lng: ${data.Start_Lng}`);
                //console.log(`Adata.Start_Lng: ${data.Start_Lng}`);
        
                if (data.Severity == 1) {
                    accidentStatusCode = "SEVERITY1";
                } else if (data.Severity == 2) {
                    accidentStatusCode = "SEVERITY2";
                } else if (data.Severity == 3) {
                    accidentStatusCode = "SEVERITY3";
                } else {
                    accidentStatusCode = "SEVERITY4";
                }
                // update accidentStatusCode
                accidentCount[accidentStatusCode]++;
                console.log(`accidentStatusCode: ${accidentStatusCode}`)
                // create new marker??? - this doesn't work
                var newMarker = L.marker([data.Start_Lat, data.Start_Lng], {
                    icon: icons[accidentStatusCode]
                });
                // add the new marker
                newMarker.addTo(layers[accidentStatusCode]);
                // bind popup
                newMarker.bindPopup(data.ID + "<br> Date: " + data.Start_Time + "<br>" + data.Weather_Condition);
            //}
            // update legend
            updateLegend(accidentCount);
       }); // end of for each loop	
});


// update legend html
function updateLegend(accidentCount) {
	document.querySelector(".legend").innerHTML = [
	"<p class='SEVERITY1'>Severity 1: " + accidentCount.SEVERITY1 + "</p>",
	"<p class='Severity2'>Severity 2: " + accidentCount.SEVERITY2 + "</p>",
	"<p class='Severity3'>Severity 3: " + accidentCount.SEVERITY3 + "</p>",
	"<p class='Severity4'>Severity 4: " + accidentCount.SEVERITY4 + "</p>"	
	].join("");
}


//end of file