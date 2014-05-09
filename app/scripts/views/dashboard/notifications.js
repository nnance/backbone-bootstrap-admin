/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/dashboard/notifications-item'
], function ($, _, Backbone, JST, NotificationsItemView) {
    'use strict';

    var DashboardNotificationsView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard/notifications.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        manage: true,

        initialize: function () {
            if (this.collection) {
                this.listenTo(this.collection, 'reset', this.render);
                this.collection.fetch({reset: true});
            }
        },

        render: function () {
            this.$el.html(this.template(this));
            if (this.collection && this.collection.length > 0) {
                this.collection.forEach(function(model){
                    this.addSubView({
                        view: new NotificationsItemView({model: model}),
                        selector: '#list-group'
                    });
                }, this);
            }
            return this;
        }
    });

    return DashboardNotificationsView;
});
