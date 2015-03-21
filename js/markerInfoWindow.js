var initializeMap = function() {
  var myLatlng = new google.maps.LatLng(41.89021, 12.492231);
  var $container = $('#map-canvas')[0];
  var mapOptions = {
    zoom: 18,
    // Same as satellite view but enables labels by default.
    mapTypeId: google.maps.MapTypeId.HYBRID,
    center: myLatlng
  };
  var map = new google.maps.Map($container, mapOptions);

  // Sets the tilt of the imagery, doesn't work for standard map view.
  map.setTilt(45);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      // Step 1 - Give it a relevant title.
      title: 'Colosseum, Rome'
  });

  // Step 2 - Write your content.
  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Colosseum, Rome</h1>'+
    '<div id="bodyContent">'+
    '<p>Look at all of the people inside of me.</p>'
    '</div>'+
    '</div>';

  // Step 3 - Instantiate the info window.
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  // Step 4 - Add an event listener to the marker. The Google way.
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

$(document).ready(function() {
  initializeMap();
});
