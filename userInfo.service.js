(function () {
    'use strict';

    angular.module('MenuApp')
        .service('UserInfoService', UserInfoService);

    function UserInfoService() {
        var userInfo = null;

        this.saveUserInfo = function (user) {
            userInfo = user;
        };

        this.getUserInfo = function () {
            return userInfo;
        };
    }
})();
