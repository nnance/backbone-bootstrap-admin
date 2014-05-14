/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'morris'
], function ($, _, Backbone, JST, morris) {
    'use strict';

    var DashboardAreaChartView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard/area-chart.ejs'],

        tagName: 'div',

        id: '',

        className: 'panel panel-default',

        events: {},

        initialize: function() {
            this.listenTo(this.collection, 'reset', this.updateChart);
        },

        render: function () {
            this.$el.html(this.template(this));
            return this;
        },

        updateChart: function() {
            Morris.Area({
                element: 'morris-area-chart',
                data: this.collection.toJSON(),
                xkey: 'period',
                ykeys: ['iphone', 'ipad', 'itouch'],
                labels: ['iPhone', 'iPad', 'iPod Touch'],
                pointSize: 2,
                hideHover: 'auto',
                resize: true
            });
        }
    });

    return DashboardAreaChartView;
});
