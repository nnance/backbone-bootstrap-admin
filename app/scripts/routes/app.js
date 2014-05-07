/*global define*/

define([
    'jquery',
    'backbone',
    'views/blank',
    'views/login'
], function ($, Backbone, BlankView, LoginView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'blank': 'showBlankView',
            'login': 'showLoginView'
        },

        showBlankView: function() {
            var view = new BlankView();
            $('#body').empty().append(view.el);
            view.render();
        },

        showLoginView: function() {
            var view = new LoginView();
            $('#body').empty().append(view.el);
            view.render();
        }

    });

    return AppRouter;
});
