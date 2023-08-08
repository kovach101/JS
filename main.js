// case sensitivity in variables

var studlyCapVar;
var properCaseOver;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A string";
titleCaseOver = 9000;

// basic math

var sum = 10 + 0;
console.log(sum)

var difference = 45 - 33;

var product = 8 * 10;

var quotient = 66 / 33;

// Increment and decrement(-1)

var myVar = 87;
myVar = myVar + 1;
myVar++;

var myVar = 11;
myVar = myVar -1;
myVar--;

// Decimals

var ourDecimal = 5.7;
var myDecimal = 0.009

// Multiply decimals

var product = 2.0 * 2.5;
console.log(product)

// Divide decimals

var quotient = 4.4 / 2.0;

// finding a remainder 

var remainder;
remainder = 11 % 3;

// Augmented math problems

var a = 3;
var b = 17;
var c = 12;

a += 12; // A shortcut
b += b;
c += 7;


var a = 3;
var b = 9;
var c = 3;

a -= 6; // A shortcut
b -= 15;
c -= 1;


var a = 5;
var b = 12;
var c = 4.6;

a *= 5; // A shortcut
b *= b;
c *= 10;


var a = 48;
var b = 108;
var c = 33;

a /= 12; // A shortcut
b /= 4;
c /= 11;


// declare string variables

var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Thomas";
var myLastName = "Delany"; 

// Escaping literal quotes in strings

var myString = "I am a \"double quoted\" string inside \"double quotes\" 
console.log(myStr)

// Quoting strings with single quotes

var myStr = 'website.com'

// Escape sequences in strings

/*
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

// Plus operator concatenate strings

var ourStr = "I come first. " + "I come second.";

var myStr = "This is the start. " + "This is the end."
console.log(myStr);

// Concatenate strings with plus equals operator

var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. "
myStr += "This is the second sentence."

console.log(myStr);

// Constructing strings with variables

var ourName = "freecodecamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Beau";
var myStr = "My name is " myName + " and I am well!";
console.log(myStr);

// appending variables to strings

var anAdjective = "awesome";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Length Of a string

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength)

// bracket notation

var firstLetterOfFirstName = "";
var firstName = "";

firstLetterOfLastName = firstName[0];

var firstLetterOfFirstName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName;

// String immutability

var myStr = "Jello world";

myStr = "Hello World";

// Bracket notation to find NTH character in string

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2];

// Bracket notation to find last character in string

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length -1];

var lastName = "lovelace";

var lastLetterOfLastName = lastName[lastName.length -1];

// Word blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Store multiple values with arrays

var ourArray = ["John", 23];

var myArray = ["quiincy", 1];

// Nested arrays

var ourArray = [["the universe", 42],["everything", 101010]];

var myArray = [["Bulls", 23], ["White sox", 45]];

// Access array data with indexes

var ourArray = [50, 60, 70];
var ourData = ourArray[0];

var myArray = [50, 60, 70];

var myData = myArray[0];
console.log(myData)

// Modify array data with indexes

var ourArray = [18, 64, 99];
ourArray[1] = 45

var myArray = [18, 64, 99];

myArray[0] = 45;
console.log(myArray)

// Access multi-dimensional arrays with indexes

var myArray = [[1,2,3], [4,5,6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myArray[2][1];
console.log(myData);

// Push

var ourArray = ["Stimson", "J", "cat"];
ourArray.push(["happy", "joy"]);

var myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3])

// Manipulate arrays with pop

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();

console.log(myArray)

// Manipulate arrays with shift

var ourArray = ["Stimson", "3", ["cat"]];
var removedFromOurArray = ourArray.shift();

var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift();

// Manipulate arrays with unshift

var ourArray = ["Stimpson", "3", "cat"];
ourArray.shift(); // ourArray now equals ["3", "cat"]
ourArray.unshift("Happy"); // ourArray now equals ["Happy", "3", "cat"]

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35]);

// Shopping list

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs" 3]];

// White resuasable code with functions

function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

function ourReusableFunction() {
    console.log("Hi World");
}

ourReusableFunction();

// Passing values to functions with arguments

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(10, 5)

// Global scope and functions

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function func2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log += " oopsGlobal: " + oopsGlobal;
}
func1();
func2();

// Local scope and functions 

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// Global vs. Local scope in functions

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

// Return a value from a function with return

function minusSeven(num) {
    return num -7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// Understanding undefined value returned from a function

var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

// Assignment with a returned value

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processedArg(num) {
    return (num + 3) / 5;
}

processed = processingArg(7);

// Stand in line

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var test = [1,2,3,4,5];

// Boolean values

function welcomeToBooLeans() {
    return true;
}

// Use conditional logic with if statements

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

// Comparison with the equality operator

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not equal";
}

console.log(testEqual(10));

// Comparison with the strict equality operator

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

// Practice comparing different values

function compareEquality(a, b) {
    if (a === b) {
        return "Equal"
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));

// comparison with the inequality operator

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));

// Comparison with the strict inequality operator

function testStrictNotEqual(val) {
    if (val !==j 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));

// Comparisons with the Logical And operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(10));

// comparison with the greater than or equal to operator

function testGreaterorEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

console.log(testGreaterOrEqual(10));

// Comparison with the less than operator

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over"
}

console.log(testLessthan(10));

// Comparison with the less than or equal to operator

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller than or equal to 12"
    }

    if (val <= 24) {
        return "smaller than or equal to 24";
    }

    return "more than 24"
}

console.log(testLessOrEqual(10));

// Comparisons with the logical and operator

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}

testLogicalAnd(10);

// Comparisons with the logical or operator

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}

testLogicalOr(15);

// Else statements

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller"
    }

    return result;
}

// Else if statements

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

// logical order in if statements

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than of Equal to 10";
    }
}

console.log(orderMyLogic(3));

// chaining if else statements

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}

console.log(testSize(7));

// Golf code

var names = ["Hole in-one!", "Eagle", "Birdie"]
function (strokes == 1) {
    if (strokes == 1){
        return names[0]
    } else if (strokes <= par - 2){
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    }
}

console.log(golfScore(5, 4));

// switch statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;

    }
    return answer;
}
console.log(caseInSwitch(2));

// Default option in switch statements

function switchOfStuff(val) {
    var answer = ""; 
    switch (val) {
        case "a":
            answer = 'apple';
            break;
        case "b":
            answer = 'bird';
            break;
        case "c":
            answer = 'cat';
            break;
        default:
            answer = "stuff";
            break;
}
return answer;
}

console.log(switchOfStuff("a"));


// Multiple identical options in switch statements

function sequentialSizes(val){
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
}

console.log(sequentialSizes(1));

// replacing if else chains with switch

function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":
            answer = 'Marley';
            break;
        case "42":
            answer = 'The Answer';
            break;
        case "1":
            answer = 'There is no #1';
            break;
        case 99:
            answer = "Missed by this much!";
            break;
        case 7:
            answer = "Missed by this much!";
            break;
}
return answer;

    }

// Returning boolean valus from functions

function isLess(a, b) {
    return a < b;
}

console.assert(isLess(10, 15));

// Return early pattern for functions

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2,2));

// Counting cards

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
            case 10:
            case "J":
            case "Q":
            case "K":
            case "A":
                count--;
                break;
    }

    var holdbed = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}


// Build javascript objects

var ourDog = {
    "name": "Camper",
    "legs": 4, 
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Quincy",
    "legs": 3, 
    "tails": 2,
    "friends": []
}

// Accessing object properties with dot notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// Accessing object properties with bracket notation

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the dark": "water"
};

var entreValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

// Accessing object properties with variables

var testObj = {
    12: "Nameth",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

// Updating object properties

var ourDog = 1 {

"name": "Camper",
"legs": 4,
"tails": 1, 
"friends": ["everything"]
};

ourDog.name = "Happy camper";

var myDog = {
"name": "Coder",
"legs": 4,
"tails": 1, 
"friends": ["Hello"]
};

myDog.name = "Happy Coder";

// Add new properties to an object

ourDog.bark = "how-wow";

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog['bark'] = "woof!"

// Delete propoerties from an object

var ourDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

delete ourDog.bark;

// Using objects for lookups

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "Charlie": "Chicago"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticlookup("Adams"));

// Testing objects for properties

var myObj = {
    gift: "pony",
    pet: "Kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    myObj.hasOwnProperty(checkProp) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"));

// Manipulating complex objects

var myMusic = [
    {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats":[
        "CD",
        "8t",
        "LP"
    }
    ],

// Acessing nested objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

// Accessing nested arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

// Record collection

// Iterate with while loops

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

// Iterate with for loops

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);

// Iterate odd numbers with a for loop

var ourArray = [];

for (var i = 0; i < 10; i +=2) {
    ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

// Count backwards with a for loop

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

console.log(ouArray);

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);

// Iterate through an array with a for loop

var ourArray = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i]
}

console.log(total);

// Nesting for loops

function multipleAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product);

// Iterate with do... while loops

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);

// Profile lookup


// Generate random fractions

function randomFraction() {

    return Math.random();
}

console.log(randomFraction());

// Generate random whole numberes

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomwholeNum());

// Generate random whole numbers within a range

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() + (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);

// Use the parseINT function

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

// Use the parseInt function with a radix

function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");

// Use the conditional (ternary) operator

function checkEqual(a, b) {
    return a === b ? true : false; 
    return a === b;
}

checkEqual(1, 2);

//  Use multiple conditional (ternary) operations

function checkSign(num) {
    return num > 0 ? "positive" : < 0 ? "negative" : "zero"
}

console.log(checkSign(10));

// Differenes between the var and let keywords

let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk();

// Compare scopes of the var and let keywords

function checkScope() {
    "use script";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("function scope i is: ", i);
    return i;
}

checkScope();

// Declare a read-only variable with the const keyword

function printManytimes(str) {
    "use strict";

    const sentence = str + " is cool!";

    sentence = str + " is amazing!"

    for (let i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
}

printManytimes("freeCodeCamp");

// Mutate an array declared with const

const = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2; 
    s[1] = 5;
    s[2] = 7;
}

editInPlace();
console.log(s);

// Prevent object mutation

function freezeObj(
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
)

Object.freeze(MATH_CONSTANTS);

try {
    MATH_CONSTANTS.PI = 99;
} catch( ex ) {
    console.log(ex);
}
return MATH_CONSTANTS.PI;


const PI = freezeObj();

// Use arrow functions to write concise anonymous functions

const magic =  () => new Date();


// Write arrow functions with parameters

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// Write higher order arrow functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers;
};

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);


// Write higher order arrow functions

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

// Use the rest operator with function parameters

const sum = (fucntion() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));

// Use the spread operators to evaluate arrays in-place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);

// Use destructuring assignment to assign variables from objects

// Destructuring assignment with nested objects

const LOCAL_FORECAST = {
today: { min: 72, max: 83},
tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxofTMRW(forecast) {
    "use strict";

    const { tomorrow : { maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxofTMRW(LOCAL_FORECAST));




