/* Data Types:
undefine, null, boolean, string, symbol, number, object
*/

var myName = 8

myName = "Hanzala"

let ourName = "Webdeveloper"

const pi = 3.14

// Assigning and declaring variables

var a;

var b = 2;

console.log(a);

a = 7;

b = a;

console.log(a)

// Initializing variables with assignement operator

var c = 9;

console.log(c)

// Uninitialized Variables

var d;
var e;
var f;

// intitializing variables

d = 5;
e = 10;
f = "I am a";

// do not change code below this line

d = d + 1;
e = e + 5;
f = f + " String! ";

console.log(d)
console.log(e)
console.log(f)

// Case sensitivity

// Declarations

var studLyCapVaR;
var properCamelCase;
var titleCaseOver;

// Assignments

studLyCapVaR = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

console.log(studLyCapVaR)
console.log(properCamelCase)
console.log(titleCaseOver)

// algebra

var sum = 10 + 10;
var difference = 10 - 20;
var product = 8 * 10;
var quotient = 66 / 10;


console.log(sum)
console.log(difference)
console.log(product)
console.log(quotient)

// incrementing means adding 1

var myVar = 69;

// ++ and + 1 means the same

myVar++;

console.log(myVar)

// decrementing means subtracting 1

//  -- and - 1 means the same

myVar--;

console.log(myVar)

// Decimal Numbers

var ourDecimal = 5.7;

console.log(ourDecimal)

var myDecimal = 0.9838498732424897; 

console.log(myDecimal)

// Multiply/divide decimal

var decProduct = 2.0 * 1.29;
var decQuotient = 2.0 / 1.9;

console.log(decProduct)
console.log(decQuotient)

// finding remainder

var remainder;

remainder = 11 % 2;

console.log(remainder)

// compound assignment

var g = 3;

var h = 17;

var i = 12;

var j = 39;

var k = 69;

g += 7

h -= 3

i *= 5

j /= 13

k %= 5

console.log(g)
console.log(h)
console.log(i)
console.log(j)
console.log(k)

// string variables

var firstName = 'Huzaifa'
var lastName = 'Khalil'

var myFirstName = "Hanzala"
var myLastName = "Khail"

console.log(firstName)
console.log(lastName)
console.log(myFirstName)
console.log(myLastName)

// escaping literal quotes in JavaScript

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

console.log(myStr)

// quoting with single quotes

var myStr2 = '<a href="http://www.youtube.com"'

var myStr3 = `'"http://www.youtube.com"'`

console.log(myStr2)
console.log(myStr3)

/* 
escapind out 

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

var myStr4 = "First line\nsecond line\n\t\\thrid line";

console.log(myStr4)

// Concatenating strings with plus operator

var ourStr = "i come first" + " i come scnd";

console.log(ourStr)

var myStr5 = "This is the start." + " This is the end."

console.log(myStr5)

// Concatening stirngs with plus eqaul to operator

// example
var ourStr2 = "i come forst "
ourStr2 += "i come cnd"

console.log(ourStr2)

// my turn

var myStr6 = "First"
myStr6 += " Scn"

console.log(myStr6)

// constructing strings with variables

var myStr7 = "My name is " + myFirstName + " " + myLastName +" how r u?"

console.log(myStr7)

// appending variables to string

// example

var anAdjective = "beautiful!";
var ourStr3 = "I am ";
ourStr3 += anAdjective;

console.log(ourStr3)

// find length of string

// example

var firstNameLength = 0;

firstNameLength = firstName.length

console.log(firstNameLength)

// bracket notation to find character in string

var firstNameLetterFinding 

firstNameLetterFinding = firstName[5];

console.log(firstNameLetterFinding)

// bracket notation to find last character in string

var lastNameLastLetter;

lastNameLastLetter = lastName[lastName.length - 1]

console.log(lastNameLastLetter)

// strings are immutable remember that i guess i dont know if that is helpful or not i just wanted to type

// word blanks


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store" + " " + myAdverb + "."

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
  
// storing multiple values with arrays

// example

var ourArray = ['John',23,12];

console.log(ourArray)

// my example

var myArray = ["Quincy",1];

console.log(myArray)

// Nested Array 

// Example

var ourArray2 = [["the unoverse", 42],["everything",1010010]];

console.log(ourArray2)

// my example

var myArray2 = [["the jhahfjajk",1722173],[['ahfs',2527],['askhasfkkf',123]]];

console.log(myArray2)

// access array data with indexes

var ourData;
var ourData = ourArray[1]

console.log(ourData)

// modify array with indexes

var ourArray3 = [20,30,41]

console.log(ourArray3)

ourArray3[2] = 40;

console.log(ourArray3)

// access nested array with indexes

var ourData2 ;
ourData2 = ourArray2[1][0];

console.log(ourData2)

// add and remove data from arrays with push (), unshift(), pop() and shift()

var myArray3 = ['Simple',2019,2022];

console.log(myArray3)

// add data at end in array with push()

myArray3.push('Complex',2022,2025);

console.log(myArray3)

// add data at start in array with unshift()

myArray3.unshift('Dimple')

console.log(myArray3)


// remove and save last element from array with pop()

var removedFromArray;

removedFromArray = myArray3.pop()

console.log(myArray3)
console.log(removedFromArray)

// remove and save first element from array with shift()

var removedFromArray2;

removedFromArray2 = myArray3.shift();

console.log(myArray3)
console.log(removedFromArray2)

// shopping list

var myList = [['cereal',3],['milk',2],['bananas',3]];

console.log(myList)

// reuseable code with functions

function ourReuseableFunction() {
    console.log("Hello!,World");
}

ourReuseableFunction();
ourReuseableFunction();

function reuseableFunction() {
    console.log('That\'s so cool.',12);
}

reuseableFunction();

// passing values to functions with arguments


function functionWithArgs(a, b, c) {
    console.log(b + c - a);
    console.log(b - c - a);
    console.log(a += b);
    console.log(a % b);
    console.log(a = b);
    console.log(a = c);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(c + b);

}

functionWithArgs(3, 2, -1);

// global scope and function

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal=" + myGlobal + '  '; 
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal=" + oopsGlobal;
    }
    console.log(output)    
}

fun1();
fun2();

// local scope and function

function myLocalScope() {
    var myVar = 5;
    console.log(myVar)
    
}
myLocalScope();

console.log(myVar)

// Global vs Local vars

var outerWear = 'T-Shirt'

function myOutfit() {
    var outerWear = "sweater";
    outerWear = outerWear
    return outerWear
}


console.log(myOutfit());
console.log(outerWear)

// returning a value

function minusSeven(num) {
    return num - 7  
}

console.log(minusSeven(18))

// understanding undefined values returned from a function

var sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5
}

// Assignment with a returned value

var changed ;

function change(num) {
    return (num +8) / 3;
}

changed = change(13);

console.log(changed)

// stand in line(cue)

function nextInLine(arr, item) {
    
    arr.push(item)
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean values

function welcomeToBooleans() {
    return true ;
}

function welcomeToBooleans() {
    return false;
}

// If statements

function outTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it is true.";
    }
    return "No, it is false;"
}

function TrueORFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true.";
    }
    return "No, that was false";
}

console.log(TrueORFalse(true));

// Equality operator

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(12))
console.log(testEqual('12'))
console.log(testEqual(11))

//  Strict Equality

function testStrict(val) {
    if (val === 3) {
        return 'True';
    }
    return 'False';
}

console.log(testStrict(3))
console.log(testStrict('3'))

// Practice comparing different values

function compareEquality(l, m) {
    if (l == m) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10,"10"))

function compareEquality2(n, o) {
    if (n === o) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality2(10,'10'))

// Inequality operator

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10))

// Strict Inequality

function testStrictNotEqual(val) {
    if (val !== 97) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual('97'))

// Greater Than Operator

function testGreaterThan(val) {
    if (val > 100) {
        return 'Over 100';
    }    

    if (val > 10) {
        return 'Over 10';
    }

    return '10 or Under';
}

console.log(testGreaterThan(20))

// Greater Than or Equal to operator

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return '20 or Above';
    }

    if (val >= 10) {
        return '10 or Above';
    }
    return 'Less Than 10'
}

console.log(testGreaterOrEqual(17))

// Less Than

function testLessThan(val) {
    if (val < 10) {
        return 'Under 10';
    }    

    if (val < 100) {
        return 'Under 100';
    }

    return '100 or Above';
}

console.log(testLessThan(20))

// Less Than Or Equal

function testLessOrEqual(val) {
    if (val <= 10) {
        return '10 or Under';
    }

    if (val <= 20) {
        return '20 or Under';
    }
    return 'More Than 20'
}

console.log(testLessOrEqual(17))

// And Operator

function testLogicalAndOperator(val) {
    if (val <= 50 && val >= 25) {
        return 'Yes';
    }
    return "No";
}

console.log(testLogicalAndOperator(25))

// Or Operator

function testLogicalOrOperator(val) {
    if (val <10 || val > 20) {
        return "Outside";
    }
    return "Inside"
}

console.log(testLogicalOrOperator(15))

// Else Statements

function testElse(val) {
    if (val > 5) {
        result = "Value is more than 5";
    }
    else {
        result = "Value is less than or equal to 5"
    }
    return result;
}

console.log(testElse(5))

//  Else If

function testElseIf(val) {
    if (val > 10) {
        return "Greater Than 10";
    } else if (val < 5) {
        return " Less than 5"
    } else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(9))

// Logical order in Else If statements (The order of If Else operators is important)

// Wromg order of If Else Operators

function wrongOrder(val) {
    if (val < 10) {
        return "less than 10"
    } else if (val < 5 ){
        return "less than 5"
    } else {
        return "Greater than equal to 10"
    }
}

console.log(wrongOrder(4))

// Right Order of If Else operators

function rightOrder(val) {
    if (val < 5){
        return "less than 5";
    } else if (val < 10){
        return "less than 10";
    } else {
        return "more than or equal to 10"
    }
}

console.log(rightOrder(4))

// Chaining If Else

function testSize(num) { 
           if (num < 05 ) {
        return "Tiny";
    } else if (num < 10 ) {
        return "Small";
    } else if (num < 15 ) {
        return "Medium";
    } else if (num < 20 ) {
        return "Large"; 
    } else {
        return "Huge";
    }
}

console.log(testSize(21))

// Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6]
    }
}

console.log(golfScore(5,2))

// Switch Statements

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

caseInSwitch(4)

console.log(caseInSwitch(4))

// Default option in switch statement

function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        case 'd':
            answer = 'dog';
            break;   
        default:
            answer = "stuff";
            break;     
    }

    return answer;
}

console.log(switchOfStuff('a'))

function sequantialSizes(val){
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
            answer = "High";
            break;        
    }

    return answer;
}

console.log(sequantialSizes(3))

// replacing if else with switch

function chainToSwitch(val) {
    var answer = '';

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer"
            break;
        case 1:
            answer = "There is no #1"
            break;
        case 99:
            answer = "Missed me by this much!"
            break;
        case 7:
            answer = "Seven ate Nine"
            break;
    }

    return answer;
}

console.log(chainToSwitch(7))

// Returnin boolean values from functions

function isLess(a, b) {
    return (a < b)
}

console.log(isLess(284789430, 15))

// Returnin early pattern from functions

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(3,2));

//  Counting Cards

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

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }


    return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4))

// Object

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tail": 1,
    "friends": ["everything!"]
};

console.log(ourDog);

// Dot notation

var testObj= {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

















































































































































































































































































































































































































































































































