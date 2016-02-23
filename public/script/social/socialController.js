angular.module('funfinder.social.controller',[])
.controller('socialController',function($scope,GetReq,$stateParams){

	var zip=$scope.searchQuery.location;
	var date=$scope.searchQuery.dt;
	console.log(zip,'zip');
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
	$scope.mydata;
	$scope.socialArr=[];


	// $scope.getData=function(){
	//    GetReq.getMeetUp(city,state,beginms,endms).then(function(data){

     
 //       });
	// };
	 // $scope.goLogin = function() {
	 // 	console.log("clicked on an event");
  //       $location.url('http://google.com/');
  //   };

	$scope.getDataZip=function(){
	   GetReq.getMeetUpZip(zip,beginms,endms).then(function(data){
	   	console.log('inside client controller');
	    console.log(data);
	    // if (Array.isArray(data['data'])===false){
	    // 	$scope.mydata=data['data'];
	    // }
	    // else{

	    var descrTruncate=function(description){
            description=description.slice(0,200);
            description+='.....';
            description=description.replace(/&nbsp/gi, "");
            description=description.replace(/&gt/gi, "");
            return description;
	    };


	    $scope.mydata=data['data'].slice(0,5);
	    var i;
	    for(i=0; i<5; i++){
	        $scope.socialArr[i]={};
	        $scope.socialArr[i]['description']=descrTruncate($scope.mydata[i]['description']);
	        $scope.socialArr[i]['venueName']=$scope.mydata[i]['venue']['name'];
	        $scope.socialArr[i]['eventName']=$scope.mydata[i]['name'];
	        $scope.socialArr[i]['address']=$scope.mydata[i]['venue']['address_1'];
	        $scope.socialArr[i]['city']=$scope.mydata[i]['venue']['city'];
	        $scope.socialArr[i]['state']=$scope.mydata[i]['venue']['state'];
	        $scope.socialArr[i]['country']=$scope.mydata[i]['venue']['country'].toUpperCase();
	        $scope.socialArr[i]['zip']=$scope.mydata[i]['venue']['zip'];
	        $scope.socialArr[i]['time']=$scope.mydata[i]['time'];
	        $scope.socialArr[i]['url']=$scope.mydata[i]['event_url'];
            $scope.socialArr[i]['address']=$scope.socialArr[i]['venueName']+'\n'+$scope.socialArr[i]['address']+', '+$scope.socialArr[i]['city']+', '+$scope.socialArr[i]['state']+' '+$scope.socialArr[i]['country'];
	        	
	    }
	    // }
	    
     
       });
	};

	$scope.getDataZip();

});