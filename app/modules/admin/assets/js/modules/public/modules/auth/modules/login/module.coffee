#= require ./login.jst.jade

angular.module 'admin.public.auth.login', []

.config [
    '$stateProvider'
    ($stateProvider) ->
        $stateProvider

        .state 'public.auth.login',
            url: "/login"
            views:
                'auth.content':
                    template: JST["modules/public/modules/auth/modules/login/login"]

]
