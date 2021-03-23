function balancingParentheses(string) {
    let startingClosing = 0;
    const array1 = [...string.matchAll(/[)]/g)];
    const array2 = [...string.matchAll(/[(]/g)];
    if (string.charAt(0) === ")") {
        array1.pop();
        startingClosing++;
    }
    if (string.charAt(string.length - 1) === "(") {
        array2.pop();
        startingClosing++;
    }
    return Math.abs(array1.length - array2.length) + startingClosing;
}

// function balancingParentheses(string) {
//     let baseCount = 0;
//     let leftBracket = 0;
//     let rightBracket = 0;

//     for (let i = 0; i < string.length; i++) {
//         if (
//             (i === 0 && string.charAt(0) === ")") ||
//             (i === string.length - 1 && string.charAt(string.length - 1) === "(")
//         ) {
//             baseCount++;
//         } else if (string.charAt(i) === ")") {
//             leftBracket++;
//         } else if (string.charAt(i) === "(") {
//             rightBracket++;
//         }
//     }

//     return Math.abs(leftBracket - rightBracket) + baseCount;
// }

function balancingParentheses(string) {
    let baseCount = 0;
    let leftBracket = 0;
    let rightBracket = 0;

    for (let i = 0; i < string.length; i++) {
        if (
            (i === 0 && string.charAt(0) === ")") ||
            (i === string.length - 1 && string.charAt(string.length - 1) === "(")
        ) {
            baseCount++;
        } else if (string.charAt(i) === ")") {
            leftBracket++;
        } else if (string.charAt(i) === "(") {
            rightBracket++;
        }
    }

    return Math.abs(leftBracket - rightBracket) + baseCount;
}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 0");
    console.log(balancingParentheses("))(()())"));

    console.log("");

    console.log("Expecting: 2");
    console.log(balancingParentheses("()))"));

    console.log("");

    console.log("Expecting: 1");
    console.log(balancingParentheses(")"));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
