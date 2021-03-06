app.controller('createGameController', ['$scope', '$http', '$q', '$location', '$resource', 'googleMapsService', 'gamesService', 'ngAuthSettings', function ($scope, $http, $q, $location, $resource, googleMapsService, gamesService, ngAuthSettings) {
    googleMapsService.setAddressOnlyAutocomplete('CreateGameLocation');

    var _lastgame = {};
    var _formDirty = false;

    $scope.creategame = {};
    
    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];




    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [0, 15, 30, 45]
    };

    $scope.ismeridian = true;

    $scope.toggleMode = function () {
        $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.changed = function () {       
    };

    function getDateSetting() {
        var dateSetting = new Date();
        var currentMinuteValue = dateSetting.getMinutes();

        var minuteValue = 0;

        if (currentMinuteValue >= 0 && currentMinuteValue < 15) {
            minuteValue = 15;
        }

        if (currentMinuteValue >= 15 && currentMinuteValue < 30) {
            minuteValue = 30;
        }

        if (currentMinuteValue >= 30 && currentMinuteValue < 45) {
            minuteValue = 45;
        }

        if (currentMinuteValue >= 45 && currentMinuteValue < 59) {
            dateSetting.setHours(dateSetting.getHours() + 1);
        }

        dateSetting.setMinutes(minuteValue);

        return dateSetting;
    }

    function getDateTime() {
        var d = $scope.dt;
        var t = $scope.ti;
        var createdatetime = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "T" + t.getHours() + ":" + t.getMinutes() + ":00Z";        
        return createdatetime;
    }

    var sports = [{ id: 'basketball', name: 'basketball' },
           { id: 'football', name: 'football' },
           { id: 'hockey', name: 'hockey' }];

    var dateSetting = getDateSetting();

    $scope.sports = sports;
    $scope.ti = dateSetting;
    $scope.dt = dateSetting;
    $scope.toggleMin();
    $scope.creategameglyph = "glyphicon-plus";
    
    $scope.creategame = function () {
        var game = {}

        game.SportId = $scope.creategame.sportSelected.id;
        game.DateTime = getDateTime();
        game.Location = $scope.creategame.location;
        
        if (JSON.stringify(_lastgame) === JSON.stringify(game)) {
            $scope.creategameglyph = "glyphicon-plus";
            $('#createbutton').css('background-color', '#375a7f');
            $('#createbutton').css('border-color', '#375a7f');
            return;
        }

        $scope.createbuttontext = "Creating Game...";
        $scope.creategameglyph = "glyphicon-refresh spin";

        $http.post(ngAuthSettings.apiServiceBaseUri + 'api/games', game)
        .success(function () {
            _lastgame = game;           
            $scope.creategameglyph = "glyphicon-ok";
            $('#createbutton').css('background-color', '#00bc8c');
            $('#createbutton').css('border-color', '#00bc8c');
            })
        .error(function (response) {
            $scope.creategameglyph = "glyphicon-remove";
            $('#createbutton').css('background-color', '#ff0000');
            $('#createbutton').css('border-color', '#ff0000');
        });
    };
}]);