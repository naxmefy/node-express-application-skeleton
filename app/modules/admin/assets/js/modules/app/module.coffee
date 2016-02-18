#= require ./layout.jst.jade

#= require ./modules/dashboard/module
#= require ./modules/account/module

angular.module 'admin.app', [
    'admin.app.dashboard'
    'admin.app.account'
]

.config [
    '$stateProvider'
    ($stateProvider) ->
        $stateProvider
        .state 'app',
            url: ""
            abstract: true
            template: JST["modules/app/layout"]

]
