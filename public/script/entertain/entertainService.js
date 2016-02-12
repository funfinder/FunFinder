//handles the request to our server
//takes response from the api and gives it to public controller

angular.module('funfinder.entertain',[])
.factory('Movies', function ($http) {
  var fetchMovies = function () {
    return $http({
      method: 'GET',
      url: '/entertain/movies'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
  fetchMovies: fetchMovies
  };

})