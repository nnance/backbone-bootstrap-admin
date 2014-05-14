/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'morris',
    'views/dashboard/bar-chart-row'
], function ($, _, Backbone, JST, morris, BarChartRow) {
    'use strict';

    var DashboardBarChartView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard/bar-chart.ejs'],

        tagName: 'div',

        id: '',

        className: 'panel panel-default',

        events: {},

        initialize: function (options) {
            if (options && options.transactions) {
                this.transactions = options.transactions;
                this.listenTo(this.transactions, 'reset', this.updateTable);
            }
            this.listenTo(this.collection, 'reset', this.updateChart);
        },

        render: function () {
            this.$el.html(this.template(this));
            return this;
        },

        updateChart: function() {
            Morris.Bar({
              element: 'morris-bar-chart',
              data: this.collection.toJSON(),
              xkey: 'y',
              ykeys: ['a', 'b'],
              labels: ['Series A', 'Series B'],
              hideHover: 'auto',
              resize: true
            });
        },

        updateTable: function() {
          debugger;
            this.removeSubViews();
            this.transactions.forEach(function(transaction){
                this.addSubView({
                    view: new BarChartRow({model: transaction}),
                    selector: 'tbody'
                });
            }, this);
        }
    });

    return DashboardBarChartView;
});
