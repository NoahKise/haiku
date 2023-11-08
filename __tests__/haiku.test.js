import Haiku from "../src/haiku.js";

describe('Haiku', () => {
    test('should create an object with 1 property that is a string', () => {
        const haiku = new Haiku("string");
        expect(haiku.poem).toEqual("string");
    });
});

describe('Haiku.prototype.syllableChecker', () => {
    test('should split a word between 2 consonants and return an array', () => {
        const haiku = new Haiku("robber");
        expect(haiku.syllableChecker()).toEqual(["rob", "ber"]);
    });

    test('should not split word between 2 consonants if they are a digraph or blend', () => {
        const digraphWord = new Haiku("chair");
        expect(digraphWord.syllableChecker()).toEqual(["chair"]);
    });
    test('should recognize if a word ends in le, and if the letter directly preceding is a consonant. If so, split it before the last 3 letters', () => {
        const leWord = new Haiku("table");
        expect(leWord.syllableChecker()).toEqual(["ta", "ble"]);
    });
});