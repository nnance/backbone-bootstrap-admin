/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/messages',
    'views/nav/messages'
], function ($, _, Backbone, Messages, NavMessages) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: 'body',

        initialize: function () {
            this.messages = new Messages();
            this.container = new Backbone.View({el: this.$('#page-wrapper')});
        },

        render: function () {
            this.addSubView({
                view: new NavMessages({collection: this.messages}),
                selector: '#nav-messages'
            });
            return this;
        },

        loadData: function() {
            this.messages.fetch({reset: true});
        }
    });

    return AppView;
});
