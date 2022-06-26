console.log("Doubt solving");

function fib(n) {
    //print the fib series till nth index
    if (n == 0 || n == 1) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}
// 0112358
console.log(fib(4));




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
// 0, 1, 2, 01, 02, 12, 012
// 
let arr = ["a","b","c"];
let result = new Array();
console.log("printSubsequenes ");
printSubsequenes(arr, 0, result);

function printLex(n) {
    let res = [];
    lexOrder(1, n, res);
    console.log(res);
}

/* res = [1]
 1 10 11 12 13 .... 19 2 20 21 22 .... 29 3
// 2 20
// temp % 10 => gives the digit in unit place
// temp = 15 => temp % 10 === 5.... temp = temp+1
// last digit is 9
temp = 19
temp+1 ==== 20 
insert 2
*/
function lexOrder(temp, n, res) {
    if(temp > n) {
        console.log("Temp = has gone beyond "+ temp +" n= "+n);
        return;
    }
    console.log("before pushing temp= "+ temp +" result= "+res);
    res.push(temp);
    console.log("before pushing temp= "+ temp +" result= "+res);
    lexOrder(temp*10, n, res);
    if(temp % 10 != 9) {
        // temp = 10 
        //temp%10 = 0
        console.log("calling lex from inside modulo condition with temp= "+ temp +" result= "+res);
        lexOrder(temp+1, n, res);
    }
}
printLex(15);