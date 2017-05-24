function Bike() {

}

Bike.prototype.getBikes = function(location, proximity, bikeData) {
  $.get(`https://bikeindex.org:443/api/v3/search/count?location=${location}&distance=${proximity}&stolenness=stolen
`)
  .then(function(response) {
    console.log(response);
    bikeData(response.proximity);
  })
  .fail(function(error) {
    $('.bikeResults').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
