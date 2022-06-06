console.log("Revision post ilestone 2");

// let a=[
//     [ 1, 2, 3],
//     [ 4, 5, 6],
//     [ 7, 8, 9],
// ];
// let b=[
// [ 1, 2, 3],
// [ 4, 5, 6],
// [ 7, 8, 9],
// ];

/*
rowSum = 1+2+3 = 6
coSum = 1+4+7 = 12
*/
function sumOfRows(m1,m2) {
    // two loops
    // i 0-rows
    // j 0 cols
    // 1 = arr[0,0] 
    // 2 = arr[0,1]
    // 3 = arr[0,2]
    // rowSum1 ======= arr[0,0]+arr[0,1]+arr[0,2]
    // rowSum2 ======= arr[1,0]+arr[1,1]+arr[1,2]
    // rowSum3 ======= arr[2,0]+arr[2,1]+arr[2,2]
    // finalSum = rowSum1 + rowSum2 + rowSum3
}

/*
a,b
1 2

b = a ===> 1
a = b ===> 1

temp = b
b = a ===> 1
a = temp ===> 2

b=a
a=b
*/

/*
addition of two numbers
*/

// const readFromConsole = require("readline");
// const rl123 = readFromConsole.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let myArray;
// function sum(a,b) {
//     let res = parseFloat(a)+parseFloat(b);
//     console.log("Result is : ",res);
// }

//array.sort()
//rl.question()
// rl123.question("Enter first number ", (num1) => {
//     rl123.question("Enter second number ", (num2) => {
//         sum(num1, num2);
//         // let res = parseFloat(num1)+parseFloat(num2);
//         // console.log("Result is : ",res);
//         rl123.close();
//     });
// });

// rl123.question("Enter array ", (arr) => {
//         // 1,2,3,4,5
//         // 1 2 3 4 5 6
//         let arrOfNumbers = arr.split(",");
//         let nR = arrOfNumbers[0];//5
//         let nC = arrOfNumbers[1];//4

//         for(let i=0; i< nR; i++) {
//             let rowArray = new Array(nC-1);
//             for(let j=0; i< nC; i++) {
//                     // colArray assign it to rowArray 0 , 1, 2, 3, 4,
//                 }
//         }

//         // n^2
//         // n*n
//         // 5*4 or 4*5
//         // 4 5 6 7 8 9  1 1 2 23 4 5 6 77 0
//         // 6 7 8 9  1 1 2 23 4 5 6 77 0 4 6 3

//         rl123.close();
// });
// function create2DArray(num){

// }


// let arr = ["red", "orange"];
// console.log(arr[0]);
// console.log([a]);


// let platform ={
//     name: "relvel",
//     type: "test",
// };

// let pName = platform.name; //ES6 
// let {name:postEs6pName,  type:postEs6Type} = platform;

// {attribute1: newContainer1, attrib2:newContainer2} = platform;


// function sum(a,b) {
//     // compute addition
//     console.log(a+b);
// }

// // dont 
// sum(2,3);

//Q1
const duplicate = (arr) => {
	const obj = {};
	const newArr = [];
   	// Implementation logic here
    //    asfksadj
    return newArr
}

// [1.2.3.4.5.6.]
// const readFromConsole = require("readline");
// const rl123 = readFromConsole.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// rl123.question("Enter first number ", (num1) => {
//     let inp = readline().split(' ').map(item => parseInt(item));
//     let op = duplicate(inp);
//     console.log(op.join(' '))
// });


// const AmstrongNumber = (inp) => {
// 	let op = 0;
// 	// use process.stdout.write("hello") to print the output
//   	 //implement your  logic here - you dont have to return anything, print the output here
    
// 	if (inp == op) {
// 		console.log(inp + " is an Armstrong number");
// 	}
// 	else {
// 		console.log(inp + " is not an Armstrong number");
// 	}
// }

// const inp = "153";
// AmstrongNumber(inp);

// console.log(Date.now());
// setTimeout(() => {
//     console.log(Date.now());
// }, 1000);

/*
talk about the let vs var scenario in Deck - Bhuvaneswari
*/
// Math.sqrt(n) == number === parseInt(number); 1.234 .. 1

function perfsqr(n) {
    let sqRot = -1;
    for(let i=0; i<n/2; i++){
        if(i*i==n){
            //i - 0 1 2 3 4 5
            //n - 25 
           sqRot = i;
           break;
        }
    }

    if(sqRot == -1) {
        console.log(`${n} is not a perfect square`);
    } else {
        console.log(`${n} is a perfect square of ${sqRot}`);  
    }


}
// Math.floor ---> Floor .... 1.234... 1 (f) & 2(c)
// parseInt ----> 1.234 ... Integer -> 1 fraction = 234
// 
function perfectsqr(n){
    var x=parseInt(Math.sqrt(n));
    if(x*x==n){
        return true;
    } else{
        return false;
    }
}
// n .... n/2*n/2 n/2+1
perfsqr(25);
perfsqr(39);

/*
    1,2,3,4,5,6,7,8
    delete item at index 4

    let temp [];
    for(i=0; i<arr.length; i++) {
        if(i==3) {
            continue;
        }
        temp[i] = arr[i];
    }

    temp[1,2,3,5,6,7,8];
    remove all items from arr;
    for of temp length 
    copy from temp to arr

    arr is ready to be returned
*/
// i= 4
//  10, 12 11 14 13 15 16
// [12, 10, 15, 8, 11, 10, 16];
function sortedArray(arr) {
    let done = false;
     while (!done) {
       done = true;
       console.log("new for loop");
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i - 1] > arr[i]) {
           done = false;
          let tmp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = tmp;
        }
      }
    }
  
    return arr;
  }
  
  var numbers = [12, 10, 17, 11, 14, 8, 16];
  sortedArray(numbers);
  console.log(numbers);

  let firstMin = Number.MAX_VALUE;
  let secondMin = Number.MAX_VALUE;
  