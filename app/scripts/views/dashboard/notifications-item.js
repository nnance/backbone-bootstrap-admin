/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var DashboardNotificationsItemView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard/notifications-item.ejs'],

        tagName: 'a',

        id: '',

        className: 'list-group-item',

        events: {},

        manage: true,

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this));
            return this;
        },

        getCountAndName: function() {
            var result = this.model.get('qty') > 1 ? ' ' + this.model.get('qty') : '';
            return result + ' ' + this.model.get('name');
        },

        getIcon: function() {
            var icons = {
                'New Comment': 'fa-comment',
                'New Followers': 'fa-twitter',
                'Message Sent': 'fa-envelope',
                'New Task': 'fa-tasks',
                'Server Rebooted': 'fa-upload',
                'Server Crashed!': 'fa-bolt',
                'Server Not Responding': 'fa-warning',
                'New Order Placed': 'fa-shopping-cart',
                'Payment Received': 'fa-money'
            };
            return icons[this.model.get('name')];
        }
    });

    return DashboardNotificationsItemView;
});
