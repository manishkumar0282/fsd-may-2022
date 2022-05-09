// var i = 0,j=0;
// for(i=0;i<5;i++) {
// //     console.log(i)
//     for(j=0;j<4;j++) {
// //     console.log(j);
//     }
//     if(i>1){
//         break;
//     }
//     console.log('relevel');
// }


var i = 0,j=0;
for(i=0;i<5;i++){
    for(j=0;j<4;j++){
        if(i>1)// true
            break;
    }
    console.log("Relevel");
}

/*  
    i = 0 - Relevel
    i = 1 - Relevel
    i = 2 - 

*/


/*

*/

const x = 6 % 2; 
console.log(x);
// 1 true
// 0 false
const y = x ? "One" : "Two";
console.log(y);


/*
for n = 5
    *
    **
    ***
    ****
    *****
*/

console.log("Manish ".repeat(100));
" "
function printPattern(n){
    for(var i=1; i<=5; i++){
       console.log(i.toString().repeat(i));     
    }
}
/*
1
2 2
3 3 3
*/
printPattern(5);

let n = 5;
let string = " ";
for(let i=0;i<n;i++){
    for(let j=1;j<=i;j++){
       string+=" * ";
    }
    string+="\n";
}
console.log(string);

function pattern(n){
    for(let i=0;i<n;i++)
      {
        for(j=1;j<=i;j++){
        console.log(i)
      }
  }
}
  pattern(7);
  

/* two loops*/
let n1 = 5;
let string1;

for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= i; j++) {
        if (i == 1) {
            string1 += "\n";
        }
        string1 += "* ";
    }
    string1 += "\n";
}
console.log(string1);

var i=0;
var j=0;
for(i=0;i<4;i++){
    for(j=0;j<=i;j++){
        console.log("*")
    }
    console.log("\n")
}
console.log("*")

/*


n = 5
// number of rows = 2*n-1 = 9

    *   spaces = 4 stars = 1 = 5    to_print = "    *\n"
   **   spaces = 3 stars = 2 = 5    to_print = "    *\n   **\n"
  ***   spaces = 2 stars = 3 = 5    to_print = "    *\n   **\n  ***\n"
 ****   spaces = 1 stars = 4 = 5    to_print = "    *\n   **\n  ***\n ****\n"
*****   spaces = 0 stars = 5
 ****   spaces = 1 stars = 4
  ***   spaces = 2 stars = 3
   **   spaces = 3 stars = 2
    *   spaces = 4 stars = 1



* spaces = 0 stars = 1
nr = 1

n = 3, nr = 5
  * spaces = 2 stars = 1
 ** spaces = 1 stars = 2
*** spaces = 0 stars = 3
 **
  *
*/

console.log("solve ascending descending pattern");
function printPatternAscendingDescending(n) {
let nr = 2*n-1;
let nst = 1;
let nsp = n-1;
let to_print = "";
// nsp ____*
 for( let row = 1 ; row<= nr; row++) {
    // increment for n rows
    //current row 
    // csp - count of spaces
    // console.log(row+" nsp "+nsp+" nst "+nst);
    for(let csp=1; csp<=nsp; csp++) {
        to_print += " ";
        // console.log(to_print);
    }
    // row 1 "    "
    // row 2 "   "
    // cst - count of stars
    for (let cst = 1; cst<=nst; cst++) {
        to_print += "*";
        // console.log(to_print);
    }
    // row 1 "    *"
    // row 2 "   **"
    to_print += "\n";
    if(row <= parseInt(nr/2)) {
        nst++;
        nsp--;
    } else {
        nst--;
        nsp++;
    }
 }
     console.log(to_print);
}

printPatternAscendingDescending(5);

// function printrevstar(n){
//   for(a=1;a<4;a++){
//       console.log(" ".repeat(n), "*".repeat(a));
//       --n;
//   } 

//   function printrevstar1(m){
//   for(b=2;b<3;b--){
      
//       console.log(b+" value of b" +" ".repeat(m),"*".repeat(b++));
//       ++m;
//   }
//   }
//   printrevstar1(3);
// }
// printrevstar(4);


let n3 = 5, k = n3;
let string2 = "";

for (let i = 1; i <= n3; i++) {
    if (i <= 3) {
        if (i == 1) {
            string2 += "\n";
        }
        string2 += " ".repeat(k--);
        string2 += "*".repeat(i);
        string2 += "\n";
    }

    else {
        string2 += " ".repeat(i);
        string2 += "*".repeat(k--);
        string2 += "\n";
    }
}


console.log(string2);


/*
Problem 1 - HW
    *
   * *
  * * *
   * *
    * 

Problem 2 - HW
   *******
   *** ***
   **   **
   *     *
   **   **
   *** ***
   *******

Problem 3 - HW -- Hourglass
    *******
     *****
      ***
       *
      ***
     *****
    *******

Problem 4 - HW
    *   *
     * *
      * 
     * *
    *   *


Print numbers
1
21
321
4321
321
21
1


   1
  12
 123
1234
 123
  12
   1



*/