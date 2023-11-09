import Haiku from "../src/haiku.js";

describe('Haiku', () => {
    test('should create an object with 1 property that is a string', () => {
        const haiku = new Haiku("string");
        expect(haiku.poem).toEqual("string");
    });
});

describe('haikuWordArray()', () => {
    test('should split a word into array of letters', () => {
        const haiku = new Haiku("rob");
        expect(haiku.haikuWordArray()).toEqual(["r", "o", "b"]);
    });
});


// describe('Haiku.prototype.syllableChecker', () => {
//     test('should split a word between 2 consonants and return an array', () => {
//         const haiku = new Haiku("robber");
//         expect(haiku.syllableChecker()).toEqual(["rob", "ber"]);
//     });

//     test('should not split word between 2 consonants if they are a digraph or blend', () => {
//         const digraphWord = new Haiku("chair");
//         expect(digraphWord.syllableChecker()).toEqual(["chair"]);
//     });
//     test('should recognize if a word ends in le, and if the letter directly preceding is a consonant. If so, split it before the last 3 letters', () => {
//         const leWord = new Haiku("table");
//         expect(leWord.syllableChecker()).toEqual(["ble", "ta"]);
//     });
//     test('should recognize when a single consonant is between 2 vowels and split the word before the consonant', () => {
//         const vcvWord = new Haiku("habit");
//         expect(vcvWord.syllableChecker()).toEqual(["ha", "bit"]);
//     });
//     test('should recognize two non-team vowels and split between the vowels', () => {
//         const vvWord = new Haiku("lion");
//         expect(vvWord.syllableChecker()).toEqual(["li", "on"]);
//     });
//     test('should recognize two team vowels and do not split between the vowels', () => {
//         const vvWord = new Haiku("naan");
//         expect(vvWord.syllableChecker()).toEqual(["naan"]);
//     });
//     test('should recognize when a word begins with a prefix and split after the prefix', () => {
//         const prefixWord = new Haiku("dishonest");
//         expect(prefixWord.syllableChecker()).toEqual(["dis", "ho", "nest"]);
//     });
//     test('should recognize when a word begins with pre and split after pre', () => {
//         const preWord = new Haiku("prevail");
//         expect(preWord.syllableChecker()).toEqual(["pre", "vail"]);
//     });
// });

// const splitHaiku = () =