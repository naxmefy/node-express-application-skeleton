'use strict';

const log = require("debug")("application:utils:module");

exports.runIfNoParent = function (application, module) {
    if (!module.parent) {
        log("Running Application - no module parent available");
        application.server.listen(application.config.port, application.config.ip, function (err) {
            if (err) {
                application.log.error(err);
            } else {
                application.log.info("Application running on " + application.config.host());
            }
        });
    }
};
