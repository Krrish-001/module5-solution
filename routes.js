(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('signUp', {
            url: '/signUp',
            templateUrl: 'signup.html',
            controller: 'SignUpController as signupCtrl'
        });

        $stateProvider.state('myInfo', {
            url: '/myInfo',
            templateUrl: 'myInfo.html',
            controller: 'MyInfoController as myInfoCtrl'
        });
    }
})();
