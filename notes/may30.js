console.log("Probblem solving--- Array---");
/*
sparse array 

sparse matrix -> number of zeros is atleast more than 50% of array values
3*3 matrix -> 3*3 = 9 atleast 5 should be zero
4*5 matrix = 5*5 = 20 atleast 11 should be zero


*/

function validateSparse(arr, row, col) {
    // keep count
    let count=0;

    for(let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {
            if(arr[i][j] == 0) {
                count++;

                if(count > parseInt(row*col/2)) {
                    return true;
                }
            }
        }
    }

    return false;
}
let arr = [[1,10,15,10],[7,10,10,22],[0,0,0,0],[10,0,0,28]];
console.log(validateSparse(arr, 4,4));

/*
move all negative elements in an array to one side 
eg: -5,3-4,88,-9,10,21,5,6
output - 
*/
function negativesOnOneSide(arr, n) {
    let temp = new Array(n);
    let j = 0;
    for(let i=0; i<n; i++) {
        if(arr[i] >= 0) {// 0, 1, 
            //store all positive numbers in another temp array
            temp[j++] = arr[i];
        }
    }
    // temp contains all positive values
    // if all values were positive, there was no negative number in the array
    if(j == n || j ==0) {
        return;
    }

    // positive & negative both exist
    // temp contains all positives
    for(let i=0; i<n; i++) {
        if(arr[i] < 0) {// 0, 1, 
            //store all positive numbers in another temp array
            temp[j++] = arr[i];
        }
    }
    
    for(let i=0; i<n; i++) {
        arr[i] = temp[i];
    }
}
let negativeArray = [-5,3,-4,88,-9,10,21,5,6];
// console.log(negativeArray.sort());

negativesOnOneSide(negativeArray,9);
console.log(negativeArray);

/*
Reverse Array
1,3,2,4,9,5
5,9,4,2,3,1
*/
let revArray = [1,3,2,4,9,5,7];
// console.log(revArray.reverse());
function reverseArray(arr){
    console.log("Before -- "+arr);
    let start = 0;
    let end = arr.length-1;

    while(start <= end) {
        let temp = arr[end];
        console.log(arr[start]+" type = "+typeof(arr[start]));
        arr[end] = arr[start];
        arr[start] = temp;

        start++;
        end--;
    }

    console.log("After -- " +arr);
}

reverseArray(revArray);

/*
Rotate an array cyclically
input 1,2,3,4,5
output - 5,1,2,3,4

Approach 1
temp = endValue
shift all values to the next index
- 1,2,3,4
assign temp to arr[0]
5,1,2,3,4

Approach 2

*/

function cyclicallyRotateArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
    }

    console.log(arr);
}

let cycArray = [1,2,3,4,5];
cyclicallyRotateArray(cycArray);

/*
reverse a subarray to sort the array
input 1,2,5,4,3
output true
*/

function checkIfReverseSubarraySortsArray(arr){
    let start =0;
    let end = arr.length - 1;

    let temp = [];
    for(start=0; start<arr.length; start++) {
        temp[start] =  arr[start];
    }
    temp.sort();
    // 1,2,4,5,3,7,2
    // 1,2,2,3,4,5,7
    // 1,2,3,4,5,7

    console.log(temp);

    for(start=0; start<arr.length; start++) {
        if(arr[start] != temp[start]) {
            break;
        }
    }

    for(end=arr.length-1; end>=0; end--) {
        if(arr[end] != temp[end]) {
            break;
        }
    }

    if(start >= end) {
        return true;
    }

    do{
        if(arr[start] < arr[start+1]) {
            return false;
        }
    }while(start != end)

    return true;
}

let subSorted= [1,2,4,5,3];
console.log("checkIfReverseSubarraySortsArray "+checkIfReverseSubarraySortsArray(subSorted));


/*
Longest Consecutive subsequence
input 35,3,4,88,9,10,21,5,6,36
outut - 3,4,5,6,9,10,21,35,36,88

length = 4


.... scan the array from left 
c = arr[0] = 35
c+1 ==> 35+1 = 36
c-1 ==> 35-1 = 34
4 3 1 2

current = next - 1
current+1 = next

// 1,2 10,11 45,46,47
*/

function findLongestConsecutiveSequence(arr) {
    let count=0;
    let answer = 0;

    arr.sort(function(a,b) {return a-b;});

    console.log(arr);

    let temp = [];
    // temp.push(arr[0]);
    // 3,4,5,6,9,10,21,35,36,88
    // [4,2,2]
    // max = arr[0]... if(arr[i]>max)-> max = arr[i];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != arr[i+1]) {
            temp.push(arr[i]);
        }
    }

    for(let i=0; i<temp.length; i++) {
        if(i>0 && temp[i] == temp[i-1]+1) {
            count++;
        } else {
            count = 1;
        }
        answer = Math.max(answer, count);
    }

    return answer;
}

console.log("findLongestConsecutiveSequence ");
let lcsArray = [35,3,4,88,9,10,3,4,21,5,6];
console.log(findLongestConsecutiveSequence(lcsArray));