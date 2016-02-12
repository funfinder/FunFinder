angular.module('funfinder',['funfinder.entertain',
                            'funfinder.social',
                            'funfinder.volunteer',
                            'funfinder.main',
                            'ui.router',
                            'ui.bootstrap'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    //state for index html
    .state('index', {
      url: '',
      views: {
        "main": { templateUrl: "/main/main.html" }
      }
    })

    //state for Search Page
    .state('search',{
      url:'/search',
      views: {
        "main":{ templateUrl: "/main/search.html"  }
      }
    });
 })
