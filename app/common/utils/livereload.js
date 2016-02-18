"use strict";

const _ = require('lodash');
const path = require('path');
const liveReload = require('livereload');

module.exports = function (application) {
    // Bind LiveReload Server
    application.liveReloadServer = liveReload.createServer(_.merge({}, application.config.livereload));

    // Load Watch Directories
    var watch = application.config.livereload.watch;
    application.utils.array.add(watch, application.get('views') + "/*");
    _.forEach(application.modules, function (module) {
        application.utils.array.add(watch, module.get('views'));
    });
    application.utils.array.add(watch, application.config.assets.paths, p => path.resolve(application.config.assets.root, p));
    application.log.info("LiveReload enabled.\nWatching:", watch);

    // Start Server
    application.liveReloadServer.watch(watch);

    // Override Debug Logger
    // const _debug = application.liveReloadServer.debug;
    application.liveReloadServer.debug = function (str) {
        if (this.config.debug) {
            application.log.info("LiveReload Server:", str);
        }
    };

    // Bind LRScript Middleware
    application.use((req, res, next) => {
        res.locals.LRScriptFile = application.config.livereload.script();
        res.locals.LRScriptTag = "<script src=\""+res.locals.LRScriptFile+"\"></'+'script>";
        res.locals.LRScript = "<script>document.write('"+res.locals.LRScriptTag+"')</script>";
        next();
    });
};
