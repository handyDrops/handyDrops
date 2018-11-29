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
    let content = `
      <div>  <img src="../img/logochulo.png" width="150" height="60" ><h5><b>${e.name}<b></h5></div>
  
    `;
    let infowindow = new google.maps.InfoWindow({content})

map.addListener(function(){ 
  window.setTimeout(function(){
    map.panTo(marker.getPosition());
  }, 5000)
});
    marker.addListener('click', () => {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
      infowindow.open(map, marker);
    });
  });
}
