#= require jquery/dist/jquery.js
#= require bootstrap/dist/js/bootstrap.js

#= require angular/angular.js
#= require angular-cookies/angular-cookies.js
#= require angular-resource/angular-resource.js
#= require angular-sanitize/angular-sanitize.js

#= require angular-ui-router/release/angular-ui-router.js

#= require angular-i18n/angular-locale_en.js
#= require angular-i18n/angular-locale_en-us.js
#= require angular-i18n/angular-locale_de.js
#= require angular-i18n/angular-locale_de-de.js
#= require angular-localization/angular-localization.js
#= require ngstorage/ngStorage.js

#= require ./modules/public/module
#= require ./modules/app/module

angular.module 'admin', [
    'ngResource'
    'ui.router'

    'ngLocalize'
    'ngLocalize.Config'

    'admin.public'
    'admin.app'
]

.value 'localeConf',
    basePath: 'languages'
    defaultLocale: 'en-US'
    sharedDictionary: 'common'
    fileExtension: '.json'
    persistSelection: true,
    cookieName: 'COOKIE_LOCALE_LANG'
    observableAttrs: new RegExp('^data-(?!ng-|i18n)')
    delimiter: '::'


.value 'localeSupported', [
    'en-US'
    'de-DE'
]
.value 'localeFallbacks',
    'en': 'en-US'
    'de': 'de-DE'

.config [
    '$locationProvider'
    ($locationProvider) ->
        $locationProvider.hashPrefix "!"
        $locationProvider.html5Mode
            enabled: true
            requireBase: true
]

.config [
    '$urlRouterProvider'
    ($urlRouterProvider) ->
        $urlRouterProvider.otherwise '/'
]
