/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NavTopLinksView = Backbone.View.extend({
        template: JST['app/scripts/templates/nav/top-links.ejs'],

        tagName: 'ul',

        id: '',

        className: 'nav navbar-top-links navbar-right',

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

    return NavTopLinksView;
});