/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LoginView = Backbone.View.extend({
        template: JST['app/scripts/templates/login.ejs'],

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
            this.$el.html(this.template(this));
            return this;
        }
    });

    return LoginView;
});
