(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuDataService', 'UserInfoService'];
    function SignUpController(MenuDataService, UserInfoService) {
        var signupCtrl = this;

        signupCtrl.submitForm = function () {
            var favoriteDish = signupCtrl.favoriteDish.trim().toUpperCase();
            MenuDataService.getMenuItem(favoriteDish).then(function (menuItem) {
                if (menuItem) {
                    // Save user information
                    UserInfoService.saveUserInfo({
                        firstName: signupCtrl.firstName,
                        lastName: signupCtrl.lastName,
                        email: signupCtrl.email,
                        phone: signupCtrl.phone,
                        favoriteDish: favoriteDish,
                        menuItem: menuItem
                    });
                    signupCtrl.isSaved = true;
                } else {
                    signupCtrl.dishError = true;
                }
            });
        };

        signupCtrl.checkDish = function () {
            var favoriteDish = signupCtrl.favoriteDish.trim().toUpperCase();
            MenuDataService.getMenuItem(favoriteDish).then(function (menuItem) {
                signupCtrl.dishError = !menuItem;
            });
        };
    }
})();
