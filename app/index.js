"use strict";

const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');
const i18n = require('i18n');

const _ = require('lodash');
const async = require('async');

const utils = require('./common/utils');
const config = require('./config');
const middlewares = require('./middlewares');
const mongo = require('./mongo');

const application = module.exports = express();
application.server = http.createServer(application);
application.io = socketio(application.server);

application.start = function (customConfig, done) {
    if (customConfig == null) {
        customConfig = {};
    }

    if (done == null) {
        done = (err) => {
            if (err) {
                throw err;
            } else {
                application.log.info(`Server running on ${application.config.host()}`);
            }
        }
    }

    // bind items
    application.config = _.merge(config, customConfig);
    application.utils = utils;

    // set env state
    application.config.test = application.config.env === 'test';
    application.config.development = true; //application.config.env === 'development';
    application.config.production = application.config.env === 'production';

    // Log
    application.debug = application.utils.debug(application.config.pkg.name);
    application.log = application.utils.log.getBunyanLogger(application.config.log);

    // i18n
    i18n.configure(application.config.i18n);

    // Start Mongo and Server
    async.series([
        function (next) {
            mongo(application, next);
        },
        function (next) {
            middlewares(application);
            application.server.listen(application.config.port, application.config.ip, next);
        }
    ], done);
};

if (!module.parent) {
    application.start();
}
