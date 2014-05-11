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

        events: {
            'click button': 'signIn'
        },

        initialize: function(options) {
            this.app = options.app;
        },

        render: function () {
            this.$el.html(this.template(this));
            return this;
        },

        signIn: function(event) {
            event.preventDefault();
            this.app.signIn();
        }
    });

    return LoginView;
});
