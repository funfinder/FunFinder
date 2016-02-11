angular.module('funfinder',['funfinder.entertain',
                            'funfinder.social',
                            'funfinder.volunteer',
                            'ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: '',
      views: {
        "main": { template: "main.html" }
      }
    })
    .state('search',{
      url:'search',
      view: {
          'entertain' :{template: 'entertain/entertain.html'},
          'social' : {template: 'social/social.html'},
          'volunteer' : {template : 'volunteer/volunteer.html'}
      }
    });
})
