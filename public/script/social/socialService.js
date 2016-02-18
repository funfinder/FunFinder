angular.module('funfinder.social.service',[])
.factory('GetReq', function($http){

	var retrieveByDatePlace=function(begin,end,zip,radius){
		return $http({
			method: 'GET',
			url: 'http://127.0.0.1:5000/byDatesPlace/:'+begin+'-'+end+'/'+zip+'-'+radius
		});
	};

	
	var retrieveByDateGrp=function(begin,end,groupname){
		return $http({
			method: 'GET',
			url: 'http://127.0.0.1:5000/byDatesGroup/:'+begin+'-'+end+'/'+groupname
		});
	};
	return{
         retrieveByDatePlace: retrieveByDatePlace,
         retrieveByDateGrp:retrieveByDateGrp
	};
});

