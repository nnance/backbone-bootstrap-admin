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
            var view = new BlankView().render();
            $('#body').empty().append(view.el);
        },

        showLoginView: function() {
            var view = new LoginView().render();
            $('#body').empty().append(view.el);
        }

    });

    return AppRouter;
});
