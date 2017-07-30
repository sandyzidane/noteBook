

define(['app'], function (app) {
    app.controller('homeCtrl', ['$scope', function ($scope) {

        var ctrl = this;

        ctrl.msg = 'Hello Controller';
        $scope.projectName = "sandyNoteBook";

    }]);
});