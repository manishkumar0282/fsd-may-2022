/*
May 5
// conditional statement
	1. if-else
	2. if-else-if (nested if)
	3. ternary
	4. Switch
*/
let colorOfDress;		
function printInfoForDayOfWeek(dayOfWeek) {
  let something = 2;
switch(something) {
  case 1: {
    colorOfDress = "Green";
  }
    break;
  case 2:
  case 3: {
    colorOfDress = "Blue";
  }
    break;
  default: {
    colorOfDress = "Green";
  }
    break;
}

if(dayOfWeek == 1) {
    console.log("Monday");
    console.log("wear green");
  }
    else if(dayOfWeek == 2) {
    console.log("Tuesday");
    console.log("wear blue");
  }
    else {
    console.log("other day");
    console.log("wear red");
  }
}

printInfoForDayOfWeek(2);	

// condition ? success_case : failure_case
// eg: (x>2) ? x++ : x--;

/* Iterative statement
	1. for loop -- 

	for(let i =0; i<3; i++) {
		//statements
	}

	for(initialization; conditional check; iteration) {
		// executing statements
	}

	2. while
	3. do-while

break

	diff in while & for

	For
	1.	initialization can be done inside or outside the loop
	2. 	Used when the iterations are known 
	3.	once the statement is exuted, only then the increment happens

	while:
	1.	Initialization can only be done outside the loop
	2. 	used primarily when iterations are not known
	3.	increment can be done before or after the execution of statement
*/

/*
	Quiz:
	1. Print days of week

Use Conditional or Iterative

	condition: 
	"Sunday"
	"Monday"
	"Tuesday"
	"Wednesday"
	"Thursday"
	"Friday"
	"Saturday"

function printDayOfWeek(num) {
	
	//print day of week
}

printDayOfWeek(3)//// output is "Tuesday"
*/

function printDayOfWeek(num) {
  switch(num){
    case 2: {
      console.log("Monday");
    }
      break;
      case 3: {
      console.log("Tuesday");
    }
      break;
      case 4: {
      console.log("Wednesday");
    }
      break;
      case 5: {
      console.log("Thursday");
    }
      break;
      case 6: {
      console.log("Friday");
    }
      break;
      case 7: {
      console.log("Saturday");
    }
      break;
      case 1: {
      console.log("Sunday");
    }
      break;
  }
}

function printDayOfWeek(num) {
  	if(num == 2) {
      console.log("Monday");
    } else if(num == 3){
      console.log("Tuesday");
    } else if (num == 4) {
      console.log("Wednesday");
    } else if(num == 5) {	
      console.log("Thursday");
    } else if (num == 6) {
      console.log("Friday");
    }	else if (num ==7) {      		
      console.log("Saturday");
    } else {
      console.log("Sunday");
    }
}

printDayOfWeek(5);//// output is "Tuesday"


Homework: 
//2. Print 1 to 10
i = 1;

for(; i<= 10; i++) {
	console.log(i);
}

/*3. Print the sum of 1 to 10 
 output is the value of (1+2+3+4+5+6+7+8+9+10);

// 1. iterate over numbers from 1 to n(10 here) ...
	i = 1;

	for(; i<= 10; i++) {
		//console.log(i);
	}

// 2. Initialize a variable with 0 to store the sum of numbers
	let i = 1;
	let sum = 0;
	for(; i<= 10; i++) {
		//console.log(i);
	}
// 3. store the sum of previous numbers and the new number
	let i = 1;
	let sum = 0;
	for(; i<= 10; i++) {
		//console.log(i);
		sum = sum + i; //sum = 0 ; sum = 0+1 = 1
						// sum = 1; sum = 1+2 = 3
						//	sum 3; sum = 3+3 = 6
	}
// 4. print the value of the variable that stores the sum of numbers
*/
	function printSumOfFirstNNaturalNumbers(n) { 	
	var i = 1;
	var sum = 0;
	for(; i<= n; i++) {
		//console.log(i);
		sum = sum + i; //sum = 0 ; sum = 0+1 = 1
						// sum = 1; sum = 1+2 = 3
						//	sum 3; sum = 3+3 = 6
    console.log(sum);
	}
}

printSumOfFirstNNaturalNumbers(10);


let x = 4;
let y = 5;
let z = x+y;

// if-else
if (z==10) {
  z--;
  console.log("hello");
  z = z - 1;
  z = z*5;
} else {
  z++;
}

// ternary
(z == 10) ? z--: z++;

