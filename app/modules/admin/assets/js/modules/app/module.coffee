#= require ./modules/dashboard/module
#= require ./modules/account/module

#= require_self

#= require_tree ./templates
#= require_tree ./controllers

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
            template: JST["modules/app/templates/layout"]
            controller: 'LayoutController'

]
