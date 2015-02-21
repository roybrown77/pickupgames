var appRoot = angular.module('main', [
    'ngRoute',
    'ngResource'
]);

appRoot.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/home', { templateUrl: '/home/main', controller: 'MainController' })
                .when('/games', { templateUrl: '/home/games', controller: 'GamesController' })
                .when('/games/:location', { templateUrl: '/home/games', controller: 'GamesController' })
                .when('/games/:location/:index', { templateUrl: '/home/games', controller: 'GamesController' })
                //.when('/about', { templateUrl: '/home/about', controller: 'AboutController' })
                //.when('/demo', { templateUrl: '/home/demo', controller: 'DemoController' })
                //.when('/angular', { templateUrl: '/home/angular' })
                .otherwise({ redirectTo: '/home' });
        }
    ])
    .controller('RootController', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
            $scope.$on('$routeChangeSuccess', function(e, current, previous) {
                $scope.activeViewPath = $location.path();
            });
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