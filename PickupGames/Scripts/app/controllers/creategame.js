appRoot.controller('CreateGameController', function ($scope, $http, $q, $location, $resource) {
    var input = (document.getElementById('CreateGameLocation'));
    new google.maps.places.Autocomplete(input);

    $scope.sports = [
    { label: 'Basketball', value: 1 },
    { label: 'Football', value: 2 },
    { label: 'Hockey', value: 3 },
    { label: 'Baseball', value: 4 },
    { label: 'Soccer', value: 5 },
    { label: 'Tennis', value: 6 },
    { label: 'Cricket', value: 7 },
    { label: 'Lacrosse', value: 8 },
    { label: 'Field Hockey', value: 9 },
    { label: 'Rugby', value: 10 },
    { label: 'Ping Pong', value: 11 },
    { label: 'Volleyball', value: 12 },
    { label: 'Kickball', value: 13 },
    { label: 'Chess', value: 14 }
    ];

    $scope.sportSelected = $scope.sports[0];

    $scope.creategame = function () {
        var game = {}
        game.sport = $scope.sport-selected;
        game.location = $scope.creategame.location;
        $http.post("api/games", game).success(function () {
            var temp = 1;
        });
    };
});