/*global define*/

define([
    'jquery',
    'backbone',
    'views/dashboard',
    'views/blank',
    'views/login'
], function ($, Backbone, DashboardView, BlankView, LoginView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showDashboard',
            'dashboard': 'showDashboard',
            'blank': 'showBlank',
            'login': 'showLogin'
        },

        showDashboard: function() {
            var view = new DashboardView();
            $('#page-wrapper').empty().append(view.render().el);
        },

        showBlank: function() {
            var view = new BlankView();
            $('#page-wrapper').empty().append(view.render().el);
        },

        showLogin: function() {
            var view = new LoginView();
            $('#page-wrapper').empty().append(view.render().el);
        }

    });

    return AppRouter;
});
