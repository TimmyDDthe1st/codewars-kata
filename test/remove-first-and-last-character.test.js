const { removeFirstAndLastCharacter } = require("../src");

describe('remove characters', () => {
    it('returns a string without first and last characters', () => {
        expect(removeFirstAndLastCharacter('hello')).toEqual('ell');
        expect(removeFirstAndLastCharacter('roflcoptorz')).toEqual('oflcoptor');
        expect(removeFirstAndLastCharacter('gIgGiTy')).toEqual('IgGiT');
    })
    it('returns the passed string, if the string is 2 or less characters', () => {
        expect(removeFirstAndLastCharacter('it')).toEqual('it');
        expect(removeFirstAndLastCharacter('a')).toEqual('a');
        expect(removeFirstAndLastCharacter('')).toEqual('');
    })
})