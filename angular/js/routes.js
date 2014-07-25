define(['angular', 'controllers'] , function (angular) {
	angular.module('app.Routes',['app.Controllers','ui.router']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/',
                templateUrl: 'partial-home.html',
                controller: 'HomeCtrl'
            })

            // nested list with custom controller
            .state('home.list', {
                url: '/list',
                templateUrl: 'partial-home-list.html',
                controller: function($scope) {
                    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                }
            })


            // nested list with just some random string data
            .state('signup', {
                url: '/signup',
                templateUrl: 'partial-home.html',
                template: 'I could sure use a drink right now.'
            })

            // nested list with just some random string data
            .state('home.paragraph', {
                url: '/paragraph',
                template: 'I could sure use a drink right now.'
            })

            .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'partial-about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },

                // for column two, we'll define a separate controller
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
          })
  });
});