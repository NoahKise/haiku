let outputArray = [];

export function cleCheck(wordArray) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    if (wordArray[wordArray.length - 1] === "e" && wordArray[wordArray.length - 2] === "l" && (!vowelArray.includes(wordArray[wordArray.length - 3]))) {
        let lastSyllable = wordArray.slice(-3);
        outputArray.push(lastSyllable.join(""));
        wordArray = wordArray.slice(0, -3);
        return wordArray; //wordArray.next function();
    } else {
        return wordArray;
    }
}

export class Haiku {
    
    constructor(poem) {
        this.poem = poem; //right now poem is same as one word
    }

    haikuWordArray() {
        let wordArray = this.poem.split('');
        return wordArray; //cleCheck(haikuWordArray());
    }
    
    
    // cleCheck(wordArray) {
    //     const vowelArray = ["a", "e", "i", "o", "u", "y"];
    //     if (wordArray[wordArray.length - 1] === "e" && wordArray[wordArray.length - 2] === "l" && (!vowelArray.includes(wordArray[wordArray.length - 3]))) {
    //         // let firstSyllable = wordArray.slice(0, -3);
    //         let lastSyllable = wordArray.slice(-3);
    //         // outputArray.push(firstSyllable.join(""));
    //         outputArray.push(lastSyllable.join(""));
    //         wordArray = wordArray.slice(0, -3);
    //         return wordArray; //wordArray.next function();
    //     } else {
    //         return wordArray;
    //     }
    // }
//---------------------------------------
    syllableChecker() {
        const vowelArray = ["a", "e", "i", "o", "u", "y"];
        const digraphBlendArray = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
        const vowelTeams = [
            "ai", "aa", "ay", "ea", "ee", "ie",
            "oa", "oe", "ue", "ui", "ou",
            "oo", "au", "ei", "eu", "oi", "oy", "ou"
        ];
        const prefixArray = ["dis", "de", "mis", "pro", "post", "re", "sub"]
        

        //Cle 

        // if (wordArray[wordArray.length - 1] === "e" && wordArray[wordArray.length - 2] === "l" && (!vowelArray.includes(wordArray[wordArray.length - 3]))) {
        //     // let firstSyllable = wordArray.slice(0, -3);
        //     let lastSyllable = wordArray.slice(-3);
        //     // outputArray.push(firstSyllable.join(""));
        //     outputArray.push(lastSyllable.join(""));
        //     wordArray = wordArray.slice(0, -3);
        // }

        //Pre

        if ((wordArray.slice(0, 3)).join("") === "pre") {
            outputArray.push("pre");
            wordArray = wordArray.slice(3);
        }

        //Prefix

        if (wordArray.length > 5) {
            let firstLetters = wordArray.slice(0, 4);
            prefixArray.forEach((element) => {
                if ((firstLetters.join("")).includes(element)) {
                    outputArray.push(element);
                    wordArray = wordArray.slice(element.length);
                }
            });
        }

        //Entering Loop Starting With VCV

        for (let i = 0; i < wordArray.length; i++) {
            if (vowelArray.includes(wordArray[i]) && (!vowelArray.includes(wordArray[i + 1])) && vowelArray.includes(wordArray[i + 2])) {
                let firstSyllable = wordArray.slice(0, i + 1);
                // let secondSyllable = wordArray.slice(i + 1);
                outputArray.push(firstSyllable.join(""));
                // outputArray.push(secondSyllable.join(""));
                wordArray = wordArray.slice(i + 1);
            }

            //Digraph


            if (!vowelArray.includes(wordArray[i])) {
                if (!vowelArray.includes(wordArray[i + 1])) {
                    let conPair = (wordArray[i] + wordArray[i + 1]).toString();
                    if (digraphBlendArray.includes(conPair)) {
                        continue;
                    } else {
                        let firstSyllable = wordArray.slice(0, i + 1);
                        // let secondSyllable = wordArray.slice(i + 1);
                        outputArray.push(firstSyllable.join(""));
                        // outputArray.push(secondSyllable.join(""));
                        wordArray = wordArray.slice(i + 1);
                    }
                }
            }

            //Vowel Teams

            if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i + 1])) {
                let vowelPair = (wordArray[i] + wordArray[i + 1]).toString();
                if (vowelTeams.includes(vowelPair)) {
                    outputArray.push(wordArray.join(""));
                    wordArray = [];
                    break;
                } else {
                    let firstSyllable = wordArray.slice(0, i + 1);
                    // let secondSyllable = wordArray.slice(i + 1);
                    outputArray.push(firstSyllable.join(""));
                    // outputArray.push(secondSyllable.join(""));
                    wordArray = wordArray.slice(i + 1);
                    // if (wordArray.length !== 0) {
                    //     outputArray.push(wordArray.join(""));
                    // wordArray = [];
                    // }
                    break;
                }
            }
        } if (wordArray.length > 0) {
            outputArray.push(wordArray.join(""));
        }
        console.log(wordArray);
        return outputArray;
    }
}

