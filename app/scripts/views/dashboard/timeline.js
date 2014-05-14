/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/dashboard/timeline-item'
], function ($, _, Backbone, JST, TimelineItemView) {
    'use strict';

    var DashboardTimelineView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard/timeline.ejs'],

        tagName: 'div',

        className: 'panel panel-default',

        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'reset', this.updateTimeline);
        },

        render: function () {
            this.$el.html(this.template(this.model));
            return this;
        },

        updateTimeline: function() {
            this.removeSubViews();
            this.collection.forEach(function(item, index){
                this.addSubView({
                    view: new TimelineItemView({
                        model: item,
                        className: ((index+1) % 2 == 0) ? 'timeline-inverted' :''
                    }),
                    selector: 'ul'
                });
            }, this);
        }
    });

    return DashboardTimelineView;
});
