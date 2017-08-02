

define([
    'app',
    'bootstrap-markdown'
], function (app) {
    app.controller('new.note.ctrl', function($scope, marked) {
        var ctrl = this;
        $scope.$watch('noteContent', function(newValue) {
            if (undefined === newValue || null === newValue) {
                $scope.parsedContent = '';
            } else {
                $scope.parsedContent = marked(newValue);
            }
        })
    })
});