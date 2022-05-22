console.log("DSA part 2");

/*
Object functions
freeze
*/

const obj = {
    name:"Relevel"
};

console.log(obj.name);
/*  Object.freeze(obj);
    obj.name = "Not Relevel";
    console.log(obj.name);
*/
console.log("-------- seal -------");
Object.isFrozen(obj);

/*
seal
*/

// Object.seal(obj);
obj.name = "Not Relevel";
console.log(obj.name);

/*
isSealed()
*/
Object.isSealed(obj);

obj.age = 10;
console.log(obj);


/*
Person
name city age state
*/


console.log("Higher Order Array Methods");

/*
Map //// map

[1,2,4,6,9] => [2,4,8,12,18];
*/

var x = [1,2,4,6,9];
var newValues = x.map(alskdjflk => alskdjflk*alskdjflk);
console.log(newValues);
console.log(x.map(alskdjflk => alskdjflk*2));

/*
input - [pencil, state, jug];
output- [pencils, states, jugs];

1. pick a word
append s
*/

var z = ["pencil", "state", "jug"];
var y = z.map(word => word+"s");
console.log(y);

/*
    filter();
*/

let filteredZ = z.filter(n => n.length < 5);
console.log(filteredZ);

/*
add all numbers in an array

for 
take a variable "sum" to hold the sum of numbers
sum += currentValue;

previousValue
currentValue
currentIndex
array
*/

let reducedX = x.reduce((prevValue, input) => prevValue + input);
console.log(reducedX);

/*
forEach()
iterates over all input values
forEach does inplace processing -> does not create a new array
*/

/*
sort

*/

let numbers = [1,6,9,2,7,3,5];
let ltoH = numbers.sort((a, b) => b-a);
console.log(ltoH);

var reverseExample = [4,1,7,9,3,5];
console.log(reverseExample.reverse());

let sliceInput = [3,2,6,8,1,0];
console.log(sliceInput.slice(3));

let name1 = "Relevel";
let splitName = name1.split("");
console.log(splitName);
console.log(name1.slice(3,5));

function sortMyArray(arr) {
    // process to sort

    return sortedArray;
}

let spliceInput = ["apple", "banana", "orange", "kiwi"];
// let spliceOutput = spliceInput.splice(0,1);
let as = spliceInput.splice(2,0,"akjshf", "Task");
console.log(as);
console.log(spliceInput);

console.log("Destructuring");
/*

*/

let person = {
    fName: "foo",
    lName: "bar",
    age:30
};

// person.fName 
// person.lName
// person.age

// let {fName, lName, age} = person;
// console.log(fName, lName, age);
let {fName:firstName, lName:lastname, age} = person;
console.log(firstName, lastname, age);

// let person1 = {
//     parentLName: "some",
//     childData:{
//         name2:"foo",
//         age:
//     }
// }



/*
Problem 

a = [1,3,2,2,5];
output = [1,5,2,3,2];
even positioned items greater than 
odd positioned items

1. sort
 [1,2,2,3,5]

iterate through array
if even index -> insert the largest left value

*/

// [1,3,2,2,5]
function solveProb (inputArray, n) {
inputArray.sort();
console.log(inputArray, n);
let p = 0; 
let q = n-1;
let result = [];
//[1,2,2,3,5]
for(let i=0; i<inputArray.length ; i++) {
    if((i+1)%2 == 0)
    {
        result[i] = inputArray[q--];
    } else {
        result[i] = inputArray[p++];
    }

}
return result;

}

let finalResult = solveProb([1,3,2,2,5], 5);
console.log(finalResult);

/*
Write a program to compare Objects without using any in-built function
Input - obj1 - {name:”John”, age:23,degree:”CS”}
obj2 - { age:23,degree:”CS”}
Output - true(Since same key have same values)
*/