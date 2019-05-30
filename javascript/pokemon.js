$(document).on('click', '#btnMostrar', function(e) {
  detalles();
});

function detalles() {
  var pokemon = $('#txtNombre').val();
  var url = "http://pokeapi.co/api/v2/pokemon/" + pokemon;
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    //"headers": {}
  }

  $.ajax(settings).done(function(response) {
    var myJson = response;
    var info = JSON.stringify(myJson, undefined, 4);
    console.log(info);
    $('#txtInfo').html(info);
  });
}