let outputArray = [];

// function masterFunction(poemArray) {
//     for (let i = 0; )
// }

export function wordSyllableCounter(wordArray) {
    outputArray = [];
    const check1 = preCheck(wordArray);
    console.log(check1);
    const check2 = prefixCheck(check1);
    console.log(check2);
    const check3 = cleCheck(check2);
    console.log(check3);
    const check4 = vcvCheck(check3);
    console.log(check4);
    const check5 = digraphCheck(check4);
    console.log(check5);
    const check6 = vTeamCheck(check5);
    console.log(check6);
    const check7 = vcvCheck(check6);
    console.log(check7);
    const check8 = digraphCheck(check7);
    console.log(check8);
    const check9 = vTeamCheck(check8);
    console.log(check9);
    const check10 = vcvCheck(check9);
    console.log(check10);
    const check11 = digraphCheck(check10);
    console.log(check11);
    const check12 = vTeamCheck(check11);
    console.log(check12);
    const check13 = endsInYCheck(check12);
    console.log(check13);

    if (check13.length > 0) {
        outputArray.push(check13.join(""));
    }
    return outputArray;
}

export function syllableCount(outputArray) {
    let totalCount = 0;
    totalCount += outputArray.length;
    return totalCount;
}

export function cleCheck(wordArray) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    if (wordArray[wordArray.length - 1] === "e" && wordArray[wordArray.length - 2] === "l" && (!vowelArray.includes(wordArray[wordArray.length - 3]))) {
        let lastSyllable = wordArray.slice(-3);
        outputArray.push(lastSyllable.join(""));
        wordArray = wordArray.slice(0, -3);
        return wordArray;
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
    const prefixArray = ["dis", "de", "mis", "pro", "post", "re", "sub", "cyc"];
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
    return wordArray;
}

export function vcvCheck(wordArray) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    if (Array.isArray(wordArray) && wordArray.length > 0) {
        if (wordArray[wordArray.length - 1] !== "e") {
            for (let i = 0; i < wordArray.length; i++) {
                if (vowelArray.includes(wordArray[i]) && (!vowelArray.includes(wordArray[i + 1])) && vowelArray.includes(wordArray[i + 2])) {
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

export function digraphCheck(wordArray) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    const digraphBlendArray = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
    if (Array.isArray(wordArray) && wordArray.length > 0) {
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
    if (Array.isArray(wordArray) && wordArray.length > 0) {
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

export function endsInYCheck(wordArray) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    if (wordArray[wordArray.length - 1] === "y" && (!vowelArray.includes(wordArray[wordArray.length - 2]))) {
        outputArray.push("y");
        wordArray = wordArray.slice(0, -1);
        return wordArray;
    }
    return wordArray;
}

export class Haiku {

    constructor(poem) {
        this.poem = poem; //right now poem is same as one word
    }

    haikuWordArray() {
        let wordArray = this.poem.split('');
        return wordArray;
    }

    haikuPoemArray() {
        let poemArray = (this.poem).toLowerCase().split(" ");
        return poemArray;
    }
}