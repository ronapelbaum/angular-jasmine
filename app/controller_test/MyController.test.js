/**
 * Created by apelbaur on 3/3/2016.
 */
describe('MyController test suite: use inject()', function () {
    var $controller, MyDataService;
    beforeEach(module('controller_test'));

    beforeEach(inject(function (_$controller_, _MyDataService_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
            MyDataService = _MyDataService_;
        }
    ));

    var ctrl;
    beforeEach(function () {
        ctrl = $controller("MyController");
    });

    it("spyOn() injected service", function () {
        spyOn(MyDataService, 'getName');
        ctrl.greet();
        expect(MyDataService.getName).toHaveBeenCalled();
    });

    it("spyOn() and return 'alice", function () {
        spyOn(MyDataService, 'getName').and.returnValue('alice');
        expect(ctrl.greet()).toBe('hello alice');
    });
});

describe('MyController test suite: use simple DI', function () {
    var $controller;
    beforeEach(module('controller_test'));

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    /**
     * inject dependencies and instance a controller (use angular's DI)
     */
    function getController(dependencies) {
        return $controller('MyController', dependencies);
    }

    it("test greet() - expect spyObj.getName() to have been called", function () {
        var spyObj = jasmine.createSpyObj('MockService', ['getName']);
        var ctrl = getController({
            MyDataService: spyObj
        });

        ctrl.greet();
        expect(spyObj.getName).toHaveBeenCalled();
    });

    it("test greet() - mock spyObj.getName() to return 'alice", function () {
        var spyObj = jasmine.createSpyObj('MockService', ['getName']);
        spyObj.getName.and.returnValue('alice');

        var ctrl = getController({
            MyDataService: spyObj
        });
        expect(ctrl.greet()).toBe('hello alice');
    });
});


describe('MyController test suite: use $provide()', function () {
    var $controller;
    var spyObj = jasmine.createSpyObj('MockService', ['getName']);
    spyObj.getName.and.returnValue('alice');

    beforeEach(module('controller_test'));

    beforeEach(module(function ($provide) {
        $provide.value('MyDataService', spyObj);
    }));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it("spyOn() and return 'alice", function () {
        expect($controller("MyController").greet()).toBe('hello alice');
    });
});