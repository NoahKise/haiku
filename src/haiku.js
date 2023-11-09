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
        const prefixArray = ["dis", "de", "mis", "pro", "post", "re", "sub"]
        let poemLetterArray = this.poem.split("");
        let outputArray = [];

        //Cle 

        if (poemLetterArray[poemLetterArray.length - 1] === "e" && poemLetterArray[poemLetterArray.length - 2] === "l" && (!vowelArray.includes(poemLetterArray[poemLetterArray.length - 3]))) {
            // let firstSyllable = poemLetterArray.slice(0, -3);
            let lastSyllable = poemLetterArray.slice(-3);
            // outputArray.push(firstSyllable.join(""));
            outputArray.push(lastSyllable.join(""));
            poemLetterArray = poemLetterArray.slice(0, -3);
        }

        //Pre

        if ((poemLetterArray.slice(0, 3)).join("") === "pre") {
            outputArray.push("pre");
            poemLetterArray = poemLetterArray.slice(3);
        }

        //Prefix

        if (poemLetterArray.length > 5) {
            let firstLetters = poemLetterArray.slice(0, 4);
            prefixArray.forEach((element) => {
                if ((firstLetters.join("")).includes(element)) {
                    outputArray.push(element);
                    poemLetterArray = poemLetterArray.slice(element.length);
                }
            });
        }

        //Entering Loop Starting With VCV

        for (let i = 0; i < poemLetterArray.length; i++) {
            if (vowelArray.includes(poemLetterArray[i]) && (!vowelArray.includes(poemLetterArray[i + 1])) && vowelArray.includes(poemLetterArray[i + 2])) {
                let firstSyllable = poemLetterArray.slice(0, i + 1);
                // let secondSyllable = poemLetterArray.slice(i + 1);
                outputArray.push(firstSyllable.join(""));
                // outputArray.push(secondSyllable.join(""));
                poemLetterArray = poemLetterArray.slice(i + 1);
            }

            //Digraph


            if (!vowelArray.includes(poemLetterArray[i])) {
                if (!vowelArray.includes(poemLetterArray[i + 1])) {
                    let conPair = (poemLetterArray[i] + poemLetterArray[i + 1]).toString();
                    if (digraphBlendArray.includes(conPair)) {
                        continue;
                    } else {
                        let firstSyllable = poemLetterArray.slice(0, i + 1);
                        // let secondSyllable = poemLetterArray.slice(i + 1);
                        outputArray.push(firstSyllable.join(""));
                        // outputArray.push(secondSyllable.join(""));
                        poemLetterArray = poemLetterArray.slice(i + 1);
                    }
                }
            }

            //Vowel Teams

            if (vowelArray.includes(poemLetterArray[i]) && vowelArray.includes(poemLetterArray[i + 1])) {
                let vowelPair = (poemLetterArray[i] + poemLetterArray[i + 1]).toString();
                if (vowelTeams.includes(vowelPair)) {
                    outputArray.push(poemLetterArray.join(""));
                    poemLetterArray = [];
                    break;
                } else {
                    let firstSyllable = poemLetterArray.slice(0, i + 1);
                    // let secondSyllable = poemLetterArray.slice(i + 1);
                    outputArray.push(firstSyllable.join(""));
                    // outputArray.push(secondSyllable.join(""));
                    poemLetterArray = poemLetterArray.slice(i + 1);
                    // if (poemLetterArray.length !== 0) {
                    //     outputArray.push(poemLetterArray.join(""));
                    // poemLetterArray = [];
                    // }
                    break;
                }
            }
        } if (poemLetterArray.length > 0) {
            outputArray.push(poemLetterArray.join(""));
        }
        console.log(poemLetterArray);
        return outputArray;
    }
}