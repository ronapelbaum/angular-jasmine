(function (angular) {
    'use strict';

    function upperCaseDirective() {
        return {
            template: '<div>{{text}}</div>',
            link: function (scope, elem, attrs) {
                scope.text = attrs.text.toUpperCase();
            }
        };
    }

    angular.module('lesson3').directive('upperCase', [upperCaseDirective]);
})(angular);
