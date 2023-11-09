let outputArray = [];

export function wordSyllableCounter(wordArray) {
    outputArray = [];
    const check1 = cleCheck(wordArray);
    const check2 = preCheck(check1);
    const check3 = prefixCheck(check2);

    const check4 = vcvCheck(check3);
    const check5 = digraphCheck(check4);
    const check6 = vTeamCheck(check5);

    const check7 = vcvCheck(check6);
    const check8 = digraphCheck(check7);
    const check9 = vTeamCheck(check8);
    const check10 = vcvCheck(check9);
    const check11 = digraphCheck(check10);
    const check12 = vTeamCheck(check11);
    console.log(check12);
    console.log(outputArray);
    return outputArray;
    // if check12 has 1 syll, push to output array
    // run finalSyllCount(outputArray) gives us # for 1 word
}

export function syllableCount(outputArray) {
    let totalCount = outputArray.length;
    return totalCount;
}



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
export function preCheck(wordArray) {
    if ((wordArray.slice(0, 3)).join("") === "pre") {
        outputArray.push("pre");
        wordArray = wordArray.slice(3);
        return wordArray;
    } else {
        return wordArray;
    }
}

export function prefixCheck(wordArray) {
    const prefixArray = ["dis", "de", "mis", "pro", "post", "re", "sub"];
    if (wordArray.length > 5) {
        let firstLetters = wordArray.slice(0, 4);
        prefixArray.forEach((element) => {
            if ((firstLetters.join("")).includes(element)) {
                outputArray.push(element);
                wordArray = wordArray.slice(element.length);
            }
        });
        return wordArray;
    }
}

export function vcvCheck(wordArray) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    if (wordArray.length !== 0) {
        for (let i = 0; i < wordArray.length; i++) {
            if (vowelArray.includes(wordArray[i]) && (!vowelArray.includes(wordArray[i + 1])) && vowelArray.includes(wordArray[i + 2])) {
                let keptSyllable = wordArray.slice(0, i + 1);
                outputArray.push(keptSyllable.join(""));
                wordArray = wordArray.slice(i + 1);
            }
        }
        return wordArray;
    }
    return wordArray;
}

export function digraphCheck(wordArray) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    const digraphBlendArray = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
    if (wordArray.length !== 0) {
        for (let i = 0; i < wordArray.length; i++) {
            if (!vowelArray.includes(wordArray[i])) {
                if (!vowelArray.includes(wordArray[i + 1])) {
                    let conPair = (wordArray[i] + wordArray[i + 1]).toString();
                    if (digraphBlendArray.includes(conPair)) {
                        return wordArray;
                    } else {
                        let keptSyllable = wordArray.slice(0, i + 1);
                        outputArray.push(keptSyllable.join(""));
                        wordArray = wordArray.slice(i + 1);
                    }
                }
            }
        }
        return wordArray;
    }
    return wordArray;
}

export function vTeamCheck(wordArray) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    const vowelTeams = ["ai", "aa", "ay", "ea", "ee", "ie", "oa", "oe", "ue", "ui", "ou", "oo", "au", "ei", "eu", "oi", "oy", "ou"
    ];
    if (wordArray.length !== 0) {
        for (let i = 0; i < wordArray.length; i++) {
            if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i + 1])) {
                let vowelPair = (wordArray[i] + wordArray[i + 1]).toString();
                if (vowelTeams.includes(vowelPair)) {
                    return wordArray;
                } else {
                    let keptSyllable = wordArray.slice(0, i + 1);
                    outputArray.push(keptSyllable.join(""));
                    wordArray = wordArray.slice(i + 1);
                }
            }
        }
        return wordArray;
    }
    return wordArray;
}

export function endsInY(wordArray) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    if (wordArray[-1] === "y" && (!vowelArray.includes(wordArray[-2]))) {
        outputArray.push(wordArray[-1]);
        wordArray.slice(0, -1);
    }
    return wordArray;
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
    //         // let keptSyllable = wordArray.slice(0, -3);
    //         let lastSyllable = wordArray.slice(-3);
    //         // outputArray.push(keptSyllable.join(""));
    //         outputArray.push(lastSyllable.join(""));
    //         wordArray = wordArray.slice(0, -3);
    //         return wordArray; //wordArray.next function();
    //     } else {
    //         return wordArray;
    //     }
    // }
    //---------------------------------------
    // syllableChecker() {
    //     const vowelArray = ["a", "e", "i", "o", "u", "y"];
    //     const digraphBlendArray = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
    //     const vowelTeams = [
    //         "ai", "aa", "ay", "ea", "ee", "ie",
    //         "oa", "oe", "ue", "ui", "ou",
    //         "oo", "au", "ei", "eu", "oi", "oy", "ou"
    //     ];
    //     const prefixArray = ["dis", "de", "mis", "pro", "post", "re", "sub"];


    //Cle

    // if (wordArray[wordArray.length - 1] === "e" && wordArray[wordArray.length - 2] === "l" && (!vowelArray.includes(wordArray[wordArray.length - 3]))) {
    //     // let keptSyllable = wordArray.slice(0, -3);
    //     let lastSyllable = wordArray.slice(-3);
    //     // outputArray.push(keptSyllable.join(""));
    //     outputArray.push(lastSyllable.join(""));
    //     wordArray = wordArray.slice(0, -3);
    // }

    //Pre

    // if ((wordArray.slice(0, 3)).join("") === "pre") {
    //     outputArray.push("pre");
    //     wordArray = wordArray.slice(3);
    // }

    //Prefix

    // if (wordArray.length > 5) {
    //     let firstLetters = wordArray.slice(0, 4);
    //     prefixArray.forEach((element) => {
    //         if ((firstLetters.join("")).includes(element)) {
    //             outputArray.push(element);
    //             wordArray = wordArray.slice(element.length);
    //         }
    //     });
    // }

    //Entering Loop Starting With VCV

    // for (let i = 0; i < wordArray.length; i++) {
    //     if (vowelArray.includes(wordArray[i]) && (!vowelArray.includes(wordArray[i + 1])) && vowelArray.includes(wordArray[i + 2])) {
    //         let keptSyllable = wordArray.slice(0, i + 1);
    //         // let secondSyllable = wordArray.slice(i + 1);
    //         outputArray.push(keptSyllable.join(""));
    //         // outputArray.push(secondSyllable.join(""));
    //         wordArray = wordArray.slice(i + 1);
    //     }

    //Digraph


    // if (!vowelArray.includes(wordArray[i])) {
    //     if (!vowelArray.includes(wordArray[i + 1])) {
    //         let conPair = (wordArray[i] + wordArray[i + 1]).toString();
    //         if (digraphBlendArray.includes(conPair)) {
    //             continue;
    //         } else {
    //             let keptSyllable = wordArray.slice(0, i + 1);
    // let secondSyllable = wordArray.slice(i + 1);
    // outputArray.push(keptSyllable.join(""));
    // outputArray.push(secondSyllable.join(""));
    // wordArray = wordArray.slice(i + 1);
    //         }
    //     }
    // }

    //Vowel Teams

    // if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i + 1])) {
    //     let vowelPair = (wordArray[i] + wordArray[i + 1]).toString();
    //     if (vowelTeams.includes(vowelPair)) {
    //         outputArray.push(wordArray.join(""));
    //         wordArray = [];
    //         break;
    //     } else {
    //         let keptSyllable = wordArray.slice(0, i + 1);
    // let secondSyllable = wordArray.slice(i + 1);
    // outputArray.push(keptSyllable.join(""));
    // outputArray.push(secondSyllable.join(""));
    // wordArray = wordArray.slice(i + 1);
    // if (wordArray.length !== 0) {
    //     outputArray.push(wordArray.join(""));
    // wordArray = [];
    // }
    //                     break;
    //                 }
    //             }
    //         } if (wordArray.length > 0) {
    //             outputArray.push(wordArray.join(""));
    //         }
    //         console.log(wordArray);
    //         return outputArray;
    //     }
}