angular.module('funfinder.entertain.controller',[])
.controller('MovieController', function($scope, Movies){
  $scope.movieArray = [];
  Movies.fetchMovies($scope.searchQuery, function(data){
    
    $scope.movieArray = data
    
  });
  
});



