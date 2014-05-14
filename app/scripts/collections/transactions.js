/*global define*/

define([
    'underscore',
    'backbone',
    'models/transactions'
], function (_, Backbone, TransactionsModel) {
    'use strict';

    var TransactionsCollection = Backbone.Collection.extend({
        url: 'scripts/data/transactions.json',
        model: TransactionsModel
    });

    return TransactionsCollection;
});
