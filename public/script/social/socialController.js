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
	beginDate.setHours(00);
	beginDate.setMinutes(00);
	beginDate.setSeconds(00);
	endDate.setHours(23);
	endDate.setMinutes(59);
	endDate.setSeconds(59);
	console.log(beginDate);
	console.log(endDate);
	beginms=beginDate.getTime();
	endms=endDate.getTime();
	console.log(beginms);
	console.log(endms);

	$scope.getData=function(){
	   GetReq.getMeetUp(city,state,beginms,endms).then(function(data){

     
       });
	};

	$scope.getDataZip=function(){
	   GetReq.getMeetUpZip(zip,beginms,endms).then(function(data){

     
       });
	};

	$scope.getData();

});