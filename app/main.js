

require.config({
    paths: {
        'angular': 'bower_components/angular/angular.min.js',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min.js',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'showDown': 'bower_components/showdown/compressed/Showdown.min.js',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize.min.js',
        'angular-markdown': 'bower_components/angular-markdown-directive/markdown',
        'angular-markdown-editor': 'bower_components/angular-markdown-editor-ghiscoding/src/angular-markdown-editor',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
        'bootstrap-markdown': 'bower_components/bootstrap-markdown/js/bootstrap-markdown.js',
        'marked': 'bower_components/marked/marked.min',
        'angular-marked': 'bower_components/angular-marked/dist/angular-marked.min',
        'hljs': 'bower_components/highlight.js.origin/src/highlight.js',
        'angular-highlight': 'bower_components/angular-highlightjs/angular-highlightjs.min',
        'jquery': 'bower_components/jquery/dist/jquery.min'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angularAMD': ['angular'],
        'angular-ui-router': ['angular'],
        // 'showDown': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-markdown': ['angular', 'angular-sanitize', 'showDown'],
        'angular-markdown-editor': [
            'angular-highlight',
            'angular-marked',
            'angular-sanitize',
            'bootstrap',
            'bootstrap-markdown',
            'hljs',
            'jquery',
            'marked'
        ],
        'bootstrap': ['jquery'],
        'bootstrap-markdown': ['bootstrap'],
        // 'marked': []
        'angular-marked': ['angular', 'marked'],
        // 'highlight': []
        'angular-highlight': ['angular']
        // 'jquery': []

    },
    deps: ['app'],
    waitSeconds: 25
});