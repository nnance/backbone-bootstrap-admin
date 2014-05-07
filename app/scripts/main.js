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
    'routes/app',
    'views/nav/messages',
    'collections/messages'
], function (Backbone, $, bootstrap, metisMenu, AppRouter, NavMessages, Messages) {
    $('#side-menu').metisMenu();

    var messages = new Messages();

    var navMessages = new NavMessages({collection: messages});
    $('#nav-messages').append(navMessages.el);
    navMessages.render();

    messages.fetch({reset: true});

    var appRouter = new AppRouter();
    Backbone.history.start();
});
