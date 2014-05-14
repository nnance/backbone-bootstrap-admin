/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var DashboardBarChartRowView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard/bar-chart-row.ejs'],

        tagName: 'tr',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this));
            return this;
        }
    });

    return DashboardBarChartRowView;
});
