angular.module 'admin.app'
.controller 'LayoutController', [
    '$scope'
    'locale'
    'localeSupported'
    'localeEvents'

    ($scope, locale, localeSupported, localeEvents) ->
        $scope.supportedLangs = localeSupported
        $scope.localeData =
            'en-US':
                flagClass: 'flag-us'
                langDisplayText: 'English'

            'de-DE':
                flagClass: 'flag-de'
                langDisplayText: 'Deutsch'

        $scope.setLocale = (loc) -> locale.setLocale loc

        locale.ready('common').then ->
            $scope.flagClass = $scope.localeData[locale.getLocale()].flagClass
            $scope.langDisplayText = $scope.localeData[locale.getLocale()].langDisplayText

        $scope.$on localeEvents.localeChanges,  (event, data) ->
            $scope.flagClass = $scope.localeData[data].flagClass
            $scope.langDisplayText = $scope.localeData[data].langDisplayText
]
