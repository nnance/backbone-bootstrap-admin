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
        metisMenu: '../bower_components/metisMenu/jquery.metisMenu'
    }
});

require([
    'backbone',
    'jquery',
    'bootstrap',
    'metisMenu',
    'routes/app'
], function (Backbone, $, bootstrap, metisMenu, AppRouter) {
    $('#side-menu').metisMenu();

    var appRouter = new AppRouter();
    Backbone.history.start();
});
