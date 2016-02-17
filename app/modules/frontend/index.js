"use strict";

const path = require('path');
const _ = require('lodash');
const express = require('express');
const homeController = require('./controllers/home-controller');

module.exports = function(application) {
    const frontend = express();

    // App Config ...
    frontend.set('views', path.resolve(__dirname, "views"));
    frontend.set('view engine', 'jade');

    // App Routes
    frontend.get("/", homeController.index);

    // Return App
    return frontend;
};
