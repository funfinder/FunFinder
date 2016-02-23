//make funfinder.volunteer.service module, inject with nothing (empty array)
angular.module('funfinder.volunteer.service',[])

//factory will create function

.factory('VolunteerService', function($http) {
  var fetchVolOpportunities =function(searchQuery, callback) {
    return $http({
      method: 'GET',
      url: '/volunteer/getAll',
      params: searchQuery
    })
    .then(function(resp) {
      return callback(resp.data);
    })
  }

  return {
    fetchVolOpportunities: fetchVolOpportunities
  }

})

