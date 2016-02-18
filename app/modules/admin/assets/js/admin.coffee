#= require jquery/dist/jquery.js
#= require bootstrap/dist/js/bootstrap.js

#= require angular/angular.js
#= require angular-ui-router/release/angular-ui-router.js

#= require ./modules/public/module
#= require ./modules/app/module

angular.module 'admin', [
    'ui.router'

    'admin.public'
    'admin.app'
]

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
