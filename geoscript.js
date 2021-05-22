function iniciarMap(){
    var coord = {lat:-33.03360373289972 ,lng: -71.53325920427936};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}