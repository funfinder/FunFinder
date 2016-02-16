//make funfinder.volunteer.service module, inject with nothing (empty array)
angular.module('funfinder.volunteer.service',[])

//factory will create function

//#Factory name is the name you inject into other module and being used in other place.
//So remember to use what's inside the quotion in other place you want to use.
.factory('VolunteerService', function($http, callback) {
  var fetchVolOpportunities =function() {
    return $http({
      method: 'GET',
      url: '/volunteer/getAll'
    })
    .then(function(resp) {
      return callback(resp.data);
    })
  }

  return {
    fetchVolOpportunities: fetchVolOpportunities
  }

})

/*
this creates an object called VolOpportunities, inside of which there is a function called fetchVolOpportunities
to invoke fetchVolOpportunities, we'd call volOpportunities.fetchVolOpportunities
*/
