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

        initialize: function(options) {
            this.container = options.container;
        },

        showDashboard: function() {
            this.container.setView(new DashboardView());
        },

        showBlank: function() {
            this.container.setView(new BlankView());
        },

        showLogin: function() {
            this.container.setView(new LoginView());
        }

    });

    return AppRouter;
});
