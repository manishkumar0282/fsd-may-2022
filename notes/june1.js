console.log("Revision - Advance Function concepts -1");

/*
Pass by Value
Pass bt Reference
Pure/ Impure function
Closure
*/

var globalVar = 0;

function passByValue(a,b) {
    a   +=  1; //11 /12 /
    b   +=  2; //14 /16
    globalVar = a+b;
    console.log("Inside a = "+a+" b = "+b);
}
console.log("globalVar "+globalVar);
let a = 10; //11
let b = 12; //14
console.log("Before a = "+a+" b = "+b);
passByValue(a,b);
console.log("After a = "+a+" b = "+b);
console.log("globalVar "+globalVar);


function passByReference(arr) {
    // create a local copy of arr
    let temp = [];
    for(let i = 0; i<arr.length; i++) {
        temp[i] = arr[i];
    }

    for(let i = 0; i<arr.length; i++) {
        temp[i]++;
    }
    console.log("Inside arr = "+arr);
}

let arr = [1,2,3,4];
console.log("Before arr = "+arr);
passByReference (arr);
console.log("After arr = "+arr);


let num = [3,5,7,8,9,1,4,2]
let temp = []
temp.push( num.sort())
console.log(num)
console.log(temp)

/*
Pure/ Impure
*/
function pureFunction(a, b) {
    return a+b;
}

console.log(pureFunction(2,3));

function impureFunction(str) {
    globalVar += str+Math.random();
    return globalVar;
}

/*
Closure
*/
function parent() {
    let x = 2;
    console.log(x);

    function child() {
        console.log(x += 5);
    }

    return child;
}

console.log("Closure");
let cFunction = parent();
cFunction();
cFunction();

function mulitplyMatrix(m1,m2,n){
    console.log(m1);
    console.log(m2);
    let res = new Array(n);
    for(let i=0; i<n; i++) {
        res[i] = new Array(n);
        for(let j=0; j<n;j++) {
            // populate result matrix with 0
            res[i][j] = 0;
            for(let k = 0; k<n; k++){
                res[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }

    console.log(res);
}
/*

*/
let m1 = [[1,2],[3,4]];
let m2 = [[4,5],[6,7]];
mulitplyMatrix(m1, m2, 2);

/*      
        1,2,3
        4,3,1
        4,5,7
    Print unique number
*/

arr = [[2, 14, 1, 18], [10, 18, 14, 22], [8, 21, 22, 15], [10, 14, 21, 28]];
var n = 4; // arr.length
function findUniqueElement(arr, n) {
    // find max value
    let flag = 0;
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (max < arr[i][j]) {
                max = arr[i][j];
            }
        }
    }
    // console.log(max);
    // create 1-D binary Array
    let binaryArray = Array(max + 1).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            binaryArray[arr[i][j]]++;
        }
    }
    // console.log(binaryArray);

    // print unique element
    for (let i = 1; i <= max; i++) {
        if (binaryArray[i] == 1) {
            console.log(i + " ");
            flag = 1;
        }

        if (flag == 0) {
            console.log("No unique element found.")
        }
    }
}

findUniqueElement(arr, n);

/*
****
*  *
*  *
*  *
*  *
****

run a loop 6 times
run a loop for 4 cols for each row
****
*  *
*  *
*  *
*  *
****
if row == 0 or == 6th
    print all columns 
else 
    print 1st & last cols


    if(parseInt(n/2) == rowCount) {
        //reverseDirection
    }
      *     // 2*rowCount+1 / rc = 0 == 1
     ***    // rc = 1 => 3
    *****   // rc 2 => 5
   *******  // rc = 3 ... parseInt(n=7/2)
    *****
     ***
      *
print n rows
print cols for growing triangle
after row = mid of total rows
print shrinking triangle
*/

/*
    input - 2356481790
    4,6 //// 64

    [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0]

1,2 --- 2^n 
11
12
21
22


    000
    (100)
    000
    001
    010
    100
    011
    101
    110
    111
base 2--- 2^digits in number
*/