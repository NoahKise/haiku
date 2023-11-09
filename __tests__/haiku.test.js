import { Haiku, cleCheck, digraphCheck, preCheck, prefixCheck, vcvCheck, vTeamCheck, wordSyllableCounter, syllableCount, endsInYCheck } from "../src/haiku.js";

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

describe('cleCheck()', () => {
    test('should recognize if a word array ends in le, and if the letter directly preceding is a consonant. If so, split it before the last 3 letters', () => {
        const wordArray = ["t", "a", "b", "l", "e"];
        expect(cleCheck(wordArray)).toEqual(["t", "a"]);
    });
    test('should return the original argument array if the last three letters of the argument array are not "consonant" + "l" + "e".', () => {
        const wordArray = ["r", "o", "b"];
        expect(cleCheck(wordArray)).toEqual(["r", "o", "b"]);
    })
});

describe('preCheck()', () => {
    test('should recognize when a word begins with pre and split after pre', () => {
        const wordArray = ["p", "r", "e", "v", "a", "i", "l"];
        expect(preCheck(wordArray)).toEqual(["v", "a", "i", "l"]);
    });

    test('should return original word array if word does not begin with pre', () => {
        const wordArray = ["c", "a", "t"];
        expect(preCheck(wordArray)).toEqual(["c", "a", "t"]);
    });
});

describe('prefixCheck()', () => {
    test('should recognize when a word begins with a prefix and split after the prefix', () => {
        const wordArray = ["d", "i", "s", "o", "w", "n"];
        expect(prefixCheck(wordArray)).toEqual(["o", "w", "n"]);
    });
    test('should recognize when a word does not begins with a prefix and return word', () => {
        const wordArray = ["c", "l", "o", "w", "n", "s"];
        expect(prefixCheck(wordArray)).toEqual(["c", "l", "o", "w", "n", "s"]);
    });
    test('should return wordarray as is if wordarray length is <= 5', () => {
        const wordArray = ["o", "w", "n"];
        expect(prefixCheck(wordArray)).toEqual(["o", "w", "n"]);
    });
});

describe('vcvCheck()', () => {
    test('should recognize when a single consonant is between 2 vowels and split the word before the consonant', () => {
        const wordArray = ["h", "a", "b", "i", "t"];
        expect(vcvCheck(wordArray)).toEqual(["b", "i", "t"]);
    });
    test('if length of word array is empty, return word array', () => {
        const wordArray = [];
        expect(vcvCheck(wordArray)).toEqual([]);
    });
});

describe('digraphCheck()', () => {
    test('should recognize word with two consective consonent and not split if they are digraphs', () => {
        const wordArray = ["s", "l", "e", "e", "p"];
        expect(digraphCheck(wordArray)).toEqual(["s", "l", "e", "e", "p"]);
    });
    test('should recognize word with two consective consonent and split if they are not digraphs', () => {
        const wordArray = ["r", "o", "b", "b", "e", "r"];
        expect(digraphCheck(wordArray)).toEqual(["b", "e", "r"]);
    });
    test('if length of word array is 0, return word array', () => {
        const wordArray = [];
        expect(digraphCheck(wordArray)).toEqual([]);
    });
});

describe("vTeamCheck()", () => {
    test('should recogize if an array has two adjacent vowels that are a vowel team and not split the array between those vowels', () => {
        const wordArray = ["h", "o", "o", "t"];
        expect(vTeamCheck(wordArray)).toEqual(["h", "o", "o", "t"]);
    });
    test('should recogize if an array has two adjacent vowels that are not a vowel team and split the array between those vowels', () => {
        const wordArray = ["l", "i", "o", "n"];
        expect(vTeamCheck(wordArray)).toEqual(["o", "n"]);
    });
    test('if length of word array is 0, return word array', () => {
        const wordArray = [];
        expect(vTeamCheck(wordArray)).toEqual([]);
    });
});

describe("wordSyllableCounter()", () => {
    test('should take wordArray and return outputArray of syllables', () => {
        const testArray = ["r", "o", "b", "b", "e", "r"];
        expect(wordSyllableCounter(testArray)).toEqual(["rob", "ber"]);
    });
});

describe("syllableCount()", () => {
    test('should take syllable array and return length of array', () => {
        const testOutputArray = ["rob", "ber"];
        expect(syllableCount(testOutputArray)).toEqual(2);
    });
});

describe("endsInYCheck()", () => {
    test('if word ends in "y", puts y in output array and returns word without "y"', () => {
        const wordArray = ["b", "a", "d", "l", "y"];
        expect(endsInYCheck(wordArray)).toEqual(["b", "a", "d", "l"]);
    });
    test('if word does not end in "y", return the word', () => {
        const wordArray = ["b", "a", "d"];
        expect(endsInYCheck(wordArray)).toEqual(["b", "a", "d"]);
    });
});