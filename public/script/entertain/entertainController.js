angular.module('funfinder.entertain.controller',[])
.controller('MovieController', function($scope, entertainService){
  $scope.movieArray = [];
  Movies.fetchMovies(function(data){
    
    $scope.movieArray = data
    
  });
  
});



