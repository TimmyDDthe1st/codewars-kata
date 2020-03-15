const { peopleRemainingOnBus } = require("../src");

describe('remaining people on bus', () => {
    it('returns people left on the bus after some stops', () => {
        expect(peopleRemainingOnBus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toBe(21);
        expect(peopleRemainingOnBus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toBe(17);
        expect(peopleRemainingOnBus([[10,0],[3,5],[5,8]])).toBe(5);
    })
})