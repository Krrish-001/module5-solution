(function () {
    'use strict';

    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getMenuItem = function (shortName) {
            return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + shortName + '.json')
                .then(function (response) {
                    return response.data;
                });
        };
    }
})();
