#= require ./templates/header.jst.jade
#= require ./templates/content.jst.jade
#= require ./templates/footer.jst.jade

#= require ./modules/forgot_password/module
#= require ./modules/login/module
#= require ./modules/logout/module

angular.module 'admin.public.auth', [
    'admin.public.auth.forgot_password'
    'admin.public.auth.login'
    'admin.public.auth.logout'
]

.config [
    '$stateProvider'
    ($stateProvider) ->
        $stateProvider
        .state 'public.auth',
            url: ""
            abstract: true
            views:
                'header':
                    template: JST["modules/public/modules/auth/templates/header"]
                'content':
                    template: JST["modules/public/modules/auth/templates/content"]
                'footer':
                    template: JST["modules/public/modules/auth/templates/footer"]

]
