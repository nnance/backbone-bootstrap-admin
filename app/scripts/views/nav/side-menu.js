/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'metisMenu'
], function ($, _, Backbone, JST, metisMenu) {
    'use strict';

    var SideMenuView = Backbone.View.extend({
        template: JST['app/scripts/templates/nav/side-menu.ejs'],

        tagName: 'div',

        id: '',

        className: 'navbar-default navbar-static-side',

        attributes: {
            role: 'navigation'
        },

        events: {
            'click #nav-login': 'showLogin'
        },

        initialize: function (options) {
            if (options && options.app) {
                this.app = options.app;
            }
        },

        render: function () {
            this.$el.html(this.template(this.model));
            this.$('#side-menu').metisMenu();
            return this;
        },

        showLogin: function(event) {
            event.preventDefault();
            this.app.showLogin();
        }
    });

    return SideMenuView;
});
