/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NavMessagesItemView = Backbone.View.extend({
        template: JST['app/scripts/templates/nav/messages-item.ejs'],

        tagName: 'li',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            if (this.model) {
                this.listenTo(this.model, 'change', this.render);
            }
        },

        render: function () {
            this.$el.html(this.template(this));
            return this;
        }
    });

    return NavMessagesItemView;
});
