#= require ./account.jst.jade

angular.module 'admin.app.account', []

.config [
    '$stateProvider'
    ($stateProvider) ->
        $stateProvider

        .state 'app.account',
            url: "/account"
            views:
                'content':
                    template: JST["modules/app/modules/account/account"]
]
