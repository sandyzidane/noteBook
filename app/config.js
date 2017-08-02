define([
    'angular',
    'angular-marked',
    'angular-highlight',
    'angular-markdown-editor'
], function (angular) {
    var app = angular.module('app', [
        'ui.router',
        'hc.marked',
        'hljs',
        'angular-markdown-editor'
    ]);
    return app;
});