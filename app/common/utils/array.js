"use strict";

const _ = require('lodash');

exports.add = (target, item, transform) => {
    if (_.isUndefined(transform)) {
        transform = x => x;
    }
    if (_.isArray(item)) {
        item.forEach(p => target.push(transform(p)))
    } else {
        target.push(transform(item));
    }
};
