(function (angular) {
    'use strict';

    function upperCaseDirective() {
        return {
            template: '<div>{{text}}</div>',
            link: function (scope, elem, attrs) {
                scope.text = scope.text.toUpperCase();
            }
        };
    }

    angular.module('directive_test').directive('upperCaseScope', [upperCaseDirective]);
})(angular);
