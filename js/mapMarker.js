var initializeMap = function() {
  // Step 1 - Save the location of the marker.
  var myLatlng = new google.maps.LatLng(-33.5964898, 151.32411739);

  var $container = $('#map-canvas')[0];
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  };
  var map = new google.maps.Map($container, mapOptions);

  // Optional - specify an image path relative to the project folder.
  // This can be used in place of the standard marker.
  var image = 'img/rainbow.png'

  // Step 2 - Instantiate a new marker and tell it where to go.
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: 'Hello World!'
  });
}

$(document).ready(function() {
  initializeMap();
});
