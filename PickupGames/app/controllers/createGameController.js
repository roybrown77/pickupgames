//angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
//angular.module('ui.bootstrap.demo').controller('DatepickerDemoCtrl', function ($scope) {
//    $scope.today = function () {
//        $scope.dt = new Date();
//    };
//    $scope.today();

//    $scope.clear = function () {
//        $scope.dt = null;
//    };

//    // Disable weekend selection
//    $scope.disabled = function (date, mode) {
//        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
//    };

//    $scope.toggleMin = function () {
//        $scope.minDate = $scope.minDate ? null : new Date();
//    };
//    $scope.toggleMin();

//    $scope.open = function ($event) {
//        $event.preventDefault();
//        $event.stopPropagation();

//        $scope.opened = true;
//    };

//    $scope.dateOptions = {
//        formatYear: 'yy',
//        startingDay: 1
//    };

//    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//    $scope.format = $scope.formats[0];

//    var tomorrow = new Date();
//    tomorrow.setDate(tomorrow.getDate() + 1);
//    var afterTomorrow = new Date();
//    afterTomorrow.setDate(tomorrow.getDate() + 2);
//    $scope.events =
//      [
//        {
//            date: tomorrow,
//            status: 'full'
//        },
//        {
//            date: afterTomorrow,
//            status: 'partially'
//        }
//      ];

//    $scope.getDayClass = function (date, mode) {
//        if (mode === 'day') {
//            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

//            for (var i = 0; i < $scope.events.length; i++) {
//                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

//                if (dayToCheck === currentDay) {
//                    return $scope.events[i].status;
//                }
//            }
//        }

//        return '';
//    };
//});


//angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
//angular.module('ui.bootstrap.demo').controller('TimepickerDemoCtrl', function ($scope, $log) {
//    $scope.mytime = new Date();

//    $scope.hstep = 1;
//    $scope.mstep = 15;

//    $scope.options = {
//        hstep: [1, 2, 3],
//        mstep: [1, 5, 10, 15, 25, 30]
//    };

//    $scope.ismeridian = true;
//    $scope.toggleMode = function () {
//        $scope.ismeridian = !$scope.ismeridian;
//    };

//    $scope.update = function () {
//        var d = new Date();
//        d.setHours(14);
//        d.setMinutes(0);
//        $scope.mytime = d;
//    };

//    $scope.changed = function () {
//        $log.log('Time changed to: ' + $scope.mytime);
//    };

//    $scope.clear = function () {
//        $scope.mytime = null;
//    };
//});


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
        //$log.log('Time changed to: ' + $scope.creategame.time);
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

    //ngDialog.open({
    //    template: '<div><div class="row"><div class="col-xs-12"><label>Game Created!</label></div></div></div>',
    //    plain: true
    //});

    //$scope.original = angular.copy($scope.creategame);

    //$scope.initialComparison = angular.equals($scope.creategame, $scope.original);
    //$scope.dataHasChanged = angular.copy($scope.initialComparison);

    //$scope.$watch('creategame', function (newValue, oldValue) {
    //    if (newValue != oldValue) {
    //        $scope.dataHasChanged = angular.equals($scope.creategame, $scope.original);
    //        _formDirty = true;
    //        $scope.creategameglyph = "glyphicon-plus";
    //        $('#createbutton').css('background-color', '#375a7f');
    //        $('#createbutton').css('border-color', '#375a7f');
    //    }
    //}, true);

    //$scope.$watchCollection('creategameform', function (newNames, oldNames) {
    //    var game = {}
    //    //game.sport = $scope.creategame.sportSelected.value;
    //    //game.dateTime = new Date($scope.creategame.date + " " + $scope.creategame.time + "+0").toISOString();
    //    //game.location = $scope.creategame.location;

    //    if (JSON.stringify(_lastgame) !== JSON.stringify(game)) {
    //        _formDirty = true;
    //        $scope.creategameglyph = "glyphicon-plus";
    //        $('#createbutton').css('background-color', '#375a7f');
    //        $('#createbutton').css('border-color', '#375a7f');
    //    }
    //});
    
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