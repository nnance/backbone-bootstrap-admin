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
            'signout': 'signout'
        },

        initialize: function(options) {
            this.app = options.app;
        },

        showDashboard: function() {
            this.app.container.setView(new DashboardView());
        },

        showBlank: function() {
            this.app.container.setView(new BlankView());
        },

        signout: function() {
            this.app.signOut();
        }

    });

    return AppRouter;
});
