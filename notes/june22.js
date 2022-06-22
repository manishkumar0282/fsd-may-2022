console.log("Intro to Recursion");

/*
function f(n) {
    // ..stat
    f(n+1)
}

f(10);
*/

// recursive function to calculate factorial of a number
// 5 = 5*4*3*2*1
// fac(n) = return n*(n-1)*(n-2)*.....3*2*1
function fac(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n*fac(n-1);
}

console.log(fac(5));
// fibonacci series ->
// 0,1,1,2,3,5,8,
function fib(n) {
    //print the fib series till nth index
    if (n == 0 || n == 1) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}
// 0112358
console.log(fib(4));
console.log(fib(3));
console.log(fib(2));
console.log(fib(1));
console.log(fib(0));

// Homework print fibonacci in searies form upto the given 
// index eg, 0,1,1,2,3,5,8,13


/* WAP to print first n natural numbers 
in ascending order using recursion

    1 2 3 4 5 6 7 8
*/

function ascending(n) {//10
    if(n==1) {//fails
        console.log(n);
        return;
    }
    ascending(n-1);
    console.log(n);//n=1 , 2, 3
    
}

console.log("ascending");
ascending(10);

function descending(n) {//10
    if(n==1) {//fails
        console.log(n);
        return;
    }
    console.log(n);//n=1 , 2, 3
    descending(n-1);
}

console.log("descending");
descending(10);


/*
    using recursion check if a array is sorted
    number array 
    sorted in ascending order
*/
function isArraySorted(arr, n) {
    // if there are only 1 or no elements left 
    // means that array is already checked for 
    // all values except this n
    if( n == 0 || n == 1) {
        return true;
    }

    // if at any point the value at index i is greater than
    // value at index n+1
    // 1,2,3,5,4
    if(arr[n] < arr[n-1]) {
        return false;
    }

    return isArraySorted(arr, n-1);    
}

let arr = [1,2,3,6,5];
let arr1 = [1,2,3,4,5];

console.log("isArraySorted");
console.log("is "+arr +" sorted? " + isArraySorted(arr, arr.length));
console.log("is "+arr1 +" sorted? " + isArraySorted(arr1, arr1.length));


/*
there are n friends that want to goto party. 
every person can either go in pair of 
calculate the possible total number of ways in which these friends can
go to the party

two or alone. 
* n friends want to go to a party
pair or single

1 frnd {1} -- single - 1
2 people ---- {1},{2}, {1,2} - 3
3 ---- {1,2},{3} {1,3},{2} {2,3},{1}  - 6
4 ---- {1}{2,3,4}, {1,2}{3,4} - 
n people want to attend
1 person (nth) decides to go alone
    n-1 will form pairs
nth person decides to go in pair 
    n-2 people will form pair

    if one person decides to go alone -- 
    number of ways in which this person can go to party
        == 1

    left friends = n-1
    how many ways can n-1 friends can go to attend party

    total ways = 1*n+f(n-1)

    f(n) = 1*f(n-1) + (n-2)*f(n-2)

            n!
    -------------------
        r! * (n-r)!
*/

function findPairs(n) {
    let pairs= [];
    for(let i=0; i<= n; i++) {
        if(i <= 2) {
            pairs[i] = i;
        }
        else {
            pairs[i] = pairs[i-1] + (i-1)*pairs[i-2];
        }
    }
    return pairs[n];
}

console.log("Find Pairs")
for(let i=0; i<10; i++) {
    console.log("Find Pairs for "+ i + " is " + findPairs(i));
}


/*
calculate the binary strings without consecutive 1's
* Binary numbers - 0,1
011
010
001

Given a number n which is the length of string eg: n = 3
output - 000 001 010 100 101 --- result 5 is the answer
strins with consecutive 1's ---- 011 110 111 (do not need to find count of these)

Hint: you will notice the trend similar to fibonacci series

2^n --- n is the length of permissible digits
*/


/*Doubt for next class
Buvaneshwari - you asked me to remind about a doubt in closures..let n var has different answers..can we plz take it in next class sir
*/