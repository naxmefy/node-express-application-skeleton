"use strict";

const path = require('path');
const format = require('util').format;

const pkg = require('../package.json');

module.exports = {
    pkg: pkg,
    ip: process.env.IP || '',
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',

    host: function () {
        if (this.ip.length > 0) {
            return format('%s:%s', this.ip, this.port);
        }
        return format('port %s', this.port);
    },

    mongo: {
        uri: process.env.MONGOLAB_URI || 'mongodb://localhost/' + pkg.name,
        options: {
            server: {
                poolSize: 5,
                auto_reconnect: true
            }
        }
    },

    session: {
        name: 'application.sid',
        secret: process.env.SESSION_SECRET || 'application.session.secret',
        resave: true, // TODO check for problems in future
        saveUninitialized: true,
        cookie: {
            maxAge: 3600000, // new Date Date.now() + 3600000 // 1 Hour
            expires: Date.now() + 3600000 // 1 Hour
        }
    },

    mail: {
        info: {
            transport: 'smtp',
            host: process.env.INFO_MAIL_HOST,
            port: process.env.INFO_MAIL_PORT,
            user: process.env.INFO_MAIL_USER,
            pass: process.env.INFO_MAIL_PASS
        }
    },

    log: {
        name: 'application',
        level: process.env.LOG_LEVEL || 'info'
    },

    modules: {
        frontend: {
            mountPath: "/",
            appPath: path.resolve(__dirname, "modules", "frontend")
        }
    },

    livereload: {
        script: function() {
            return `http://${this.ip}:${this.port}/livereload.js`;
            //http://' + (application.config.ip) || 'localhost').split(':')[0] + ':" + (application.config.port || 35729) + "/livereload.js
        },
        ip: process.env.LIVERELOAD_IP || 'localhost',
        port: process.env.LIVERELOAD_PORT || 35729,
        watch: [
            // views and assets paths are automatically merged later
        ],
        exts: [
            'js',
            'coffee',
            'json',
            'html',
            'jade',
            'ejs',
            'css',
            'styl',
            'less',
            'png',
            'gif',
            'jpg',
            'svg',
            'ico',
            'eof',
            'ttf',
            'woff',
            'woff2'
        ]
    },

    assets: {
        root: __dirname,
        production: process.env.NODE_ENV === 'production',
        mountPoint: '/assets',
        manifestFile: __dirname + "/public/assets/manifest.json",
        paths: [
            'common/assets/css',
            'common/assets/vendor'
        ]
    },

    precompile: {
        target: path.resolve(__dirname, "public", "assets"),
        files: [
            // Your targeted ASSETS which required the whole rest like bootstrap etc.
            "error.css",

            // IMAGES AND FONTS
            '*.eot',
            '*.svg',
            '*.ttf',
            '*.woff',
            '*.woff2',
            '*.png',
            '*.gif',
            '*.jpg',
            '*.ico',
            '**/*.eot',
            '**/*.svg',
            '**/*.ttf',
            '**/*.woff',
            '**/*.woff2',
            '**/*.png',
            '**/*.gif',
            '**/*.jpg',
            '**/*.ico'
        ]
    },

    i18n: {
        // setup some locales - other locales default to en silently
        locales: ['en', 'de'],

        // fall backs from x to y
        fallbacks: {
            'de': 'en'
        },

        // you may alter a site wide default locale
        defaultLocale: 'en',

        // sets a custom cookie name to parse locale settings from - defaults to NULL
        cookie: 'lang',

        // query parameter to switch locale (ie. /home?lang=ch) - defaults to NULL
        queryParameter: 'lang',

        // where to store json files - defaults to './locales' relative to modules directory
        directory: path.resolve(__dirname, "common", "locales"),

        // controll mode on directory creation - defaults to NULL which defaults to umask of process user. Setting has no effect on win.
        directoryPermissions: '755',

        // watch for changes in json files to reload locale on updates - defaults to false
        autoReload: process.env.NODE_ENV !== 'production',

        // whether to write new locale information to disk - defaults to true
        updateFiles: process.env.NODE_ENV !== 'production',

        // what to use as the indentation unit - defaults to "\t"
        //indent: "\t",

        // setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
        //extension: '.js',

        // setting prefix of json files name - default to none '' (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
        //prefix: 'webapp-',

        // enable object notation
        objectNotation: true

        // setting of log level DEBUG - default to require('debug')('i18n:debug')
        //logDebugFn: function (msg) {
        //    console.log('debug', msg);
        //},

        // setting of log level WARN - default to require('debug')('i18n:warn')
        //logWarnFn: function (msg) {
        //    console.log('warn', msg);
        //},

        // setting of log level ERROR - default to require('debug')('i18n:error')
        //logErrorFn: function (msg) {
        //    console.log('error', msg);
        //}

        // object or [obj1, obj2] to bind the i18n api and current locale to - defaults to null
        //register: global
    }
};
