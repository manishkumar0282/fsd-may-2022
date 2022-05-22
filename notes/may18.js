/*
Given an array, print min & max from the array
eg: [2,5,1,9,6,100,43]
Ans: min = 1 Max = 100


approach 1: sort ascending/ descending-> 1st and last 
approach 2: linear search with pointers


irrespective of the values, 
Assumptions: 
1. the first value is minimum
2. value at first index is maximum
3. check if min/ max is correct
[2,1]

*/ 

var arr = [2,1,5,9,6,100,43]; // [1,2]
function printMinMax(arr) {

    if(arr.length == 0) {
        return;
    }

    let min = arr[0]; // 2
    let max = arr[1]; // 1

    // if min max are correct /// swapping
    if(min > max) {// is 2>1
        let temp = min; // temp = 2.... storing in a temporary variable value of min
        min = max; //min = 1
        max = temp; // max = temp = 2

        //min = max ==== 1
        // preserve the value of min.... temp = min
        //max = temp ==== 2
    }

    // min = 1
    // max = 2

    // 0, 1
    //[2,1,5,9,6,100,43]

    // min > 5 ==> 1 > 5
    for (let i=2; i<arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i]; //min = 1
        } 
        // max < 5 ==> 2< 5
        else if (max < arr[i]) {
            max = arr[i]; // max = 5
        }
    }

    console.log( "Min value is "+min);
    console.log( "Max value is "+max);
}

printMinMax(arr);

/*
    Find Maximum profit from trading
    price = [10, 12, 8, 20, 12, 18, 10]
    max profit
    ... buy sell
    buy in 10 on day 1 and 
        sell on day 2 === 12-10 = 2
        sell on day 3 ==== 8 - 10 = -2

    Find the maximum Profit
*/

function maximumProfit(price){
    let maxprofit = 0;

    // price = [10, 12, 8, 20, 12, 18, 10]
    for(let i=1; i<price.length; i++) {
        // i = 3
        // 20 > 8
        if(price[i] > price[i-1]) {
            // mp = 2+12
            maxprofit += (price[i] - price[i-1]);
        }
    }

    console.log("Max Profit is "+ maxprofit);
}
let price = [10, 12, 8, 20, 12, 18, 10];
maximumProfit(price);

/*
    input - [1,3,5,2,3]
    Reverse the given array
    output - [3,2,5,3,1]

    start from the end -> print till the first

*/

// function reverseInputArray(arr){
    
// }
// let input = [1,3,5,2];
// reverseInputArray(input);

/*
    input - [1,2,3,6,5,4];
    1,2,3,4,5,6
true/ false

    Ques: if reversing a subarray will sort the given array
    Output - true/ false


    // length = 1... [2]
*/

function checkSorted(arr) {

    // store in a temp array
    let temp = [];
    for(let i=0; i< arr.length; i++) {
        temp[i] = arr[i];
    }
    // input - 1,2,3,6,5,4
    temp.sort();
    // temp - 1,2,3,4,5,6

    //find first mismatch, we will start from begining
    let front ;
    for(front=0; front<arr.length; front++) {
        if(arr[front] != temp[front]) {
            break;
        }
    }

    let back;
    for(back = arr.length-1; back>=0; back--) {
        if(arr[back] != temp[back]) {
            break;
        }
    }   
    //front is greater than or equal to back
    if(front >= back) {
        return true;
    }

    // front is < back
    do {
        front++;
        if(arr[front-1] < arr[front]) {
            return false;
        } 
    }while(front != back);

     return true;
}

let input = [1,2,3,6,4,5];
let isPossible = checkSorted(input);
if(isPossible){
    console.log("Possible");
} else {
    console.log("Not Possible");
}