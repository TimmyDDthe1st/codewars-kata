const { countTheMonkeys } = require("../src");

describe('count the monkeys', () => {
    it('returns an array to the count of a passed integer', () => {
        expect(countTheMonkeys(5)).toEqual([1, 2, 3, 4, 5]);
        expect(countTheMonkeys(3)).toEqual([1, 2, 3]);
        expect(countTheMonkeys(9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(countTheMonkeys(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(countTheMonkeys(20)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17 ,18, 19, 20]);
    })
})