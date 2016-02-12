angular.module('funfinder.result', [])

.controller('ResultController', function($scope,$state,$stateParams) {
  console.log('params',$stateParams);
  $scope.searchQuery ={ dt: {} , location: ''}

});
