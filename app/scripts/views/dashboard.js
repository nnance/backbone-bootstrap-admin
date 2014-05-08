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

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.notifications = new Notifications();
        },

        render: function () {
            this.$el.html(this.template(this.model));
            var notificationsView = new NotificationsView({collection: this.notifications});
            this.$('#col-right').append(notificationsView.render().el);
            return this;
        }
    });

    return DashboardView;
});
