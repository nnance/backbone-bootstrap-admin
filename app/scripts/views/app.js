/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/messages',
    'views/login',
    'views/nav'
], function ($, _, Backbone, Messages, LoginView, NavView) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#wrapper',

        initialize: function () {
            this.messages = new Messages();
            this.navigation = new NavView({app: this});
            this.container = new Backbone.View({id: 'page-wrapper'});
        },

        start: function() {
            $.when(this.messages.fetch({reset: true}))
            .done(function() {
                this.showLogin();
                // Backbone.history.start();
            }.bind(this));
        },

        showPageWrapper: function() {
            this.navigation.showMenu();
            this.addSubView({view: this.container});
        },

        showLogin: function() {
            this.navigation.hideMenu();
            this.removeSubViews();
            this.setView(new LoginView({app: this}));
        },

        signIn: function(email, password) {
            this.removeSubViews();
            this.showPageWrapper();
            if (!Backbone.History.started)
                Backbone.history.start();
        },
    });

    return AppView;
});
