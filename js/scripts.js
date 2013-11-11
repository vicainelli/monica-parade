
var map;
function initialize() {
	var mapOptions = {

		zoom: 11,
		center: new google.maps.LatLng(-23.5489, -46.6388),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	var image = 'images/pin-monica.png';

	var toy01 = new google.maps.LatLng(-23.5663167, -46.6693167);
	var toyMarker = new google.maps.Marker({ position: toy01, map: map, icon: image });

	var toy02 = new google.maps.LatLng(-23.4787000, -46.3817000);
	var toyMarker = new google.maps.Marker({ position: toy02, map: map, icon: image });

	var toy03 = new google.maps.LatLng(-23.5892667, -46.7009500);
	var toyMarker = new google.maps.Marker({ position: toy03, map: map, icon: image });

	var toy04 = new google.maps.LatLng(-23.5572333, -46.6650000);
	var toyMarker = new google.maps.Marker({ position: toy04, map: map, icon: image });

	var toy05 = new google.maps.LatLng(-23.5021500, -46.6945500);
	var toyMarker = new google.maps.Marker({ position: toy05, map: map, icon: image });

	var toy06 = new google.maps.LatLng(-23.5774333, -46.6866333);
	var toyMarker = new google.maps.Marker({ position: toy06, map: map, icon: image });

	var toy07 = new google.maps.LatLng(-23.5928333, -46.6693833);
	var toyMarker = new google.maps.Marker({ position: toy07, map: map, icon: image });

	var toy08 = new google.maps.LatLng(-23.5815167, -46.6836000);
	var toyMarker = new google.maps.Marker({ position: toy08, map: map, icon: image });




}

google.maps.event.addDomListener(window, 'load', initialize);






