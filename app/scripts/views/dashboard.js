/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/mobile-sales',
    'collections/funding',
    'collections/transactions',
    'collections/donut-sales',
    'collections/timeline',
    'collections/notifications',
    'views/dashboard/area-chart',
    'views/dashboard/bar-chart',
    'views/dashboard/notifications',
    'views/dashboard/donut-chart',
    'views/dashboard/timeline'
], function ($, _, Backbone, JST, MobileSales, Funding, Transactions, DonutSales, Timeline, Notifications, AreaChartView, BarChartView, NotificationsView, DonutChartView, TimelineView) {
    'use strict';

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard.ejs'],

        initialize: function () {
            this.mobileSales = new MobileSales();
            this.funding = new Funding();
            this.transactions = new Transactions();
            this.notifications = new Notifications();
            this.timeline = new Timeline();
            this.donutSales = new DonutSales();
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
                view: new TimelineView({collection: this.timeline}),
                selector: '#col-left'
            });
            this.addSubView({
                view: new NotificationsView({collection: this.notifications}),
                selector: '#col-right'
            });
            this.addSubView({
                view: new DonutChartView({collection: this.donutSales}),
                selector: '#col-right'
            });
            return this;
        },

        loadData: function() {
            this.mobileSales.fetch({reset: true});
            this.funding.fetch({reset: true});
            this.transactions.fetch({reset: true});
            this.notifications.fetch({reset: true});
            this.timeline.fetch({reset: true});
            this.donutSales.fetch({reset: true});
        }
    });

    return DashboardView;
});
