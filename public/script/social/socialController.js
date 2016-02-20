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
	beginDate=new Date(date);
	var endDate=new Date(date);
	beginDate.setHours(23);
	beginDate.setMinutes(59);
	beginDate.setSeconds(59);
	endDate.setHours(00);
	endDate.setMinutes(00);
	endDate.setSeconds(00);
	console.log(beginDate);
	console.log(endDate);
	beginms=beginDate.getTime();
	endms=endDate.getTime();
	console.log(beginms);
	console.log(endms);

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