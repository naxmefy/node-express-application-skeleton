#= require ./logout.jst.jade

angular.module 'admin.public.auth.logout', []

.config [
    '$stateProvider'
    ($stateProvider) ->
        $stateProvider

        .state 'public.auth.logout',
            url: "/logout"
            views:
                'auth.content':
                    template: JST["modules/public/modules/auth/modules/logout/logout"]

]
