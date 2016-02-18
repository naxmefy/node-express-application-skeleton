#= require ./header.jst.jade
#= require ./content.jst.jade
#= require ./footer.jst.jade

#= require ./login.jst.jade
#= require ./forgot_password.jst.jade
#= require ./logout.jst.jade

angular.module 'admin.public.auth', []

.config [
    '$stateProvider'
    ($stateProvider) ->
        $stateProvider
        .state 'public.auth',
            url: ""
            abstract: true
            views:
                'header':
                    template: JST["modules/public/modules/auth/header"]
                'content':
                    template: JST["modules/public/modules/auth/content"]
                'footer':
                    template: JST["modules/public/modules/auth/footer"]

        .state 'public.auth.login',
            url: "/login"
            views:
                'auth.content':
                    template: JST["modules/public/modules/auth/login"]

        .state 'public.auth.forgot_password',
            url: "/forgot_password"
            views:
                'auth.content':
                    template: JST["modules/public/modules/auth/forgot_password"]

        .state 'public.auth.logout',
            url: "/logout"
            views:
                'auth.content':
                    template: JST["modules/public/modules/auth/logout"]

]
