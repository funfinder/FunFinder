//create module inject nothing
angular.module('funfinder.volunteer.controller', [])

.controller('VolunteerController', function($scope, VolunteerService){
  $scope.volOpsArray =[];
  $scope.showVolIcon = true;
  VolunteerService.fetchVolOpportunities($scope.searchQuery, function(data) {
    $scope.volOpsArray = data;
  });
})