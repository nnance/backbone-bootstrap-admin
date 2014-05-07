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
    'views/blank'
], function (Backbone, $, bootstrap, metisMenu, BlankView) {
    Backbone.history.start();
    var blank = new BlankView();
    $('#body').append(blank.el);
    blank.render();
    $('#side-menu').metisMenu();
});
