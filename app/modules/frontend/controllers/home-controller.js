"use strict";

class HomeController {
    index(req, res) {
        console.log(req.app.parent.config.pkg.name);
        console.log(req.app.parent.config);
        res.render("index.jade");
    }
}

module.exports = new HomeController();
