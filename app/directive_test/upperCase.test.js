describe("UpperCaseDirective test suite", function() {
    var element, scope;
    beforeEach(module('directive_test'));

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        element = angular.element("<div upper-case-attr text='Hello World'></div>");
        $compile(element)(scope);
        scope.$apply();
    }));

    it("be uppercase", function() {
        expect(element.html()).toContain("HELLO WORLD");
    });

});