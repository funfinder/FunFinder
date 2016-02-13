angular.module('funfinder.search', [])

.controller('SearchController', function($scope,$state,$stateParams) {
  //setup the date time object if being passed.
  if (Object.keys($stateParams)>0)
  {
    $scope.searchQuery.dt = new Date($stateParams.dt);
  }

  $scope.datePicker = {
      opened: false
  };

  $scope.today = function() {
      $scope.searchQuery.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
      $scope.searchQuery.dt = null;
  };

  $scope.setDate = function(year, month, day) {
      $scope.searchQuery.dt = new Date(year, month, day);
  };

  $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
  };

  $scope.toggleMin();

  $scope.openDatePicker = function() {
      $scope.datePicker.opened = true;
  };

  $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  // $scope.getDayClass = function(date, mode) {
  //   if (mode === 'day') {
  //     var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

  //     for (var i = 0; i < $scope.events.length; i++) {
  //         var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

  //         if (dayToCheck === currentDay) {
  //             return $scope.events[i].status;
  //         }
  //     }
  //   }

  //   return '';
  // };

  $scope.search= function(){
    console.log('ya');
    // var query = {location: $scope.location, date : }
    $state.go('result',$scope.searchQuery);
  };
});
