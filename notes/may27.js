console.log("---Array - Problem solving ----");

function printUpperCaseLetter(letter){
    return letter.toUpperCase();
}

let a = printUpperCaseLetter("a");
console.log(a);

console.log(printUpperCaseLetter("b"));

function multiplyBy5(num){
    return num*5;
}

for(let i=0; i<10;i++){
    console.log(multiplyBy5(i)+printUpperCaseLetter("a"));
}

myCarModel = "Maruti";
var myCarModel;
console.log(myCarModel);

//function chaining
// fn1().fn2().fn3()

function addB(str) {
    return str+"B";
}

console.log(addB("A").toUpperCase());
console.log(printUpperCaseLetter(addB("A")));


/*
Input - given a number 36286
Output - reverse of this number --- 68263
*/

function reverseNumber(num){
    // 1 get the digits
    // 3 -----0(6) 1(8) 2(2) 3(6) 4(3)
    // store them in reverse order in an array
    // combine these and return
    // 68263
    console.log(typeof(num));
    // array
    num = num+""; // output will be string
    // adding a string to number changes 
    // the number to string
    console.log(typeof(num));
    let listOfChars = num.split("");
    console.log(listOfChars);
    let reverseChars = listOfChars.reverse();
    console.log(reverseChars);
    let finalNum = reverseChars.join("");
    return num.split("").reverse().join("");
}

console.log(reverseNumber(36286));

/*
    number input is 839562
    output 235689
*/

/*
palindrome
MADAM

*/


function getReverse(str) {
    return str.split("").reverse().join("");
}

function checkPalindrome(str){
    
    if(str == getReverse(str)){
        console.log("equal");
    } 
    else {
        console.log("not equal");
    }
}

checkPalindrome("ADA");

//                  0,1,2,3,4
let sliceArray = [10,20,30,40,50];
//slice(start, end)
console.log(sliceArray.slice());
console.log(sliceArray.slice(3));
console.log(sliceArray.slice(1,4));//1,2,3
console.log(sliceArray.slice(-1));
console.log(sliceArray.slice(-3));


/*
input - the quick brown fox
Output - The Quick Brown Fox

1. create an array of words by splitting with " "
2. Pick one word at a time
3. pick the first character -> change to uppercase
4. concetanate with the rest of the char in the word
*/

function changeFirstLetterToUpperCase(str){
    let arr = str.split(" ");
    // the, quick, brown, fox
    let arr1 = [];
    for(let i=0; i< arr.length; i++) {
        arr1.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
        console.log(arr1[i]);
    }
    return arr1.join(" ");
}

console.log(changeFirstLetterToUpperCase("the quick brown fox"));

/*
    input - web development is fun
    putput - development
*/


/*
    ipnut the quick brown fox
    output - 5
*/

/*
    input - [2,3,1,5,4,7,6]
    output  2nd largest and 
            2nd smallest number
*/

/*
    input - [2,3,1,5,4,7,6], find 4th largest
    or find 5th largest
    output  find nth largest
*/

/*
input - thequickbrownfoxtiwy
output - unique characters in this--
thequickbrownfoxy
*/

/*
    WAP to print your family
    funtion()
*/