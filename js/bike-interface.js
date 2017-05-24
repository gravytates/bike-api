var Bike = require('./../js/bike.js').bikeModule;

var bikeData = function(bikeStuff) {
  $('.bikeResults').append(`Bikes Stolen: ${bikeStuff}`);
};

$(document).ready(function() {
  $("#button").click(function() {
    var bikeQuery = new Bike();
    var location = $("#location").val();
    var proximity = parseInt($("#proximity").val());
    bikeQuery.getBikes(location, proximity, bikeData);
  });
});
