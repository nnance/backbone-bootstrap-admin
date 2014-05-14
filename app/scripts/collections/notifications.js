/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var NotificationsCollection = Backbone.Collection.extend({
        url: 'scripts/data/notifications.json'
    });

    return NotificationsCollection;
});
