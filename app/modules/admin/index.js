"use strict";

const path = require('path');
const express = require('express');

module.exports = function(parentApplication) {
    const application = express();

    // App Config ...
    application.set('views', path.resolve(__dirname, "views"));
    application.set('view engine', 'ejs');

    application.use(express.static(path.resolve(__dirname, "public"), {
        redirect: true
    }));

    // App Routes
    application.use("/*", function(req, res, next) {
        res.render('index');
    });

    // Return App
    return application;
};
