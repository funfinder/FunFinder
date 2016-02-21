angular.module('funfinder.result', [])

.controller('ResultController', function($scope, $state, $stateParams) {
  $scope.searchQuery = {
    dt: {},
    location: ''
  };
  $scope.searchQuery = $stateParams;

});
