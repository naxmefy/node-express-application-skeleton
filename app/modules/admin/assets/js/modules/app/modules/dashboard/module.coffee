#= require ./dashboard.jst.jade

angular.module 'admin.app.dashboard', []

.config [
    '$stateProvider'
    ($stateProvider) ->
        $stateProvider

        .state 'app.dashboard',
            url: "/"
            views:
                'content':
                    template: JST["modules/app/modules/dashboard/dashboard"]
]
