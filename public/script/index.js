angular.module('funfinder', ['funfinder.entertain.controller',
  'funfinder.entertain.service',
  'funfinder.social.controller',
  'funfinder.social.service',
  'funfinder.volunteer.controller',
  'funfinder.volunteer.service',
  'funfinder.main',
  'funfinder.search',
  'funfinder.result',
  'ui.router',
  'ui.bootstrap',
  'funfinder.social.filter'
  ])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    //state for index html
    .state('index', {
      url: '',
      views: {
        'main': {
          templateUrl: "/view/main.html"
        },
        'search@index':{
          templateUrl : '/view/search.html'
        }
      }
    })

    //state for Search Page
    .state('result', {
      url: '/result/:location?dt',
      views: {
        'main': {
          templateUrl: "/view/result.html"
        },
        "search@result": {
          templateUrl: "/view/search.html"
        },
        "entertain@result": {
          templateUrl: "/view/entertain.html"
        },
        "social@result": {
          templateUrl: "/view/social.html"
        },
        "volunteer@result": {
          templateUrl: "/view/volunteer.html"
        }
      }
    });
  });
