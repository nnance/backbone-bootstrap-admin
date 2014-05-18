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

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
    });

    return NavMessagesItemView;
});
