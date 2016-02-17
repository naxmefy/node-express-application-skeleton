"use strict";

const path = require('path');

const _ = require('lodash');
const express = require('express');
const i18n = require('i18n');
const morgan = require('morgan');
const serveFavicon = require('serve-favicon');
const ConnectMincer = require('connect-mincer');
const liveReload = require('livereload');

const sockets = require('./sockets');
const errorHandler = require('./common/middlewares/error-handler');

module.exports = function (application) {
    // we load express middlewares which should use
    // over whole application - like asset pipeline
    application.set('views', path.resolve(__dirname, "common", "views"));
    application.set('view engine', 'jade');
    application.engine('jade', require('jade').__express);
    application.engine('html', require('ejs').__express);
    application.engine('ejs', require('ejs').__express);

    application.use(serveFavicon(path.resolve(__dirname, "public", "favicon.ico")));

    const assetPipeline = new ConnectMincer(application.config.assets);
    application.use(assetPipeline.assets());
    if (application.config.production === false) {
        application.use(application.config.assets.mountPoint, assetPipeline.createServer());
    }
    application.use(express.static(path.resolve(__dirname, "public"), {
        redirect: false
    }));

    application.use(i18n.init);
    application.use(morgan('dev'));

    // application only locals
    // application.locals.foo = "bar";

    // res wide locals (will also put to modules - res.locals)
    application.use((req, res, next) => {
        res.locals.config = application.config;

        next();
    });

    // load modules
    application.modules = {};
    _.forEach(application.config.modules, function (module, key) {
        application.log.info("Load Module:", key);
        application.modules[key] = require(module.appPath)(application);
        application.use(module.mountPath, application.modules[key]);
    });

    // sockets
    sockets(application);

    // error handler
    application.use(errorHandler.notFound);
    application.use(errorHandler.error);

    // Development Config
    if (application.config.development) {
        application.liveReloadServer = liveReload.createServer(_.merge({}, application.config.livereload));
        var watch = application.config.livereload.watch;
        application.utils.array.add(watch, application.get('views'));
        _.forEach(application.modules, function(module) {
            application.utils.array.add(watch, module.get('views'));
        });
        application.utils.array.add(watch, application.config.assets.paths, p => path.resolve(application.config.assets.root, p));
        application.log.info("LiveReload enabled.\nWatching:", watch);
        application.liveReloadServer.watch(watch);

        application.locals.LRScript = `<script>document.write("<script src='${application.config.livereload.script()}'></script>")</script>`
    }
};
