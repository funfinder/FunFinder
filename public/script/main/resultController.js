angular.module('funfinder.result', [])

.controller('ResultController', function($scope, $state, $stateParams) {
  $scope.searchQuery = {
    dt: {},
  	zip: '',
    city: '',
    state: ''
  };
  

});
