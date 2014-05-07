/*global define*/

define([
    'underscore',
    'backbone',
    'models/messages'
], function (_, Backbone, MessagesModel) {
    'use strict';

    var MessagesCollection = Backbone.Collection.extend({
        url: 'scripts/data/messages.json',
        model: MessagesModel
    });

    return MessagesCollection;
});
