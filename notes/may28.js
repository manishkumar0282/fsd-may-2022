console.log("--Problem solving -- loop--");

for(let i=0; i<10;i++){
    console.log(i);
}
/*
i = 0; true; iteration happens only after the execution of current value
console.log(i);
++i // i = i+1

i=1; i<10
console.log(1)
++i
*/

console.log("-----")
for(let i=0; i<10;i=i+1){
    console.log(i);
}

/*
i = 0; true; iteration happens only after the execution of current value
console.log(i);
i++ // i = i+1
i=0
arr[++i] = "s"; //i = 1
arr[i++] = "s";// i =0
*/

/*
nested loop
for() {
    for(){
        for(){

        }
    }
}
*/


/*
input:  [1,5,7,6] 'integers'
        targetSum = 6
        
    Q: count the number of pairs 
    whose sum is equal to targetSum

    1,5 6 -----1
    1,7 8
    1,1 2
    5,7 12
    5,6 11
    7,1 8

    output = 1


*/
// 
function countPairWithSumAsTarget(arr, targetSum){
    let count = 0;
    // n times
    for(let i=0; i<arr.length; i++) {
        // n times
        for(j=i+1; j<arr.length; j++) {
            let sum = arr[i] + arr[j];
            if(sum == targetSum) {
                count++;
            }
        }
    }

    return count;
}
//O(N*N)
let arr = [1,1,1,1];
let targetSum = 2;
console.log("--- countPairWithSumAsTarget --");
console.log(countPairWithSumAsTarget(arr, targetSum));

// 1,1,1,.... target = 2
function countPairsOptimized(arr, targetSum) {
    let m = {};

    //first pass
    // calculate the diff
    // O(n)
    for(let i=0; i<arr.length;i++){
        if(m[arr[i]]) {
            m[arr[i]]++;
        } else {
            m[arr[i]] = 1;
        }
    }

    console.log(m);
    let count = 0;
    // O(n)
    // 1 3 5 7
    for(let i=0; i<arr.length;i++){
        let diff = targetSum - arr[i];
        // 6 - 1 = 5 for i=0
        count += m[diff] ? m[diff] : 0;
        // diff = 3 arr[1] = 3.... i & j=i
        if(diff == arr[i]) count--;
    }   
    return count/2;
}
// 1, 3, 5 ,7
console.log("-- countPairsOptimized--");
console.log(countPairsOptimized(arr,targetSum));

/*
    find a missing number
    input -> length of array = N
    array that contains n-1 elements
    eg; n = 5, input 1,2,4,5
    missing element is 3 here

    if you can't find return -1

    1 .... 10^6
    no duplicates
*/

let missingArray = [1,2,4,5];
function findMissingNumber(arr, n) {
    // sum of first n natural numbers = n*(n+1)/2
    let es = n*(n+1)/2;
    //eg; n = 5 es = 5*(5+1)/2 = 15
    // find the sum of elements of array = actualSum
    // es - as = answer
    // 1,2,4,5
    // ac = 12
    // diff = es - as = 3
    let as = 0;
    for(let i=0; i<n-1; i++) {
        as += arr[i];
    }

    return es - as;
}

function findMissingNumberAnotherWay(arr) {
    // 1,2 4,5
    // 2,4,1,5 -> sort -=== 1,2,4,5
    arr = arr.sort();
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != (i+1)) {
            return i+1;
        }
    }

    return -1;
}

console.log(findMissingNumberAnotherWay(missingArray));

/*
    given an array of integers, sum
    Q: find the subarrays whose sum is equal 
    to the given sum

    if there is no subarray, return -1

    condition; subarray is continuous
    eg: 1,2,3,7,5
    length = 5
    sum = 12

    output: 2,3,7
*/
let sumSubArray = [1,2,3,7,5];
let sum = 12;
function findSubArrayWithSum(arr,n,sum) {
    let currentSum = 0;
    let result = [];
    for(i=0; i<n;i++){
        currentSum = arr[i];
        for(j=i+1;j<n;j++){
            if(currentSum == sum) {
                result[0] = i+1;
                result[1] = j;
                return result;
            }
            if(currentSum > sum) {
                break;
            }
            currentSum += arr[j];
        }
    }
}


console.log(findSubArrayWithSum(sumSubArray, 5, sum));


for(i=0; i<10;i++){
    if(i==4){
        continue;
        // only skip the rest of statements for this value
        // in this case i = 4
    } 
    if(i==8){
        break;
        // break out of loop if i == 8
    }

    console.log(i);
}

// 0,1,2,3,4,5,6,7,8,9
// 0,1,2,3,5,6,7