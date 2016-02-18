#= require ./templates/layout.jst.jade

#= require ./modules/auth/module

angular.module 'admin.public', [
    'admin.public.auth'
]

.config [
    '$stateProvider'
    ($stateProvider) ->
        $stateProvider
        .state 'public',
            url: ""
            abstract: true
            template: JST["modules/public/templates/layout"]

]
