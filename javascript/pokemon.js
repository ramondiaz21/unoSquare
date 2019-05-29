$(document).on('click', '#btnMostrar', function(e) {
  detalles();
});

function detalles() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://pokeapi.co/api/v2/pokemon/gengar/",
    "method": "GET",
    //"headers": {}
  }

  $.ajax(settings).done(function(response) {
    $('#txtInfo').html(response);
    console.log(response);
    $('#txtInfo').html(response.name);
  });
}