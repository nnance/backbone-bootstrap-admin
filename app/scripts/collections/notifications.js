/*global define*/

define([
    'underscore',
    'backbone',
    'models/notifications'
], function (_, Backbone, NotificationsModel) {
    'use strict';

    var NotificationsCollection = Backbone.Collection.extend({
        url: 'scripts/data/notifications.json',
        model: NotificationsModel
    });

    return NotificationsCollection;
});
