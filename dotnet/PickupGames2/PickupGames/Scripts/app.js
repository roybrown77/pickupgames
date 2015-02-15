var gamesApp = angular.module('gamesApp', [
    'ngRoute',
    'gamesAppControllers'
]);

gamesApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'Home/Index',
            controller: 'HomeController'
        }).
        when('/About', {
            templateUrl: 'Home/About',
            controller: 'HomeController'
        }).
        when('/Contact', {
            templateUrl: 'Home/Contact',
            controller: 'HomeController'
        }).
        when('/Games', {
            templateUrl: 'Games/Index',
            controller: 'GameController'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);