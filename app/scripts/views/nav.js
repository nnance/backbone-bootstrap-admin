/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/nav/side-menu',
    'views/nav/top-links',
    'views/nav/messages'
], function ($, _, Backbone, SideMenuView, TopLinksView, NavMessages) {
    'use strict';

    var NavView = Backbone.View.extend({
        el: 'nav',

        initialize: function(options) {
            this.app = options.app;
        },

        showMenu: function() {
            this.addSubView({view: new TopLinksView()});
            this.addSubView({view: new SideMenuView({app: this.app})});
            this.addSubView({
                view: new NavMessages({collection: this.messages}),
                selector: '#nav-messages'
            });
            return this;
        },

        hideMenu: function() {
            this.removeSubViews();
        }
    });

    return NavView;
});
