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
            this.listenTo(this.collection, 'reset', this.updateList);
        },

        render: function () {
            this.$el.html(this.template(this));
            return this;
        },

        updateList: function() {
            this.removeSubViews();
            if (this.collection && this.collection.length > 0) {
                this.collection.forEach(function(model){
                    this.addSubView({
                        view: new NotificationsItemView({model: model}),
                        selector: '#list-group'
                    });
                }, this);
            }
        }
    });

    return DashboardNotificationsView;
});
