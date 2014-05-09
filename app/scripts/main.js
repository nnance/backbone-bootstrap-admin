/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        metisMenu: {
            deps: ['jquery']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        metisMenu: '../bower_components/metisMenu/jquery.metisMenu',
        viewManager: 'vendor/backbone.viewmanager'
    }
});

require([
    'jquery',
    'bootstrap',
    'backbone',
    'viewManager',
    'metisMenu',
    'views/app',
    'routes/app'
], function ($, bootstrap, Backbone, ViewManager, metisMenu, AppView, AppRouter) {
    $('#side-menu').metisMenu();

    var appView = new AppView();
    var appRouter = new AppRouter({container: appView.container});
    appView.render().loadData();
    Backbone.history.start();
});
