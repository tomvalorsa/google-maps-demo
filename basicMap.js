// jQuery Version:

var initializeMap = function() {
  // Step 1 - Declare the container for your map.
  var $container = $('#map-canvas')[0];

  // Step 2 - Specify any special options you want.
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };

  // Step 3 - Instantiate the map.
  var map = new google.maps.Map($container, mapOptions);
}


$(document).ready(function() {
  // Step 4 - Look at your pretty map. Noice.
  initializeMap();
});


//////////////////////////////////////////////////////////////////////
// Google Version:

// var map;
// function initialize() {
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(-34.397, 150.644)
//   };
//   map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }

// google.maps.event.addDomListener(window, 'load', initialize);
