'use strict';

const debug = require('debug');

const log = debug("application:utils:debug");

module.exports = function(mainLoggerName) {
    var debugLogger = debug(mainLoggerName);
    debugLogger.childLogger = function(subLoggerName) {
        return module.exports(mainLoggerName+":"+subLoggerName);
    };

    log("Return Debug Logger");
    return debugLogger;
};
