jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize&key=AIzaSyD4D4rbfiH1ZHEPwQdFZaPCz3QZbFwxXRM";
    document.body.appendChild(script);
});

function initialize() {
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        mapTypeControlOptions: { mapTypeIds: [] },
    };

    // Display a map on the page
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [
        ['Old Field Club', 40.946632,-73.139228, 'red-dot'],
        ['Infant Jesus', 40.940944,-73.064018, 'red-dot'],
        ['Danford\'s', 40.947763, -73.068767, 'blue-dot'],
        ['Holiday Inn', 40.887858, -73.096440, 'blue-dot'],
        ['Hilton', 40.913669, -73.118491, 'blue-dot'],
        ['Three Village Inn', 40.919212, -73.148284, 'blue-dot'],
    ];

    // Info Window Content
    var infoWindowContent = [
        [
            '<div class="info_content">' +
            '<h3>Old Field Club</h3>' +
            '<p>The Old Field Club is our reception venue. It\'s a lovely building with a rustic vibe right on the Long Island Sound.</p>' +
            '</div>'
        ],
        [
            '<div class="info_content">' +
            '<h3>Infant Jesus Catholic Church</h3>' +
            '<p>Our wedding Mass and ceremony will be at this lovely church in Port Jefferson.</p>' +
            '</div>'
        ],
        [
            '<div class="info_content">' +
            '<h3>Danford\'s</h3>' +
            '<p>A cute hotel right on the water in Port Jefferson.</p>' +
            '</div>'
        ],
        [
            '<div class="info_content">' +
            '<h3>Holiday Inn</h3>' +
            '<p>A Holiday Inn on the highway near Stony Brook.</p>' +
            '</div>'
        ],
        [
            '<div class="info_content">' +
            '<h3>Hilton Garden Inn</h3>' +
            '<p>A hotel on the campus of SUNY Stony Brook.</p>' +
            '</div>'
        ],
        [
            '<div class="info_content">' +
            '<h3>Three Village Inn</h3>' +
            '<p>A cute hotel near Avalon Park.</p>' +
            '</div>'
        ],
    ];


    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    var mapmarkers = [];
    //infoWindow.setOptions({disableAutoPan: true});

    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: 'https://maps.google.com/mapfiles/ms/icons/' + markers[i][3] + '.png',
        });

        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));
        mapmarkers.push(marker);
    }
    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
    //new google.maps.event.trigger(mapmarkers[0], 'click');

    var disp = function(i) {
        return function() {
            marker = mapmarkers[i];
            infoWindow.setContent(infoWindowContent[i][0]);
            infoWindow.open(map, marker);
        }
    }

    // Set up listeners
    $("#reception").click(disp(0));
    $("#massandceremony").click(disp(1));
    $("#danfords").click(disp(2));
    $("#holidayinn").click(disp(3));
    $("#hilton").click(disp(4));
    $("#threevillageinn").click(disp(5));
}

