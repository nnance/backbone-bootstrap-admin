/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'backbone',
    'jquery',
    'views/blank'
], function (Backbone, $, BlankView) {
    Backbone.history.start();
    var blank = new BlankView();
    $('#body').append(blank.el);
    blank.render();
});
