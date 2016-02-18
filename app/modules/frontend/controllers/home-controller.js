"use strict";

class HomeController {
    index(req, res) {
        res.render("index.jade");
    }
}

module.exports = new HomeController();
