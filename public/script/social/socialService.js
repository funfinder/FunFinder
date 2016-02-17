angular.module('funfinder.social.service',[])
.factory('GetReq', function($http){

	var retrieveByDate=function(begin,end){
		return $http({
			method: 'GET',
			url: 'http://127.0.0.1:5000/byDate/:'+begin+'-'+end
		});
	};

	var retrieveByPlace=function(zipcode,radius){
		return $http({
			method: 'GET',
			url: 'http://127.0.0.1:5000/byPlace/:'+zipcode+'-'+radius
		});
	};
	var retrieveByGrp=function(groupname){
		return $http({
			method: 'GET',
			url: 'http://127.0.0.1:5000/byGroup/:'+groupname
		});
	};
	return{
         retrieveByDate: retrieveByDate,
         retrieveByPlace:retrieveByPlace,
         retrieveByGrp:retrieveByGrp
	};
});

