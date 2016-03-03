/**
 * Created by apelbaur on 3/3/2016.
 */
(function (angular) {
    'use strict';

    function MyController(MyDataService) {
        this.greet = function(){
            return 'hello ' + MyDataService.getName();
        };
    }

    angular.module('lesson2').controller('MyController', ['MyDataService', MyController]);
})(angular);
