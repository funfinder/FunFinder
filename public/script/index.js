angular.module('funfinder', ['funfinder.entertain',
  'funfinder.social.controller',
  'funfinder.social.service',
  'funfinder.volunteer.controller',
  'funfinder.volunteer.service',
  'funfinder.main',
  'funfinder.search',
  'funfinder.result',
  'ui.router',
  'ui.bootstrap'
  ])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    //state for index html
    .state('index', {
      url: '',
      views: {
        'main': {
          templateUrl: "/main/main.html"
        },
        'search@index':{
          templateUrl : '/main/search.html'
        }
      }
    })

    //state for Search Page
    .state('result', {
      url: '/result',
      views: {
        'main': {
          templateUrl: "/main/result.html"
        },
        "search@result": {
          templateUrl: "/main/search.html"
        },
        "entertain@result": {
          templateUrl: "/script/entertain/entertain.html"
        },
        // "social@result": {
        //   templateUrl: "/script/social/social.html"
        // },
        "volunteer@result": {
          templateUrl: "/script/volunteer/volunteer.html"
        }
      }
    });
  });
