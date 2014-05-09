/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/notifications',
    'views/dashboard/notifications'
], function ($, _, Backbone, JST, Notifications, NotificationsView) {
    'use strict';

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard.ejs'],

        initialize: function () {
            this.notifications = new Notifications();
        },

        render: function () {
            this.$el.html(this.template(this));
            this.addSubView({
                view: new NotificationsView({collection: this.notifications}),
                selector: '#col-right'
            });
            return this;
        }
    });

    return DashboardView;
});
