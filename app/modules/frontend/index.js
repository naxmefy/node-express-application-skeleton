"use strict";

const path = require('path');
const express = require('express');
const homeController = require('./controllers/home-controller');

module.exports = function(parentApplication) {
    const application = express();

    // App Config ...
    application.set('views', path.resolve(__dirname, "views"));

    // App Routes
    application.get("/", homeController.index);

    // Return App
    return application;
};
