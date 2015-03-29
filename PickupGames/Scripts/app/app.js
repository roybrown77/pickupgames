var appRoot = angular.module('main', [
    'ngRoute',
    'ngResource',
    //'ngDialog',
    'ui.bootstrap'
]);

appRoot.config([
    '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/home', { templateUrl: '/home/main', controller: 'MainController' })
            .when('/games', { templateUrl: '/home/games', controller: 'GamesController' })
            .when('/games/new', { templateUrl: '/home/creategame', controller: 'CreateGameController' })
            .when('/games/:location', { templateUrl: '/home/games', controller: 'GamesController' })
            .when('/games/:location/:index', { templateUrl: '/home/games', controller: 'GamesController' })
            .otherwise({ redirectTo: '/home' });
    }
]); 

appRoot.run(['$route', '$rootScope', '$location', function($route, $rootScope, $location) {
        var original = $location.path;
        $location.path = function(path, reload) {
            if (reload === false) {
                var lastRoute = $route.current;
                var un = $rootScope.$on('$locationChangeSuccess', function() {
                    $route.current = lastRoute;
                    un();
                });
            }
            return original.apply($location, [path]);
        };
    }
]);