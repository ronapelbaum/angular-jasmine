/**
 * Created by apelbaur on 3/3/2016.
 */
(function (angular) {
    'use strict';

    function MyService() {
        this.greet = function(name) {
            return 'hello ' + name;
        }
    }
    angular.module('service_test').service('MyService', MyService);
})(angular);
