/* calculate sum of area of given 100 rectangles

step 1: find area of each rectangle --- Mathematical formula
step 2: add these areas -- programming problem

area = length * breadth
sum all calculated areas

react 1 = lenght = 10 breadth = 15
rect 2 =  lenght = 2 breadth = 3
sumOfAreas = 0;
for (let i = 1; i<=100; i++) {
    area = length of that reactangle * breadth of that rectangle
    sumOfAreas+=area
}
console.log(sumOfAreas);
*/


/*
    x km/hr 20 min late => T+20
    x+2 km/hr 10 min early => T-10

    Distance is D between office and home
    estimated time of arrival is T

    in both the cases the Distance is same
    Distance = speed * time
    D1 = D2
    x*(T+20) = (x+2)*(T-10)
    T = 70 minutes
    D = x*90 x = 4, D = 360
    D = x+2*60 
*/

/* LCM
x,y

*/


/*
    3, 7
    x

    x%3 === 0
    x%7 === 0

    lower = 3
    3%3 === 0 4%3 =0
    3%7 == 0 4%7 = 0

*/
function lcmOfNumbers(num1, num2) {
    let lcm = 0;
    let lower = (num1<num2)? num1 : num2;

    while(true){
        // 5, 10
        // lower = 5
        // 5%10 ====0
        // 10%10 ===0 
        if((lower % num1 ==0) && (lower % num2) == 0) {
            lcm = lower;
            break;
        }
        lower ++;
    }
    return lcm
}

console.log(lcmOfNumbers(5,10));
console.log(lcmOfNumbers(12,16));
console.log("sum of inner digits");


/* sum of inner Digits


*/

function sumOfInnerDigits(num) {
    
    if(num.toString().length < 3) {//70
        console.log("invalid input");
        return;
    }

    let sum = 0;
    

    // take out the last digit from number --> we have to exclude it
    num = parseInt(num/10);
    // 2124 -> 212
    console.log("out of while num "+num);
    // add the last digit (first inner digit) to the sum
    sum += num%10;
    // sum = 0+2
    console.log("out of while sum "+sum);

    while(parseInt(num/100) != 0) {
        //212 212/100 -> 2
        // 21 21/100 == 0
        
        num = parseInt(num / 10);
        console.log("in while num "+num);
        sum += num%10;
        console.log("in while sum "+sum);
    }
    console.log(sum);
}

sumOfInnerDigits(70);
sumOfInnerDigits(2124);
sumOfInnerDigits(123);

/*
aman
n, ama
an, am

length();
let index = lenght of string
while(index>=0) {
    n, a, m, a 
}

// pick the last char



countOccurrence
1211121
digit = 
(digit === 1)
    count++
length of number 

*/


function printNthFib(n) {
    let prev = 0;
    let current = 1;
    // 0, 1, 1, 2, 3, 5, 8, 13, 21.....
    let num;

    if(n === 1) {
        num= prev;
    } else if (n === 2) {
        num =  current;
    } else {
        for (let j=3; j<=n; j++) {
            num = prev + current;
            prev = current;
            current = num;
        }

    }
    return num;

}
console.log("Print N fib");

console.log(printNthFib(1));
console.log(printNthFib(2));
console.log(printNthFib(3));
console.log(printNthFib(6));
console.log(printNthFib(8));

