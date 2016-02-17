"use strict";

const mongoose = require('mongoose');

module.exports = function (application, done) {

    application.db = mongoose.connection;

    application.models = require('./common/models')(application);

    application.db.on('error', function (err) {
        application.log.error(err);
    });
    application.db.on('connected', function() {
        application.log.info('MongoDB connected!');
    });
    application.db.once('open', function() {
        application.log.info('MongoDB connection opened!');
    });
    application.db.on('reconnected', function () {
        application.log.info('MongoDB reconnected!');
    });
    application.db.on('disconnected', function() {
        application.log.info('MongoDB disconnected!');

    });

    mongoose.connect(application.config.mongo.uri, application.config.mongo.options, done);
};

// Close the Mongoose connection, when receiving SIGINT
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Force to close the MongoDB conection');
        process.exit(0);
    });
});
