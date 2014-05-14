/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MessagesCollection = Backbone.Collection.extend({
        url: 'scripts/data/messages.json'
    });

    return MessagesCollection;
});
