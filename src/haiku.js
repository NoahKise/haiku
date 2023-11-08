export default class Haiku {
    constructor(poem) {
        this.poem = poem;
    }

    syllableChecker() {
        const vowelArray = ["a", "e", "i", "o", "u"];
        let poemLetterArray = this.poem.split("");
        let outputArray = [];
        for (let i = 0; i < poemLetterArray.length; i++) {
            if (!vowelArray.includes(poemLetterArray[i])) {
                if (!vowelArray.includes(poemLetterArray[i+1])) {
                    let firstSyllable = poemLetterArray.slice(0, i+1);
                    let secondSyllable = poemLetterArray.slice(i+1);
                    outputArray.push(firstSyllable.join(""));
                    outputArray.push(secondSyllable.join(""));
                    break;
                }

            }
        }
        return outputArray;
    }
}