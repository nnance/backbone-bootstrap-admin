/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TimelineCollection = Backbone.Collection.extend({
        url: 'scripts/data/timeline.json'
    });

    return TimelineCollection;
});
