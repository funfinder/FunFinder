


//create module inject nothing
angular.module('funfinder.volunteer.controller', [])

.controller('VolunteerController', function($scope, volunteerService){
  $scope.volOpsArray =[];
  VolOpportunities.fetchVolOpportunities(function(data) {
    $scope.volOpsArray = data;
  });
})