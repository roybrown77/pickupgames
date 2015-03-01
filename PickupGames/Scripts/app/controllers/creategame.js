appRoot.controller('CreateGameController', function ($scope, $http, $q, $location, $resource) {
    var input = (document.getElementById('CreateGameLocation'));
    new google.maps.places.Autocomplete(input);

    $scope.sports = [
    { label: 'BasketBall', value: 1 },
    { label: 'Football', value: 2 }
    ];

    $scope.sportSelected = $scope.sports[1];

    $scope.creategame = function () {
        var game = {}
        game.sport = $scope.sport-selected;
        game.location = $scope.creategame.location;
        $http.post("api/games", game).success(function () {
            var temp = 1;
        });
    };
});