angular.module('funfinder.social.service',[])
.factory('GetReq', function($http){
 var getMeetUp=function(city, state, beginTime, endTime){

  return $http({
	method: 'GET',
    url: 'http://127.0.0.1:5000/:'+city+'?'+state+'?'+beginTime+'?'+endTime
   });
};
  var getMeetUpZip=function(zip, beginTime, endTime){

  return $http({
	method: 'GET',
    url: 'http://127.0.0.1:5000/:'+zip+'?'+beginTime+'?'+endTime
   });
};
       return {
       		getMeetUp: getMeetUp,
       		getMeetUpZip: getMeetUpZip
       };
});

