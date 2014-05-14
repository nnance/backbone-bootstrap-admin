/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/mobile-sales',
    'collections/funding',
    'collections/transactions',
    'collections/notifications',
    'views/dashboard/area-chart',
    'views/dashboard/bar-chart',
    'views/dashboard/notifications'
], function ($, _, Backbone, JST, MobileSales, Funding, Transactions, Notifications, AreaChartView, BarChartView, NotificationsView) {
    'use strict';

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard.ejs'],

        initialize: function () {
            this.mobileSales = new MobileSales();
            this.funding = new Funding();
            this.transactions = new Transactions();
            this.notifications = new Notifications();
        },

        render: function () {
            this.$el.html(this.template(this));
            this.addSubView({
                view: new AreaChartView({collection: this.mobileSales}),
                selector: '#col-left'
            });
            this.addSubView({
                view: new BarChartView({
                    collection: this.funding,
                    transactions: this.transactions
                }),
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
            this.funding.fetch({reset: true});
            this.transactions.fetch({reset: true});
            this.notifications.fetch({reset: true});
        }
    });

    return DashboardView;
});
