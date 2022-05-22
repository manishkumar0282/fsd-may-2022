
let a = 23456;
console.log(a%1000);


// var res = sayHello();
var sayHello = function() {
    console.log("hey");
}

console.log(sayHello);

console.log("DSA");

/*
    calculate average area of house in Delhi

    1. calculate area of each house
    2. add all these areas
    3. divide by total number of houses
*/
// totalNumberOfHOuses = 50 lakh
// 50 lakh variables to area of each house
function averageArea(totalNumberOfHOuses, totalAreaOfAHOuses){ 
    return totalAreaOfAHOuses/ totalNumberOfHOuses;
} 
var totalArea = 0;
function addArea(newArea) {
    totalArea += newArea;
}

// Data Structure --> structured represntation of Data
// Array, Map, tree, RBTree, AVL, BST , Binary

// Array // var, let, const
/*
    var a;// do not occupy space in mem
    a = 5; // occupies space

    var a = 5;
*/
var numbers = [1,2,3,4,5];// size 5
var cities = ["Delhi", "Bangalore", "Noida"]; //size 3

var counts = new Array(2); // reserving a size of 2 continuous locations  in memory
var akjs =  new Array("manish", "relevel", "Microsoft");

console.log(numbers);
console.log(akjs[0]);
console.log(akjs[3]);// 0, 1, 2

for(let i=0; i< akjs.length ; i++){
    console.log(akjs[i]);// 0, 1, 2
}


let multiDimArray = [[1,2], [5,6]];
console.log(multiDimArray);
console.log(multiDimArray[0]); // [1,2]
console.log(multiDimArray[0][0]);// [1,2] [0] => 1

console.log(multiDimArray[0][1]);

function printArray(arr) {
    console.log(arr);
}

printArray(multiDimArray);


console.log(" -------- Objects -------");

/*  anything that occupies space is an object
    they have properties, and these properties wil have values
    they might have some associated functionalities as well

    array... 
    .length -- count of elements in that
    string ... 


    Human --> Manish an instance of Human

    let a = [1,2,3]; ==> object

*/

let table = {
    legs: 4, // key: value
    type:"dining",
    height:5,
    "width":10
}

console.log(table);
console.log(table.width);

// for(const key in table.key){
//     console.log(key);
// }
/*
for .. in
*/

for(const key in table)
{
    console.log(table[key])
}

/*
JSON - Javascript Object Notation
key: values

{
    "model": "Ertiga",
    "make": "Maruti",
    "othermodels":["x","y","z"]/6
}

JSON object & Javascript Object
1... "key": value---------- "" not needed
2... 6 types of values... string, number, null, objects, array, boolean





        JSON Object
        {
            "model": "Ertiga",
            "make": "Maruti",
            "othermodels":["x","y","z"]
        }

        2...JS Object
        let table = {
            legs: 4, // key: value
            type:"dining",
            height:5,
            "width":10
        }

        write a program to print alternative values from an array

        1,2,3,4,5,6,7,8,9
10,20,30
        1,3,5,7,9

        for -> 
        iterate over all possible set of values
        print first n natural numbers

 */

        function printAlternates(arr) {
            for(let i=0; i<arr.length; i++) {
                i = i+1;
                console.log(arr[i]);
            }
        }
console.log("printAlternates");
        printAlternates([1,3,5,7,8,9]);


//