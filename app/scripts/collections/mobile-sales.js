/*global define*/

define([
    'underscore',
    'backbone',
    'models/mobile-sales'
], function (_, Backbone, MobileSalesModel) {
    'use strict';

    var MobileSalesCollection = Backbone.Collection.extend({
        url: 'scripts/data/mobile-sales.json',
        model: MobileSalesModel
    });

    return MobileSalesCollection;
});
