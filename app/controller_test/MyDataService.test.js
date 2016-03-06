/**
 * Created by apelbaur on 3/3/2016.
 */
describe('MyDataService test suite', function () {
    //Service under test
    var MyDataService;

    //depend on module
    beforeEach(module('controller_test'));

    //inject MyService (use angular's DI)
    beforeEach(inject(function (_MyDataService_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        MyDataService = _MyDataService_;
    }));

    it('test greet', function () {
        expect(MyDataService.getName()).toBe('bob');
    });

});