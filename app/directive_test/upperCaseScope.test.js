describe('upperCaseScope directive test suite', function () {
    var element, scope;
    beforeEach(module('directive_test'));

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        scope.text = 'Hello World';
        element = angular.element("<div upper-case-scope text='text'></div>");
        $compile(element)(scope);
        scope.$apply();
    }));

    it("be uppercase", function() {
        expect(element.html()).toContain("HELLO WORLD");
    });
});