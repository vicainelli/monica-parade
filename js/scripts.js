
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

	var toy09 = new google.maps.LatLng(-23.5159333, -46.6249667);
	var toyMarker = new google.maps.Marker({ position: toy09, map: map, icon: image });

	var toy10 = new google.maps.LatLng(-23.4955167, -46.6106500);
	var toyMarker = new google.maps.Marker({ position: toy10, map: map, icon: image });

	var toy11 = new google.maps.LatLng(-23.5443833, -46.6605167);
	var toyMarker = new google.maps.Marker({ position: toy11, map: map, icon: image });

	var toy12 = new google.maps.LatLng(-23.5740667, -46.6889833);
	var toyMarker = new google.maps.Marker({ position: toy12, map: map, icon: image });

	var toy13 = new google.maps.LatLng(-23.5677667, -46.6486167);
	var toyMarker = new google.maps.Marker({ position: toy13, map: map, icon: image });

	var toy14 = new google.maps.LatLng(-23.5840833, -46.6098333);
	var toyMarker = new google.maps.Marker({ position: toy14, map: map, icon: image });

	var toy15 = new google.maps.LatLng(-23.5487667, -46.5687000);
	var toyMarker = new google.maps.Marker({ position: toy15, map: map, icon: image });

	var toy16 = new google.maps.LatLng(-23.5573500, -46.6612667);
	var toyMarker = new google.maps.Marker({ position: toy16, map: map, icon: image });

	var toy17 = new google.maps.LatLng(-23.5769167, -46.6799167);
	var toyMarker = new google.maps.Marker({ position: toy17, map: map, icon: image });

	var toy18 = new google.maps.LatLng(-23.5657333, -46.6513500);
	var toyMarker = new google.maps.Marker({ position: toy18, map: map, icon: image });

	var toy19 = new google.maps.LatLng(-23.5415333, -46.6773333);
	var toyMarker = new google.maps.Marker({ position: toy19, map: map, icon: image });

	var toy20 = new google.maps.LatLng(-23.6032833, -46.6609833);
	var toyMarker = new google.maps.Marker({ position: toy20, map: map, icon: image });

	var toy20 = new google.maps.LatLng(-23.6032833, -46.6609833);
	var toyMarker = new google.maps.Marker({ position: toy20, map: map, icon: image });

	var toy21 = new google.maps.LatLng(-23.5621833, -46.6922667);
	var toyMarker = new google.maps.Marker({ position: toy21, map: map, icon: image });

	var toy22 = new google.maps.LatLng(-23.5956500, -46.5242667);
	var toyMarker = new google.maps.Marker({ position: toy22, map: map, icon: image });

	var toy23 = new google.maps.LatLng(-23.5883833, -46.6888500);
	var toyMarker = new google.maps.Marker({ position: toy23, map: map, icon: image });

	var toy24 = new google.maps.LatLng(-23.5805333, -46.6847167);
	var toyMarker = new google.maps.Marker({ position: toy24, map: map, icon: image });

	var toy25 = new google.maps.LatLng(-23.4803333, -46.6039000);
	var toyMarker = new google.maps.Marker({ position: toy25, map: map, icon: image });

	var toy26 = new google.maps.LatLng(-23.5690667, -46.4110333);
	var toyMarker = new google.maps.Marker({ position: toy26, map: map, icon: image });

	var toy27 = new google.maps.LatLng(-23.5616000, -46.6578000);
	var toyMarker = new google.maps.Marker({ position: toy27, map: map, icon: image });

	var toy28 = new google.maps.LatLng(-23.5665333, -46.4679833);
	var toyMarker = new google.maps.Marker({ position: toy28, map: map, icon: image });

	var toy29 = new google.maps.LatLng(-23.5648167, -46.6669500);
	var toyMarker = new google.maps.Marker({ position: toy29, map: map, icon: image });

	var toy30 = new google.maps.LatLng(-23.5878000, -46.6578167);
	var toyMarker = new google.maps.Marker({ position: toy30, map: map, icon: image });

	var toy31 = new google.maps.LatLng(-23.5585500, -46.6597000);
	var toyMarker = new google.maps.Marker({ position: toy31, map: map, icon: image });

	var toy32 = new google.maps.LatLng(-23.5621667, -46.6554000);
	var toyMarker = new google.maps.Marker({ position: toy32, map: map, icon: image });

	var toy33 = new google.maps.LatLng(-23.5458667, -46.6578000);
	var toyMarker = new google.maps.Marker({ position: toy33, map: map, icon: image });

	var toy34 = new google.maps.LatLng(-23.4985667, -46.4963500);
	var toyMarker = new google.maps.Marker({ position: toy34, map: map, icon: image });

	var toy35 = new google.maps.LatLng(-23.5726333, -46.6290333);
	var toyMarker = new google.maps.Marker({ position: toy35, map: map, icon: image });

	var toy36 = new google.maps.LatLng(-23.5435667, -46.7257500);
	var toyMarker = new google.maps.Marker({ position: toy36, map: map, icon: image });

	var toy37 = new google.maps.LatLng(-23.5271667, -46.5504333);
	var toyMarker = new google.maps.Marker({ position: toy37, map: map, icon: image });

	var toy38 = new google.maps.LatLng(-23.6052500, -46.6941333);
	var toyMarker = new google.maps.Marker({ position: toy38, map: map, icon: image });

	var toy39 = new google.maps.LatLng(-23.5454167, -46.5733333);
	var toyMarker = new google.maps.Marker({ position: toy39, map: map, icon: image });

	var toy40 = new google.maps.LatLng(-23.6132000, -46.6198500);
	var toyMarker = new google.maps.Marker({ position: toy40, map: map, icon: image });

	var toy41 = new google.maps.LatLng(-23.6342500, -46.7259167);
	var toyMarker = new google.maps.Marker({ position: toy41, map: map, icon: image });

	var toy42 = new google.maps.LatLng(-23.5625833, -46.6672667);
	var toyMarker = new google.maps.Marker({ position: toy42, map: map, icon: image });

	var toy43 = new google.maps.LatLng(-23.4954833, -46.4120333);
	var toyMarker = new google.maps.Marker({ position: toy43, map: map, icon: image });

	var toy44 = new google.maps.LatLng(-23.5446167, -46.6492500);
	var toyMarker = new google.maps.Marker({ position: toy44, map: map, icon: image });

	var toy45 = new google.maps.LatLng(-23.4399167, -46.7875667);
	var toyMarker = new google.maps.Marker({ position: toy45, map: map, icon: image });

	var toy46 = new google.maps.LatLng(-23.5579333, -46.6809833);
	var toyMarker = new google.maps.Marker({ position: toy46, map: map, icon: image });

	var toy47 = new google.maps.LatLng(-23.5034333, -46.7272333);
	var toyMarker = new google.maps.Marker({ position: toy47, map: map, icon: image });

	var toy48 = new google.maps.LatLng(-23.5675833, -46.5407333);
	var toyMarker = new google.maps.Marker({ position: toy48, map: map, icon: image });

	var toy49 = new google.maps.LatLng(-23.5850333, -46.6754500);
	var toyMarker = new google.maps.Marker({ position: toy49, map: map, icon: image });

	var toy50 = new google.maps.LatLng(-23.5704167, -46.6909500);
	var toyMarker = new google.maps.Marker({ position: toy50, map: map, icon: image });




}

google.maps.event.addDomListener(window, 'load', initialize);






