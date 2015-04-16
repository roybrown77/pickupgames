var appRoot = angular.module('main', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap'
]);

appRoot.config([
    '$httpProvider', '$routeProvider', '$locationProvider', function ($httpProvider, $routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('authInterceptorService');

        $routeProvider
            .when('/home', { controller: 'HomeController', templateUrl: '/Scripts/app/views/home.html' })
            .when("/login", { controller: "LoginController", templateUrl: "/Scripts/app/views/login.html" })
            .when("/signup", { controller: "SignupController", templateUrl: "/Scripts/app/views/signup.html" })
 
            //.when('/games', { templateUrl: '/home/games', controller: 'GamesController' })
            //.when('/games/new', { templateUrl: '/home/creategame', controller: 'CreateGameController' })
            //.when('/games/:location', { templateUrl: '/home/games', controller: 'GamesController' })
            //.when('/games/:location/:index', { templateUrl: '/home/games', controller: 'GamesController' })

            .otherwise({ redirectTo: '/home' });
    }
]); 

//appRoot.run(['$route', '$rootScope', '$location', function($route, $rootScope, $location) {
//        var original = $location.path;
//        $location.path = function(path, reload) {
//            if (reload === false) {
//                var lastRoute = $route.current;
//                var un = $rootScope.$on('$locationChangeSuccess', function() {
//                    $route.current = lastRoute;
//                    un();
//                });
//            }
//            return original.apply($location, [path]);
//        };
//    }
//]);

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);