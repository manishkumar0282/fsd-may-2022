console.log("---Doubt solving---");
let a=[
    [ 1, 2, 3],
    [ 4, 5, 6],
    [ 7, 8, 9],
];
let b=[
[ 1, 2, 3],
[ 4, 5, 6],
[ 7, 8, 9],
];

/*
c[i][j] = a[i][j]+b[i][j]
c is 3*3
*/
let twoDArray = [];
/*
let sampleArray = [1,2,3,4,5,6,7,8,9];
function populateMatrix(sampleArray) {
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            twoDArray[i][j] = 0;
        }
    }

    for(let i=0; i<sampleArray.length; i++) {


    }
}
*/
// a+b

        

function addmatrix(){
    let  c=new Array([],[],[]);
    console.log(c);
    for(let j=0;j<a.length;j++){
      if(j%2==0){
        for(let i=0;i<a.length;i++){
            // j = 0
            // i = 0 | 1 | 2
            // 0,0 1,0 2,0
          c[j][i] = a[i][j]; //1, 4, 7
        //   console.log(" even rows "+c[j][i]+" ");
        }
      }
      else{
        let temp = [];
        for(let i=a.length-1;i>=0;i--){
            // j = 1
            // i = 3, 2,1
            // 1,0 1,1 1,2
            temp[i] = a[i][j];
        }
        c[j] = temp.reverse();
      }
    }  
    // let aman= [[1, 2, 3, 4],
    //    [5, 6, 7, 8],
    //    [9, 10, 11, 12],
    //    [13, 14, 15, 16],
    //    [17, 18, 19, 20]];
    //    console.log(aman);
    //    let satya=[];

    // // for(let i=0;i<aman.length;i++){
    //     console.log("ahskdjfhsakjfd");
    //     for(let j=0;j<aman[0].length;j++){
    //         if(j%2==0){
    //             for(let k=0;k<aman.length;k++)
    //             {console.log(aman[k][j]);
    //             }}
    //             if (j%2!=0) {
    //                 for(let k=aman.length-1;k>=0;k--)
    //             {console.log(aman[k][j]);
    //             }
    //         }
    //     }
    // }
    // push - array.push --> push your value to the array
    // [].append
    console.log(c);
}
addmatrix();
// console.log("First Matrix "+a);

/*
Yellow to wolleY
*/
let str = "Yellow";
console.log(str.split("").reverse().join(""));

/*
[1 0 1 1]
[1,1,1,1]

q: find row with max 1's
*/

/*
1 5 10
15 value
10*1
5*1 

15 INR


1540 INR
{10,5,1} = [{154,0,0},{},{},{}]

what are the different of notes that you 
will pick to create this value
*/
//[[1,2,3],[4,5,6],[7,8,9]]
//147 852 369
function waveMatrix(mat,tolRows,totCols){
    let i,str="";
    let m= tolRows;
    let n= totCols;
    let first_row =0;
    let first_col = 0;
    let last_row = m-1;
    let last_col = n-1;
    while(first_row<=last_row && first_col<=last_col){
      for(i=first_row;i<=last_row;i++){//0 1 2
        str+=mat[i][first_col];//0,2 1,2 2,2
      }
      //00 10 20 .... 02 12 22
      first_col++; //3
      if(first_col<=last_col){
        // 21 11 01 24 14 04
        for(let i=last_row;i>=first_row;i--){//2,1,0
            str+=mat[i][first_col]; //2,3 1,3 0,3
        }
        first_col++; //4
        }
    }
    return str;
  }
  let mat =[[1,2,3,4],[5,6,7,8]];
//   let mat =[[1,2,3],[4,5,6],[7,8,9]];
  console.log(waveMatrix(mat,3,3))
  