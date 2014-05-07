/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BlankView = Backbone.View.extend({
        template: JST['app/scripts/templates/blank.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            if (this.model) {
                this.listenTo(this.model, 'change', this.render);
            }
        },

        render: function () {
            this.$el.html(this.template(this.model));
            return this;
        }
    });

    return BlankView;
});
