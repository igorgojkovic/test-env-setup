(function() {
    'use strict';

    angular.module('unitTests', [])
           .controller('unitCtrl', unitCtrl);
    
    function unitCtrl() {
        var vm = this;
        vm.pass = '';
        
        vm.grade = function(){
            var size = vm.pass.length;
            if ( size > 8 ){
                vm.strength = 'strong';
            }else if( size > 3 ){
                vm.strength = 'medium';
            }else{
                vm.strength = 'weak';
            }
        };

        console.log('controller success');
    }
    
})();