console.log("--Problem solving - Conditionals---");

/*
20 12 18 19 24 45 
one age 
*/

function checkEligibility(age){
    if(age>=18){
        console.log("Eligible to vote");
    } else {
        console.log("not eleigible to vote");
    }
}

checkEligibility(21);
checkEligibility(17);

/*
percentage attendance
75% attendance to appear in exam
my_value/ total_value*100
*/

function checkEligibilityBasedOnAttendancePercentage(attend, totalClasses) {
    let attendancePercentage = (attend/totalClasses)*100;
    if(attendancePercentage > 75) {
        // eligible

    } else {
        // Not Eligible
    }
}

checkEligibilityBasedOnAttendancePercentage(12, 20);
checkEligibilityBasedOnAttendancePercentage(80,100);

/*
determine increaseing, decreasing or non-increasing non-decreasing order
1,3,6 -> Increasing
9,2,1 -> Decreasing
1,9,2 -> NIND
 */

function checkOrder(a,b,c) {
    let switchOption = -1;
    if(a>b && b>c) {
        switchOption = 1;
    } else if(a<b && b<c) {
        switchOption = 2;
    }

    switch(switchOption){
        default:{
            console.log("Niether Increasing Nor Decreasing");
        }break;
        case 1:{
            console.log("Decreasing Order");
        }break;
         case 2:{
            console.log("Increasing Order");
         }
         break;
    }
}

checkOrder(1,3,6);
checkOrder(9,2,1);
checkOrder(1,9,2);

/*
positive integers a>0, b>0 b>=a
A<=B
a<=b

a^2+b^2=A
*/
function findPairOFintegers(num){
    for(let i=1; i<num; i++){
        for(j=i;j<num;j++){
            if(i*i+j*j===num){
                console.log(i+", "+j);
            }
        }
    }
}
findPairOFintegers(50);
/*
findSmallest(a,b,c)
*/
function findsmallest(a, b, c){
    
}
/*
Palindrome
relevel
leveler
not a palindrome

nun
nun
palidrome
*/

/*
you have been given marks 
and you need to respond with grades based on
>85 - A
70 - 85 -> B
55-70 -> C
33-55 -> D
<33 -> F 
*/


function printGrades(marks) {
    let grade = 'F';

    if(marks>=85){
        grade = 'A';
    } else if(marks > 70 && marks < 85) {
        grade = 'B';
    } else if(marks > 55) {
        grade = 'C';
    } else if(marks > 33) {
        grade = 'D';
    }

    console.log(grade);
}

printGrades(90);
printGrades(72);
printGrades(62);
printGrades(52);
printGrades(32);


let s1 = "Hello"; //string
let s2 = new String("Hello"); //String

console.log(s1 == s2);
console.log(s1 === s2);

/*
a, b, c

*/
for(let j=0; j<5; j++){
    for(let i=1; i<=10;i++){
        //i = 2 print i = 2
        console.log("Before if condition ",i);
        // true
        if((i%2)==0){
            break;
        }
        // print i = 1
        console.log("After if condition ",i);
        console.log("value of j ",j);
    //1 1 2
    }
}