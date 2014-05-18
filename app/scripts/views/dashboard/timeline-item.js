/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var DashboardTimelineItemView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard/timeline-item.ejs'],
        actionTemplate: JST['app/scripts/templates/dashboard/timeline-item-action.ejs'],
        badgeTemplate: JST['app/scripts/templates/dashboard/timeline-item-badge.ejs'],
        whenTemplate: JST['app/scripts/templates/dashboard/timeline-item-when.ejs'],

        tagName: 'li',

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        onRender: function () {
            if (this.model.get('status') || this.model.get('type'))
                this.$el.prepend(this.badgeTemplate(this));

            if (this.model.get('when')) {
                this.$('.timeline-heading').append(this.whenTemplate(this));
            }

            if (this.model.get('type') === 'save') {
                this.$('.timeline-panel').append(this.actionTemplate(this));
            }
        }
    });

    return DashboardTimelineItemView;
});
