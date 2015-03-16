angular.module('main')
    .controller('MainController', ['$scope', function ($scope, $location) {
        $scope.searchgames = function () {
            var location = $.trim($scope.Location);
            if (location === "")
            {
                window.location = "/#/games/usa/1?zoom=3";
                
            } else {
                window.location = "/#/games/" + location + "/1";  // get zoom level
            }
        };
    }]);