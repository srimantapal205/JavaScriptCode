const calculateSquare = require('../calculate-square.js');
const expect = require('chai').expect;

describe('calculateSquare', function(){
    it('should return 4 if passed 2', function(){
        calculateSquare( 2, function(error, result){
            expect(result).to.equal(4);
        })
    })
})