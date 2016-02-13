//handles the request to our server
//takes response from the api and gives it to public controller

//angular.module('name of this module', [array of injections like $scope])
angular.module('funfinder.entertain.service',[])

.factory('Movies', function ($http, callback) {
  var fetchMovies = function () {
    return $http({
      method: 'GET',
      url: '/entertain/getAll'
    })
    .then(function (resp) {
      return callback(resp.data);
    });
  };

  return {
  fetchMovies: fetchMovies
  };

})

//lets us call the method fetchMovies on the object Movies by invoking Movies.fetchMovies.