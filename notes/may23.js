console.log("Advanced Function concepts");

function displayName(name) {
    console.log(name+".com");
}

let varName = "Relevel";
console.log("-- Before fn invoke -- ",varName);
displayName(varName);
console.log("-- After fn invoke -- ",varName);

/*
1. Pass by value -> 
    you are just passing the value
*/

function addNewItem(arr, num){
    console.log("Inside function before push ",arr);
    arr.push(num);
    console.log("Inside function after push ",arr);
}
let arr = [2,3,4,5,6,1];
console.log("Before Invoking ",arr);
addNewItem(arr, 5);
console.log("After invoking ",arr);

let num = 100;
function multiplyBy5(num){
    num = num*5;
    console.log(num)
}
console.log(num);
multiplyBy5(num);
console.log(num);


let numA = [1,2,3,4];
function multiplyBy5A(numA){
    for(let i = 0; i<numA.length; i++) {
        numA[i] *=5;
    }
    console.log(numA)
}
console.log(numA);
multiplyBy5A(numA);
console.log(numA);

/*
    Pure Function
    1. output is same for same input
    eg: multiplyBy5(num)
    2. Do not alter the state of a 
    variable/ object
    
    let, const, var
    object ==> instance of complex data type

    let schoolData ={
        classOne:{
            students[
                {std1, std2}
            ],

        }

    }
    let arr = new Array[]; 

    function appendNewYork(num) {
        retur num+"New York";
    }

    math.Max(a, b)
    1900 planet
    2020 planet
    2010 planet
    2040 planet

    9th planet -> pluto
    2022 -> none

    math.random(5)
    math.add(a, b)
*/

let a =5;
multiplyBy5(a);
console.log(a);
console.log(varName);
/*
closure

*/

// scope of a variable
function add(m){
    return function doSomething(n) {
        return m+n;
    };
}
console.log("----add---")
let operateOnMe = add(5);
console.log(operateOnMe(3));
// console.log(c);

/*
Implement mutation of object
let obj = {
    Javascript:"language",
    platform:"win"
}

"web development language"
*/

let obj = {
    Javascript:"language",
    platform:"win"
}
console.log(obj);
obj.Javascript = "web development language";
console.log(obj);

/*
let arrString = ['a', 'c', 'd','b'];
output = sorted string.... ['d','c','b','a']; 
*/
let arrString = [1,4,5,7,2];
arrString.sort((a,b) => (a-b));
console.log(arrString);

/*
find target = 5 in the given array
let arrNum = [1,5,2,6,8,9];
*/
let arrNum = ['a','b','r'];// find b
let found = arrNum.find(name => name === 'z');
console.log(found);

/*
WAP to multiply the values of an array and return
the result

1,2,3,4,5 ==== 1*2*3*4*5

*/

let qArray = [1,2,3,4,5];
let result = qArray.reduce((res, curr)=> res*curr,1);
console.log(result);

/*
sort the objects based on their id (acending)
output should 
*/

let objSort = [{
    id:23,
    name: "JS"
},
{
    id: 3,
    name:"C++"
},
{
    id:5,
    name:"Python"
}
];

// objSort.sort((a,b) => (a.id - b.id));
// console.log(objSort);

let arrAnkit= [1,2,30,40,4,5,60];
result= arrAnkit.sort((a,b) => (a - b));
console.log(result);

// For Shivam
for(let i=0; i<objSort.length; i++){
    for(j=i+1; j< objSort.length; j++) {
        if(objSort[i].id > objSort[j].id) {
            temp = objSort[j];
            objSort[j] = objSort[i];
            objSort[i] = temp;
        }
    }
}
console.log(objSort);

