/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/mobile-sales',
    'collections/notifications',
    'views/dashboard/area-chart',
    'views/dashboard/notifications'
], function ($, _, Backbone, JST, MobileSales, Notifications, AreaChartView, NotificationsView) {
    'use strict';

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard.ejs'],

        initialize: function () {
            this.mobileSales = new MobileSales();
            this.notifications = new Notifications();
        },

        render: function () {
            this.$el.html(this.template(this));
            this.addSubView({
                view: new AreaChartView({collection: this.mobileSales}),
                selector: '#col-left'
            });
            this.addSubView({
                view: new NotificationsView({collection: this.notifications}),
                selector: '#col-right'
            });
            return this;
        },

        loadData: function() {
            this.mobileSales.fetch({reset: true});
            this.notifications.fetch({reset: true});
        }
    });

    return DashboardView;
});
