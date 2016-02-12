angular.module('funfinder.main', [])

.controller('MainController', function($scope,$state) {
  $scope.searchQuery ={ dt: {} , location: ''};
});
