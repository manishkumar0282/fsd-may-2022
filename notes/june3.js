console.log("Advanced Function concept - 2");

console.log('HOF');
function add(a,b) {
    return a+b;
}
let sum = add(2,3);//5
// sum = 5;
console.log(sum);
console.log(5);

// Perform function log
// Perform function "add"
console.log(add(2,3));

/*
Composability
g(f(x)) --> an HOF

Currying

bringMilk(1)
goPlayOutSide(60)

function goPABM(1, 60) {

}

goPlayOutSide(60).bringMilk(1)?
*/

function multiply(a,b,c) {
    return a*b*c;
}

console.log(multiply(10,2,3));

function alternateMultiply(a) {
    return function (b) {
        return function (c){
            return a*b*c;
        }
    }
}

let m1 = alternateMultiply(10);
/*
m1 = function (b) {
        return function (c){
            return a*b*c;
        }
    }*/
let m2 = m1(2);
/*
function (c){
            return a*b*c;
        }
*/

let m3 = m2(3);
/*
    return a*b*c = 
*/

console.log("m3 "+m3);

console.log("m3 chained "+ alternateMultiply(10)(2)(3));

/*
  Anonymous function  
*/
function functionName(a, b, c) {
    // statements
    let prod = a*b*c;
    return prod;
}

functionName(10,2,3);

const somename = function (a,b,c) {
    // statements
    let prod = a*b*c;
    return prod;
}

console.log(somename(10,2,3));

/* 
syntax --> (param1, param2) => {

}
*/

//(a,b) => a-b
// if there is only one line of executable statement we do not 
// need braces or return statement
const sumOfNumbers = (a,b) => a+b;

console.log(sumOfNumbers(2,3));

(function (a,b){
    console.log("IIFE", a+b);
}(2,3));

/*
var name = window.prompt("Enter your name here");
window.alert(`oh your name is ${name}`);

the below line does not work on nodejs
let name = prompt("Enteryour name");
*/

function sortArray(arr) {
    console.log(arr.sort());
}

const readFromConsole = require("readline");
const rl123 = readFromConsole.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let myArray;

rl123.question("Enter first number ", (num1) => {
    rl123.question("Enter second number ", (num2) => {
        let res = parseFloat(num1)+parseFloat(num2);
        console.log("Result is : ",res);
        rl123.close();
    });
});

// rl.question("What is your name? ", (name) => {
//     myArray = name.split(",");

//     sortArray(myArray);

//     rl.close();
// });