console.log("Basic Problem solving in Recursion");

/*
find out the number of ways in which 2*1 tile can be used to fill an
area of 2*n
*/

function numberOfWays(n) {
    if(n == 0 || n == 1) {
        return 1;
    }

    return numberOfWays(n-1) + numberOfWays(n-2);
}

// console.log(numberOfWays(4));
// console.log(numberOfWays(8));


/*
* Find the subsequences recursively
*/

function printSubsequenes(arr, i, result) {
    if(i == arr.length) {
        if(result.length > 0) console.log(result);
    } else {
        console.log("1st invocation to PS Index "+i+" result "+result );
        printSubsequenes(arr, i+1, result);
        console.log("Before Push i = "+i+" result ="+result );
        result.push(arr[i]);
        console.log("After Push i= "+i+" result= "+result );
        console.log("2nd invocation to PS Index "+i+" result "+result );
        printSubsequenes(arr, i+1, result);
        result.pop();
        console.log("After pop i= "+i+" result= "+result );
    }
    return;
}

let arr = ["a","b","c"];
let result = new Array();
console.log("printSubsequenes ");
printSubsequenes(arr, 0, result);
