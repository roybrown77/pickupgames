var appRoot = angular.module('main', [
    'ngRoute',
    'ngResource'
]);

appRoot.config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/home', { templateUrl: '/home/main', controller: 'MainController' })
                .when('/games', { templateUrl: '/games/index', controller: 'GameController' })
                //.when('/about', { templateUrl: '/home/about', controller: 'AboutController' })
                //.when('/demo', { templateUrl: '/home/demo', controller: 'DemoController' })
                //.when('/angular', { templateUrl: '/home/angular' })
                .otherwise({ redirectTo: '/home' });
        }
    ])
    .controller('RootController', [
        '$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
            $scope.$on('$routeChangeSuccess', function(e, current, previous) {
                $scope.activeViewPath = $location.path();
            });
        }
    ]);