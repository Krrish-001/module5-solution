(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserInfoService'];
    function MyInfoController(UserInfoService) {
        var myInfoCtrl = this;
        myInfoCtrl.userInfo = UserInfoService.getUserInfo();

        if (!myInfoCtrl.userInfo) {
            myInfoCtrl.message = "Not Signed Up Yet. <a href='#/signUp'>Sign up Now!</a>";
        }
    }
})();
