"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString
        .split('/') // ['28', '10', '2018']
        .map(function (value) { return parseInt(value); }); // [28, 10, 2018]
    // year, month - 1, day
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
