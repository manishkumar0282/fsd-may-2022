/*
    agesOfStudentInClassOne  =  [5,7,4,7];
    agesOfStudentInClassTwp  =  [8,7,5,6];
    ageOfStudentsInClassOneAndTwo = [agesOfStudentInClassOne, agesOfStudentInClassTwo]
    [[5,7,4,7], [8,7,5,6]]

    Snake/ Ladder
    Chess

    Tip: 2-D array is also known as matrix
    Eg:
                0 1 2 3
   let a =  0-> 1 2 3 4
            1-> 5 6 7 8

    (Row Index, Col Index)

    row/ column
    (0,0) (0,1) (0,2) (0,3)
    (1,0) (1,1) (1,2) (1,3)

    a[rowIndex][colIndex]
    eg: print item at row 0 column 1
    console.log(a[0][1]);

    Ques: output should be 1,2,3,4,5,6,7,8
*/

// function printMatrix(arr, nofRows, nofCols) {
//     for (let row=0; row< nofRows; row++) {
//         // iterate through all cols of current row 
//         let colArray = arr[row];
//         // colArray = [1,2,3,4]
//         for(let col =0; colArray.length; col++) {
//             console.log(colArray[col]);
//         }
//     }
// }

function printMatrix(arr, nofRows, nofCols) {
    for (let row=0; row< nofRows; row++) {
        // iterate through all cols of current row 
        //let colArray = arr[row];
        // colArray = [1,2,3,4]
        for(let col =0; col<nofCols; col++) {
            console.log(arr[row][col]);
        }
    }
}

let row1 = [1,2,3,4];
let row2 = [5,6,7,8];
let row3 = [9,10,11,12];
let row4 = [13,14,15,16];
let arr = [row1, row2, row3, row4];
// console.log(arr);
// printMatrix(arr,2,4); 

/*


*/

function printSpiralMatrix(arr, totalRows, totalCols) {
    let i;  //  iterator
    let startingRow = 0;  //  starting row
    // let m;  //  ending row
    let startingCol = 0;  //  starting column
    // let n;  //  ending col

    console.log(arr);
    
    while(startingRow < totalRows && startingCol < totalCols) {
        // Print the current first row
        for(i=startingCol; i<totalCols; i++) { //sc=0 tc=4
            console.log(arr[startingRow][i] + " ");//arr[0][i]
        }
        
        // cR = 1
        startingRow++;
        // CR = 2

        // Print the current last column
        for(i=startingRow; i<totalRows; i++) {
            //pc =  pr=3
            console.log(arr[i][totalCols-1] + " ");
            //arr[1][3] arr[2][3] arr[3][3]
        }

        // PC = 4
        totalCols--;
        // PC = 3

        // Print the current last row
        if(startingRow < totalRows) {
            //13 14 15 tc=3 sc=0 tr=4 sr=1
            //
            for(i=totalCols-1; i >= startingCol; --i) { //sc = 0
                console.log(arr[totalRows-1][i] + " ");
                // arr[3][2] arr[3][1] arr[3][0]
            }

            totalRows--;
        }
        // Print the current first column
        if(startingCol < totalCols) {
            for(i=totalRows-1; i >= startingRow; --i) {
                console.log(arr[i][startingCol] + " ");
                // arr[2][0] arr[1][0]
            }

            startingCol++;
        }
    } 
}

// printSpiralMatrix(arr,4,4);

/*
    Print matrix in waveform 

    Input:
    1,2,3,4
    5,6,7,8

    Putput:
    1,5,6,2,3,7,8,4
*/

function waveMatrix(mat, totalRows, totalCols) {
    for(let i=0; totalCols; i++) {
        // cols[][i];
    }
}

/*
90 degree rotation of matrix

Input 
1,2,3,4 -0th row
5,6,7,8 - row 1

Output for clockwise 90 degree rotation:
5 1
6 2
7 3
8 4

*/


/*
    Bomb explosion matrix problem
    input
    0 0 0 0
    0 0 0 0
    0 -1 0 -1
    0 0 0 0

    bombs = [2,3] [2,1]

    Output
    after 2,3 bomb 
    0 0 0 0
    1 1 1 0
    1 -1 1 -1
    1 1 1 0

    after 2,1
    0 0 0 0
    1 1 2 1
    1 -1 2 -1
    1 1 2 1
*/