let map;

function initMap() {
  position = { lat:40.3909212, lng:-3.7015007 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 10,
  });
  
  places.forEach(e => {
    console.log(e)
    const marker = new google.maps.Marker({
      position: { lat:e.location.lat, lng:e.location.lng },
      map,
      title: e.name,
      title: e.adress,
    });
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
  });
}
