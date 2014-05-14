/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'morris'
], function ($, _, Backbone, JST, morris) {
    'use strict';

    var DashboardDonutChartView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard/donut-chart.ejs'],

        tagName: 'div',

        className: 'panel panel-default',

        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'reset', this.updateChart);
        },

        render: function () {
            this.$el.html(this.template(this));
        },

        updateChart: function() {
            Morris.Donut({
                element: 'morris-donut-chart',
                data: this.collection.toJSON(),
                resize: true
            });
        }
    });

    return DashboardDonutChartView;
});
