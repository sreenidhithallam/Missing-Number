const assert = require('assert');

const firstMissingNaturalNumber = require('../lib/firstMissingNaturalNumber.js');

describe('Test firstMissingNaturalNumber Logic', function () {
    it('should return 1 when input is null', function () {
        assert.equal(firstMissingNaturalNumber(null), 1);
    });
    it('should return 1 when input is empty array', function () {
        assert.equal(firstMissingNaturalNumber([]), 1);
    });
    it('should return 1 when input is undefined', function () {
        assert.equal(firstMissingNaturalNumber(undefined), 1);
    });


    it('should return 1 when input array has only 0 as element', function () {
        assert.equal(firstMissingNaturalNumber([0]), 1);
    });
    it('should return 1 when input array has only negative numbers as elements', function () {
        assert.equal(firstMissingNaturalNumber([-1, -4, -8]), 1);
    });
    it('should return 1 when input array has only negative numbers as elements', function () {
        assert.equal(firstMissingNaturalNumber([-1, -4, -8]), 1);
    });
    it('should return 1 when input array has all elements greater than array length', function () {
        assert.equal(firstMissingNaturalNumber([10, 45, 23]), 1);
    });


    it('should return first missing natural number even when elements are duplicate', function () {
        assert.equal(firstMissingNaturalNumber([1, 8, 8, 3, 2, 5, 5, 2]), 4);
    });
    it('should return first missing natural number when all the numbers in array are consecutive natural numbers', function () {
        assert.equal(firstMissingNaturalNumber([1, 2, 3, 4, 5, 6, 7, 8]), 9);
    });
    it('should return first missing natural number', function () {
        assert.equal(firstMissingNaturalNumber([4, -1, 2, 1, 5]), 3);
    });
});