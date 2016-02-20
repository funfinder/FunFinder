angular.module('funfinder.social.controller',[])
.controller('socialController',function($scope,GetReq,$stateParams){
	var city=$stateParams.city;
	var state=$stateParams.state;
	var zip=$stateParams.zip;
	var date=$stateParams.dt;

	console.log(city);
	console.log(state);
	console.log(zip);
	console.log(date);
	date=new Date(date);
	var today=new Date();

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