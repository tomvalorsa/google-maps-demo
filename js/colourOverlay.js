var map;
var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);

// Step 1 - Save your mapTypeId (for use in mapOptions) in a variable as 'custom_style'.
var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  // Step 2 - Define the feauture options of your styled map.
  var featureOpts = [
    {
      "elementType": "geometry",
      "stylers": [
        { "hue": "#ff8800" },
        { "saturation": -35 },
        { "lightness": -4 },
        { "gamma": 1.54 },
        { "weight": 1.2 }
      ]
    }
  ];

  var mapOptions = {
    zoom: 12,
    center: brooklyn,
    // Step 3 - Specify the map type IDs so it knows you want to use your custom design.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map($('#map-canvas')[0], mapOptions);

  // Step 4 - Save a new StyledMapType in a variable, using the featureOpts and styledMapOptions.
  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  // Step 5 - Set the type of the map to your own custom map type.
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

// Step 6 - Tell everyone that you designed it from scratch and it took you ages.
$(document).ready(function() {
  initialize();
});