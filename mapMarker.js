var initializeMap = function() {
  // Step 1 - Save the location of the marker.
  var myLatlng = new google.maps.LatLng(51.507351, -0.127758);

  var $container = $('#map-canvas')[0];
  var mapOptions = {
    zoom: 8,
    center: myLatlng
  };
  var map = new google.maps.Map($container, mapOptions);

  // Step 2 - Instantiate a new marker and tell it where to go.
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

$(document).ready(function() {
  initializeMap();
});
