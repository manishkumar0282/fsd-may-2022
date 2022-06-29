console.log("advanced construct recursion");

/*
ABC, 0, 2
A -> B,C
A -> C,B
B -> A,C C,A
C -> 

left = 0, str = ABC
1. swap ----> swap(str, left, i);
    ABC -> ABC
2. Permute (BC)



i = 0 A ---- ABC ... A->BC. CB
i = 1 B ---- BAC ... B->AC. CA
i = 2 C ---- CBA ... C->BA. AB

permute (ABCDEFGHIJK, 0, 11);
1. swap
    ABCDEFGHIJK -> ABCDEFGHIJK
2. Permute (ABCDEFGHIJK, 1, 11)

A->BCDEFGHIJK ....... i = 0 A
B->ACDEFGHIJK ....... i = 1 B
C->ABDEFGHIJK ....... i = 2 C


for(0-n)

A-> BCD
    B->CD BDC

*/
function permuteString(str, left, right) {
    if(left === right) {
        console.log(str);
    } else {
        for(let i=left; i<=right ;i++){
            str = swap(str, left, i);
            permuteString(str, left+1, right); 
            str = swap(str, left, i);
        }
    }
}

function swap(str, left, index) {
    let chArray = str.split(""); // ABC -> [A,B,C]
    let temp = chArray[left];
    chArray[left] = chArray[index];
    chArray[index] = temp;
    let genArr = (chArray).join("");
    return genArr;
}

console.log("Permute string");
let str = "ABC";
permuteString(str, 0, (str.length - 1)) // 2


/*
const util = (index, t, arr, answer, tempo, i) =>{
        tempo.push( arr[i] );
        solve( i+1, t-arr[i], arr, answer, tempo );
        tempo.pop();
}

const solve = (index, t, arr, answer, tempo ) =>{
    
    if( t == 0 ){
        answer.push( Array.from(tempo));
        return;
    }
    
    for( let i=index; i<arr.length; i++ ){
        if( i>index && arr[i]==arr[i-1] ) continue;
        if( arr[i] > t )   break;
        util(index, t, arr, answer, tempo, i);
        
    }
    
}

const saveBob = (arr, sum) => {
    
    let ans = [];
    arr.sort(); // 1,1,2,3,4,7
    solve( 0, sum, arr, ans, [] );
    return ans;
}

let arr = [1,2,5,6,1,7];
let sum = 7;
console.log(saveBob(arr, sum));
*/
function computeCombinations(arr, target) {
    let res = new Array();
    solve(0, target, arr, res, []);
    return res;
}

function util( t, arr, answer, tempo, i) {
    tempo.push( arr[i] );
    solve( i+1, t-arr[i], arr, answer, tempo );
    tempo.pop();
}

function solve(index, target, arr, answer, tempo)
{
    if( target == 0 ){
        answer.push( Array.from(tempo));
        return;
    }

    for( let i=index; i<arr.length; i++ ){
        if( i>index && arr[i]==arr[i-1] ) continue;
        if( arr[i] > t )   break;
        util(target, arr, answer, tempo, i);
        
    }
}

let arr = [1,2,5,6,1,7];
let target = 7;
console.log("Save Bob");
console.log(computeCombinations(arr, target));


function z(index) {
    if(index == 10) {
        return;
    }
    for(i=0; i<11; i++) {
        z(i);
        i++;
    }
}