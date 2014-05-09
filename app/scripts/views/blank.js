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

        render: function () {
            this.$el.html(this.template(this));
            return this;
        }
    });

    return BlankView;
});
