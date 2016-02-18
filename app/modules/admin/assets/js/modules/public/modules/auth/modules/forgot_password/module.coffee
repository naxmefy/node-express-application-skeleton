#= require ./forgot_password.jst.jade

angular.module 'admin.public.auth.forgot_password', []

.config [
    '$stateProvider'
    ($stateProvider) ->
        $stateProvider
        .state 'public.auth.forgot_password',
            url: "/forgot_password"
            views:
                'auth.content':
                    template: JST["modules/public/modules/auth/modules/forgot_password/forgot_password"]
]
