angular.module('funfinder.entertain.controller',[])
.controller('MovieController', function($scope, Movies){
  $scope.movieArray = [];
  Movies.fetchMovies(function(data){
    
    $scope.movieArray = data
    
  });
  
});



