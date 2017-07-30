

define([
    'angularAMD',
    'config',
    'angular-ui-router',
    'module/newNote/new.note.router'
], function (angularAMD, app) {
    'use strict';

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', angularAMD.route({
                url: '/home',
                templateUrl: 'module/home.html',
                controllerUrl: 'module/home.ctrl.js',
                controller: 'homeCtrl',
                controllerAs: 'ctrl'
            }));
    });

    return angularAMD.bootstrap(app);
});