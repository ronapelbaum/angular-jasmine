/**
 * Created by apelbaur on 3/3/2016.
 */
(function (angular) {
    'use strict';

    function MyDataService() {
        this.getName = function() {
            return 'bob';
        }
    }
    angular.module('lesson2').service('MyDataService', MyDataService);
})(angular);
