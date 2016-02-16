//create module inject nothing
angular.module('funfinder.volunteer.controller', [])

.controller('VolunteerController', function($scope, VolunteerService){
  $scope.volOpsArray =[];
  VolunteerService.fetchVolOpportunities(function(data) {
    $scope.volOpsArray = data;
  });
})