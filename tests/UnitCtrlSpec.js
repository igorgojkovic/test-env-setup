
describe('Angular controller testing - unitCtrl', function() {
    // load testing module
    beforeEach(module('unitTests'));
    
    var $controller;
    
    
    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));


    describe('unitCtrl.grade', function() {
        
        it('sets the strength of a password to "strong" if size > 8 chars', function() {
            var $scope = {};
            var unitCtrl = $controller('unitCtrl');

            unitCtrl.pass = 'gojkoviczligija';
            unitCtrl.grade();
            expect(unitCtrl.strength).toEqual('strong');
        });
            
    });

});