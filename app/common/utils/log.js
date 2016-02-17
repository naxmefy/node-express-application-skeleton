'use strict';

const _ = require('lodash');
const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');

const log = require("debug")("application:utils:log");


const defaultBunyanOpts = {
    name: 'middleware',
    level: 'debug'
};

exports.getBunyanLogger = function (opts) {
    if (_.isUndefined(opts)) {
        opts = {};
    }
    //Pretty print bunyan console output
    const stream = new PrettyStream();
    stream.pipe(process.stdout);
    defaultBunyanOpts.stream = stream;

    log("Return new bunyan logger");
    return bunyan.createLogger(_.merge(defaultBunyanOpts, opts));
};
