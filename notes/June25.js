console.log("Problem solving on Recursion");


/*
* n, {}
* n = 1, 
}{ ..... {}...... 
n = 2
{}, {}{}, {{}}...{}}{
*/

function generateParenthesis(n, open, close, s) {

    if(open == n && close == n) {
        console.log(s);
        return;
    }

    if(open < n) {
        generateParenthesis(n, open+1, close, s+"{");
    }

    if(open > close) {
        generateParenthesis(n, open, close+1 , s+"}");
    }
}

let res = new Array();

console.log("generateParenthesis ");
// generateParenthesis(2,0,0,res,"");
generateParenthesis(3,0,0,"");

/* Print lexicographical order recursively
*/

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