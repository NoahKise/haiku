import Haiku from "../src/haiku.js";

describe('Haiku', () => {
    test('should create an object with 1 property that is a string', () => {
        const haiku = new Haiku("string");
        expect(haiku.poem).toEqual("string");
    });
});

describe('Haiku.prototype.syllableChecker', () => {
    test('should split a word between 2 consonants and return an array', () => {
        const vowelArray = ["a", "e", "i", "o", "u"];
        const haiku = new Haiku("robber");
        expect(haiku.syllableChecker()).toEqual(["rob", "ber"])
    });
});