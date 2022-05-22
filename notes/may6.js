console.log("May 6 - Intro to Functions");

// var x = 2+3;
// let localVariable = 5;
// console.log(x);

// 1. Add two numbers 
// 2. check if the sum is greater than 10 
// 3. If yes then subtract 10 from the sum or 
// 4. add 10 to the sum 
// function (keyword) functionaName (argument1, argument2, ......)
// improves readability
// Increases Reusability
// function calculateIfSumIsGreaterThanTen(sum) {
    
// }

// function solveProblem(first, second) {
//     //1 add two numbers
//     let sum = first + second;

//     //2. 
//     if (sum > 10) {
//         calculateIfSumIsGreaterThanTen(sum);
//     } else {
//         //statements 
//     }

//     console.log(sum);
// }

// // Function Invoking
// solveProblem(10, 12);

// reduce redundancy or duplicacy
// reduced the number of LOC (lines of Code)
// improved readability
// change is centralised/ concentrated
// function boilwater () {
//     // pour water in Kettle
//     // switch on kettle
//     // if temprature is more than 100 -> boil else keep boiling
// } 

// scope of function is defined by {}
// function prepareTea () {
//     boilwater();
// }

// function prepareCoffee () {
//     boilwater();
// }

// scope of variables
// 1. Global
// 2. Local
// 3. blocke scope


// function checkScope() {
//     console.log(x + localVariable);
// }

// var checkScopeNew = function () {
//     let d = 7;
//     let e = 3;
//     console.log(d+x + localVariable+e);
// }

// checkScope();
// checkScopeNew();





// function someOperation() {
//     let obj = 5;
    
//     return function() {
//         console.log("My value is " + obj);
//     } 
// }

// let x = someOperation(); 
// /*
// function() {
//         console.log("My value is " + obj);
//     } 
//     */

// x();

// function add(x,y) {
//     var z = x+y;
//     return z;
// }


// let age = add(2,5)*2;

// console.log(age);


// try-catch

try {
    // performOperation(); //statements
    console.log("hi");
} catch (error) {
    console.log("fn does not exist "+ error); //failed
} finally {
    console.log("write the missing api");
}


/*
f(x,y)....
f(x,y) = x+y // if both x & y are even 
f(x, y) = 2x - y*y, if any one of x, y is odd and the 
                    other is even

find the value of ----- f(2,3) - f(2,4)

*/



function checkScope() {
    let xk;

    for (let i=0; i < 10; i++){
        let ja = 10;
        xk = 9;
    }

    ja = 7;
}