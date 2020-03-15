const { lostWithOutAMap } = require("../src");

describe('array of integers, doubled', () => {
    it('returns the passed in array, but doubled', () => {
        expect(lostWithOutAMap([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
        expect(lostWithOutAMap([2, 3, 4, 5, 6, 7, 8])).toEqual([4, 6, 8, 10, 12, 14, 16]);
    })
})