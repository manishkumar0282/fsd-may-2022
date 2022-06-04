console.log("Advance Function concepts");

/*
key: value --> can be primitive datatype or object or array
*/ 
// students = [obj1, obj2];

var students = [{
    name: "student1",
    age: 30,
    location: "delhi",
    sports:[{
        name:"Tennis",
        playtime: "2",
    },
    {
        name:"Badminton",
        playtime: "1",
    }]
},
{
    name: "student2",
    age: 20,
    location: "bombay",
    sports:[{
        name:"Cricket",
        playtime: "3",
    },
    {
        name:"Taekwondo",
        playtime: "10",
    }]
}
]

// [1,2] == arr[0]// arr[1]
// arr[2]

// JSON - 
console.log(students[0]);
// console.log(student.name);
// console.log(student.sports[1]);
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(students[0].sports[0].name);

let firstStudent = students[0];
let firstSportsOfFirstStudent = students[0].sports[0];
let sportsName = students[0].sports[0].name;
console.log(students[0].sports[0].name);

let sportsOfFirstStudent = firstStudent.sports;
// I am student1 aged 30 and love name1 & name3 sports. 
console.log(`I am ${firstStudent.name} aged ${firstStudent.age} and love ${sportsOfFirstStudent[0].name} & ${sportsOfFirstStudent[1].name}`)

// sort(a,b) => a-b
// students = [obj1, obj2];
/*
    sort the students object to ensure lower age students 
    are ahead in the array

    sort on the basis of student age (acending)
*/
students.sort((a,b) => (a.age - b.age));
console.log(students);

/*
    print the student with maximum age from the students list

    students = [obj1, obj2, obj3]
    students = sort students by ascending age //// 10, 20,30
                pick the last student       //// age 30
*/

/*
print student of least age
print 0th object from students array after sorting on age acsending
*/
console.log(students[0]);

/*
    check if two objects are same

    Goal: check if values for keys are same in both objects
    
    1. check if number of keys are same in both objects
    2. for every key check if the value is same
*/

let p1 = {
    name:"std1",
    age:10,
    location: "delhi"
}

let p2 = {
    location: "delhi",
    age:10,
    name:"std2",
}

function isEqual(a,b) {
    let keys1 = Object.keys(p1);
    let keys2 = Object.keys(p2);

    console.log(keys1);
    // let areSame = true;
    // for(let key in keys1) {
    //     console.log(key);
    //     // console.log(a[key]);
    //     // console.log(b[key])

    //     if((a[key] != b[key])){
    //         areSame = false;
    //         break;
    //     }
    // }

    // false && true === false
    if(keys1.length == keys2.length && 
        /*
        for every key in object 1, 
            compare the values from object 1 to values of object 2 
                for the same key
        */
        keys1.every(key => (a[key] == b[key]))) {
            // areSame) {
            return true;
    }
    return false;
}

console.log(isEqual(p1,p2));

/*
HOF
*/

const computeSquare = (num) => {
    return num*num;
}

function squareAndUpdate(somefunction, num) {
    return somefunction(num);
}

console.log(squareAndUpdate(computeSquare, 4));

// [std, class, school] == [STD, CLASS, SCHOOL]

function convertArrayElementToUppercase(arr) {
    return arr.map((arrElement) => arrElement.toUpperCase());
}

let upperArr = ["std", "class", "school"];
console.log(convertArrayElementToUppercase(upperArr));

let filterArray = [1,2,3,4,5,6,7,8,9];
console.log(filterArray.filter((key) => (key%2 == 0)));

/*
    Recursion  -- function calling itself

    will have a breaking condition
*/

// Print all numbers for given number to 0
function callme(num) {

    console.log(num);
    num--;

    if(num > 0) {
        callme(num);
    }
}

num = 10;
for(let i=num; i>0; i--) {
    console.log(i);
}

callme(num);

/*
    calcualte factorial  ==== n*n-1*n-2 ......2*1
*/
function factorial(num) {
    //num = 1
    if(num == 1) { //true
        return 1;
    }
    return num*factorial(num-1); //execute
}

console.log(factorial(5));
console.log(factorial(3));


// sample convert to arrow from a reguar fn
function sampleConvert(fR, s, f) {
    if(fR.length > 0) {
        s;
    } else {
        f;
    }
}

sampleConvert("Hello", () => console.log("first argument"), () => console.log("second argument"));

//closures

function counter() {
    let timer = 0;

    return function incrementCounter() {
        return timer++;
    }
}

let counterFn = counter();
console.log(counterFn());
console.log(counterFn());
console.log(counterFn());
console.log(counterFn());
console.log(counterFn());