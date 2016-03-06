describe("upperCaseAttr directive test suite", function() {
    var element;
    beforeEach(module('directive_test'));

    beforeEach(inject(function($compile, $rootScope) {
        element = angular.element("<div upper-case-attr text='Hello World'></div>");
        $compile(element)($rootScope);
        $rootScope.$apply();
    }));

    it("be uppercase", function() {
        expect(element.html()).toContain("HELLO WORLD");
    });

});