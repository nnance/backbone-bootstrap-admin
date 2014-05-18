/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/nav/messages-item'
], function ($, _, Backbone, JST, MessagesItemView) {
    'use strict';

    var NavMessagesView = Backbone.View.extend({
        template: JST['app/scripts/templates/nav/messages.ejs'],
        dividerTemplate: JST['app/scripts/templates/nav/menu-divider.ejs'],

        tagName: 'ul',

        id: '',

        className: 'dropdown-menu dropdown-messages',

        events: {},

        initialize: function () {
            if (this.collection) {
                this.listenTo(this.collection, 'reset', this.render);
            }
        },

        onRender: function () {
            if (this.collection && this.collection.length > 0) {
                var lastItem = this.$('#all-messages');
                this.collection.forEach(function(model) {
                    this.addSubView({
                        view: new MessagesItemView({model: model}),
                        selector: lastItem,
                        location: 'before'
                    });
                    lastItem.before(this.dividerTemplate());
                }, this);
            }
        }
    });

    return NavMessagesView;
});
