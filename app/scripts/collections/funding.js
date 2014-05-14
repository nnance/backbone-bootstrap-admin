/*global define*/

define([
    'underscore',
    'backbone',
    'models/funding'
], function (_, Backbone, FundingModel) {
    'use strict';

    var FundingCollection = Backbone.Collection.extend({
        url: 'scripts/data/funding.json',
        model: FundingModel
    });

    return FundingCollection;
});
