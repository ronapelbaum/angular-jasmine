describe('demo test', function(){

    var car;

    beforeEach(function(){
        car = new Car('red');
    });

    it('should be true', function(){
        expect(car.getColor()).toBe('red');
    })

});
