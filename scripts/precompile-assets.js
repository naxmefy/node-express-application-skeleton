"use strict";

console.log("start precompile assets");
const Mincer = require('mincer');
const config = require('../app/config.js'); // the assets config

console.log("setup precompile env");
const env = new Mincer.Environment(config.assets.root); // Environment with defined root path

// add all your asset paths
for(var i = 0; i < config.assets.paths.length; i++) {
    console.log("load asset path:", config.assets.paths[i]);
    env.appendPath(config.assets.paths[i]);
}

console.log("register helper: asset_path");
// Register an Helper for using inside Assets
env.registerHelper('asset_path', function(name, opts) {
    var assetPath = null;
    const asset = env.findAsset(name, opts);
    if (!asset) throw new Error("File [" + name + "] not found");
    if (config.assets.production) {
        assetPath = '/assets/' + asset.digestPath;
    } else {
        assetPath = '/assets/' + asset.logicalPath;
    }
    return assetPath;
});

console.log("setup precompile manifest");
const manifest = new Mincer.Manifest(env, config.precompile.target);
console.log("precompile files:\n", config.precompile.files);
manifest.compile(config.precompile.files, function(err, data) {
    if(err) {
        console.error(err);
    } else {
        console.info('Finished precompile:');
        console.dir(data);
    }
});

