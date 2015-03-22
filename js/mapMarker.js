var initializeMap = function() {
  // Step 1 - Save the location of the marker.
  var myLatlng = new google.maps.LatLng(51.500729, -0.124625);

  var $container = $('#map-canvas')[0];
  var mapOptions = {
    zoom: 18,
    center: myLatlng
  };
  var map = new google.maps.Map($container, mapOptions);

  // Optional - specify an image path relative to the project folder.
  // This can be used in place of the standard marker.
  var image = 'img/bigben_256.png'

  // Step 2 - Instantiate a new marker and tell it where to go.
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      // icon: image,
      title: 'Hello World!'
  });
}

$(document).ready(function() {
  initializeMap();
});
