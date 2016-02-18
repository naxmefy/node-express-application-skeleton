"use strict";

const path = require('path');
const express = require('express');

module.exports = function(parentApplication) {
    const application = express();

    // App Config ...
    //application.set('views', path.resolve(__dirname, "views"));

    // App Routes

    // Return App
    return application;
};
