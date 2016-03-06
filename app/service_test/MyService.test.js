/**
 * Created by apelbaur on 3/3/2016.
 */
describe('MyService test suite', function () {
    //Service under test
    var MyService;

    //depend on module
    beforeEach(module('service_test'));

    //inject MyService (use angular's DI)
    beforeEach(inject(function (_MyService_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        MyService = _MyService_;
    }));

    it('test greet', function () {
        expect(MyService.greet('bob')).toBe('hello bob');
    });

});