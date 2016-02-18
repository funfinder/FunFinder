angular.module('funfinder.social.controller',[])
.controller('socialController',function($scope,GetReq){
	$scope.begindate;
	$scope.enddate;
	$scope.zip;
	$scope.radius;
	$scope.grpname;

	$scope.getByDates=function(){
		 GetReq.retrieveByDate($scope.begindate,$scope.enddate).then(function(data){

       	$scope.stock['data']=data['data'];
       	console.log($scope.stock['data']);
       });

	};

	$scope.getByPlace=function(){
		 GetReq.retrieveByPlace($scope.zip,$scope.radius).then(function(data){

       	$scope.stock['data']=data['data'];
       	console.log($scope.stock['data']);
       });
	};

	$scope.getByGrp=function(){
		GetReq.retrieveByGrp($scope.grpname).then(function(data){

       	$scope.stock['data']=data['data'];
       	console.log($scope.stock['data']);
       });
	};

});