angular.module('funfinder.social.controller',[])
.controller('socialController',function($scope,GetReq){
	$scope.begindate;
	$scope.enddate;
	$scope.zip;
	$scope.radius;
	$scope.grpname;

	$scope.getByDatesPlace=function(){
		 GetReq.retrieveByDatePlace($scope.begindate,$scope.enddate,$scope.zip,$scope.radius).then(function(data){
          console.log(data);
       });

	};

	$scope.getByDatesGrp=function(){
		GetReq.retrieveByGrp($scope.begindate,$scope.enddate,$scope.grpname).then(function(data){
          console.log(data);
        });
	};

});