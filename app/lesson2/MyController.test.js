/**
 * Created by apelbaur on 3/3/2016.
 */
describe('MyController test suite', function () {
    //angular services
    var $controller, MyDataService;

    beforeEach(module('lesson2'));

    beforeEach(inject(function (_$controller_, _MyDataService_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
            MyDataService = _MyDataService_;
        }
    ));

    /**
     * inject dependencies and instance a controller (use angular's DI)
     */
    function getController(dependencies) {
        return $controller('MyController', dependencies);
    }

    it('test greet', function () {
        var ctrl = getController({});
        spyOn(MyDataService, 'getName').and.returnValue('alice');

        var actual = ctrl.greet();

        expect(actual).toBe('hello alice');
    });

});