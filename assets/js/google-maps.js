function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 12.030427, lng: 75.509314};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Kannur, Kerala, IND' // Title Location
    });
}