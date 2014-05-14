/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var DonutSalesCollection = Backbone.Collection.extend({
        url: 'scripts/data/donut-sales.json'
    });

    return DonutSalesCollection;
});
