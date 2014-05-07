/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/nav/messages-item',
    'views/nav/messages-all-item'
], function ($, _, Backbone, JST, MessagesItemView, MessagesAllItemView) {
    'use strict';

    var NavMessagesView = Backbone.View.extend({
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

        render: function () {
            if (this.collection && this.collection.length > 0) {
                this.collection.forEach(function(model){
                    var view = new MessagesItemView({model: model}).render();
                    this.$el.append(view.el);
                    this.$el.append(this.dividerTemplate());
                }, this);
                this.$el.append(new MessagesAllItemView().render().el);
            }
            return this;
        }
    });

    return NavMessagesView;
});
