//We will start at 8:05 PM
// console.log("*");
// console.log("*"+" "+"*");


// console.log("*"+" " + " "+"*");




// Get to Row 1 
// -> Print 1 star

// Get to Row 2
// -> Print 2 star

// Get to Row 3
// -> Print 3 star

// string 
// -> *
// -> **
// -> ***
let final_text = ""; //variable to capture the pattern of stars to be printed
for (let i=1; i<=3; i++) {
    final_text += "*";
    console.log(final_text);
}

// i=1 f_t = "*"
// i=2 f_t += "*"; ===== f_t = "*"+"*" === "**"
//  i += 5
// i = i + 5; 7
// i = "Manish"
// i += "Relevel";
// i = "ManishRelevel"


// conditional. iterative, functions
// child will go to play if temp is between 20 & 25
// if it is not raining
// if temp is less than 25 && greater than 20 -> go to play
// else -> print do not play

// (temp >20 and temp <25) and (isNotRaining) -> go to park
// else if (temp >18 and temp<20) and isRaining -> stay in Playschool
// otherwise stay at home

function checkResult(marks) {
    let result = (marks >= 40) ? "Pass" : "Fail";
    console.log(result);
}

checkResult(39);
checkResult(40);

/*

>0
==0
<0
*/
/*
switch(variable){
    case value1:
        kjsadfkjads
        akjsfdhkjdsa
        break;
    case value2:
        akjdshfkadsh
        akjsdfkjdsa
        break;
}
*/
let m = true; // boolean
function checkNumber(num){
    switch(true){
        case (num > 0):
            console.log("Number is positive");
            break;
        case (num == 0):
            console.log("Number is zero");
            break;
        case (num < 0):
            console.log("Number is positive");
            break;
        default:
            console.log("incorrect number");
    }
}

checkNumber(-2);
checkNumber(0);
checkNumber(2);
checkNumber("hello");

//Q- find largest among three numbers
function findLargest(num1, num2, num3){
    // assume num1 is largest
    let largest = num1; // 10
    
    //check if num2 is greater than largest, if yes update largest to be num2
    if(num2 > largest) {
        largest = num2;
    }

    //100>10
    // l = 100
    //check if num3 is greater than largest, if yes update largest to be num3
    if(num3 > largest) {
        largest = num3;
    }
    // if 10> l 

    console.log(largest);
}

findLargest(10,10,50);//50


// find sum of all digits of a number
// eg: 130
// 1+3+0 = 4
/*
fetch the individual digits at different places
add these digits

number = 130
digit = 130 % 10 ======= 0
number = number / 10; ====== 13
digit = 13 % 10 ======= 3
number = number / 10; ====== 1



modulo % ==== remainder
division / ===== quotient

10.25 = 10
*/
console.log("  sumOfDigits ");
function sumOfDigits(num) {
    let sum = 0;
    while(num != 0) {
        let digit = num % 10;
        console.log("digit = " +digit); 
        sum += digit;
        console.log("sum = " + sum);
        num = parseInt(num / 10);
        console.log("num is now "+num);
    }
    console.log(sum);
}

sumOfDigits(130);
sumOfDigits(153);


/*
Armstrong number

sum of cube of individual digits is equal to the number

1^3+5^3+3^3 = 153
1+125+27 = 153
1. find digits
2. cube of digits
3. sum of cubes of digits
4 check if .3 ==== original number

parseInt(150.05);
150

int x = 5;
x = "manish";
*/

function checkifNumberIsArmstrong(num) {
    let originalValue = num;
    let sum = 0;
    while(num > 0) {
        let digit = num % 10;
        sum +=  (digit*digit*digit);
        num = parseInt(num / 10);
    }

    if(sum === originalValue) {
        console.log(originalValue+" is Armstrong");
    } else { 
        console.log(originalValue + " is not an Armstrong number");
    }
}

checkifNumberIsArmstrong(153);
checkifNumberIsArmstrong(152);

console.log(parseInt("1000"));

/* print all prime numbers from 1 100
    prime number can only be divided by 1 and itself
    eg: 7,29

    97
    3
    4

100 = 10
10.19*10.19

    1. iterate through every number
    2. loop from 3 to 
    4. 97 -> 2 3 4 5 6 7 8 9 10 11 12 13 97
    for 97 3 ---------- 96 computations
    3*33 = 99
    3*32 = 96

    4*24 = 96

    5*19 = 95

    9*9 = 81
    9*10 = 90
    9*11 = 99

    10*9 = 90
    10*10 = 100

    11*9 = 9* 11

    a*b = b*a

    5. 10000000004
    3. 

    1. 1 is a prime number
    2. 2 to the given number
*/

function printPrimeNumbersTill(num) {
    // assume we strat from 1 and print upto given num

    for(let index = 1; index<=num; index++){
        let isPrime = true;

        if(index%2 === 0) {
            isPrime = false;
        }

        if(index === 2) {
            isPrime = true;
        }
        for (let divisor = 3; divisor <= Math.sqrt(index); divisor++) {
            if(index % divisor === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            console.log(index+ " is a prime number");
        }
    }
}

printPrimeNumbersTill(100);


/*
1. print power of number to a give n number
function power(base, exponent) {
    base*base*base..... exponent times
}

eg: power(2,4)

2*2*2*2
2^4

2. Reverse a string
fucntion reverse("man"){

}
"nam"
*/