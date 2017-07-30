define([
    'angular',
    'angular-markdown',
    'angular-marked',
    'angular-highlight',
    'angular-markdown-editor'
], function (angular) {
    var app = angular.module('app', [
        'ui.router',
        'btford.markdown',
        'hc.marked',
        'hljs',
        'angular-markdown-editor'
    ]);
    return app;
});