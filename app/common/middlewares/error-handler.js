"use strict";

exports.notFound = (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
};

exports.error = (error, req, res, next) => {
    req.app.log.error(error);
    res.status(error.status || 500);
    res.render("error", {
        error: error
    });
};
