

define(['angularAMD', 'config'], function (angularAMD, app) {

    app.provider('newNoteRouter', function ($stateProvider) {
        this.$get = function () {
            var PATH = 'module/newNote/';
            return {
                setRouter: function () {
                    $stateProvider
                        .state('home.newNote', angularAMD.route({
                            url: 'newNote',
                            templateUrl: PATH + 'new.note.html',
                            controllerUrl: PATH + 'new.note.ctrl.js',
                            controllerAs: 'ctrl',
                            controller: 'new.note.ctrl'
                        }));
                }
            };
        }
    }).run(function (newNoteRouter) {
        newNoteRouter.setRouter();
    })
});