export default class Haiku {
    constructor(poem) {
        this.poem = poem;
    }

    syllableChecker() {
        const vowelArray = ["a", "e", "i", "o", "u", "y"];
        const digraphBlendArray = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
        const vowelTeams = [
            "ai", "aa", "ay", "ea", "ee", "ie",
            "oa", "oe", "ue", "ui", "ou",
            "oo", "au", "ei", "eu", "oi", "oy", "ou"
        ];
        const prefixArray = ["dis", "de", "mis", "pre", "pro", "post", "re", "sub"]
        let poemLetterArray = this.poem.split("");
        let outputArray = [];
        if (poemLetterArray[poemLetterArray.length - 1] === "e" && poemLetterArray[poemLetterArray.length - 2] === "l" && (!vowelArray.includes(poemLetterArray[poemLetterArray.length - 3]))) {
            let firstSyllable = poemLetterArray.slice(0, -3);
            let secondSyllable = poemLetterArray.slice(-3);
            outputArray.push(firstSyllable.join(""));
            outputArray.push(secondSyllable.join(""));
            return outputArray;
        }

        if (poemLetterArray.length > 5) {
            let firstLetters = poemLetterArray.slice(0, 4);
            console.log(firstLetters.join(""));
            prefixArray.forEach((element) => {
                if ((firstLetters.join("")).includes(element)) {
                    outputArray.push(element);
                    console.log(outputArray);
                    poemLetterArray = poemLetterArray.slice(element.length);
                    console.log(poemLetterArray);
                }
            });
        }

        for (let i = 0; i < poemLetterArray.length; i++) {
            if (vowelArray.includes(poemLetterArray[i]) && (!vowelArray.includes(poemLetterArray[i + 1])) && vowelArray.includes(poemLetterArray[i + 2])) {
                let firstSyllable = poemLetterArray.slice(0, i + 1);
                let secondSyllable = poemLetterArray.slice(i + 1);
                outputArray.push(firstSyllable.join(""));
                outputArray.push(secondSyllable.join(""));
                break;
            }
            if (!vowelArray.includes(poemLetterArray[i])) {
                if (!vowelArray.includes(poemLetterArray[i + 1])) {
                    let conPair = (poemLetterArray[i] + poemLetterArray[i + 1]).toString();
                    if (digraphBlendArray.includes(conPair)) {
                        continue;
                    } else {
                        let firstSyllable = poemLetterArray.slice(0, i + 1);
                        let secondSyllable = poemLetterArray.slice(i + 1);
                        outputArray.push(firstSyllable.join(""));
                        outputArray.push(secondSyllable.join(""));
                        break;
                    }
                }
            }
            if (vowelArray.includes(poemLetterArray[i]) && vowelArray.includes(poemLetterArray[i + 1])) {
                let vowelPair = (poemLetterArray[i] + poemLetterArray[i + 1]).toString();
                if (vowelTeams.includes(vowelPair)) {
                    outputArray.push(this.poem);
                    break;
                } else {
                    let firstSyllable = poemLetterArray.slice(0, i + 1);
                    let secondSyllable = poemLetterArray.slice(i + 1);
                    outputArray.push(firstSyllable.join(""));
                    outputArray.push(secondSyllable.join(""));
                    break;
                }
            }
        }
        console.log(outputArray);
        return outputArray;
    }
}