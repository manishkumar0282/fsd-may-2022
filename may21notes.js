console.log("2D Array Problem Solving");

/*
    Diagonal Matrix: all the elements other than the diagonal
    are "0"

    1 0 0
    0 3 0
    0 0 5

    1 0 0
    0 0 0
    0 0 5

    1 0 2
    0 3 0
    0 0 5
    
    Q: Given a matrix, check whether it is diagonal or not
*/
function checkIfDiagonal(mat, totalRows, totalCols) {
    if(totalCols == 0 || totalRows) {
        return false;
    }
    /*
    tr = 3 tc=3
    1 0 0
    0 3 0
    0 0 5
    row=0, col =0, value=mat[0][0]=1
    */
    for(let row=0; row<totalRows; row++) {
        for( let col = 0; col< totalCols; col++) {
            let value = mat[i][j];
            if(i==j) {//Diagonal
                if(value == 0) {
                    return false;
                }
            } else {// i != j -> Non-diagonal
                if(value!=0) {
                    return false;
                }
            }
        }
    }

    return true;
}

/*
row wise sum
tc = 4 tr=4 
*/

function rowWiseSum(mat, totalRows, totalCols) {
    let row = 0;
    //1. iterate through rows
    while(row < totalRows) {       // 2 < 4 
        // do this while you reach the last row
        let value = 0;
        // calculate the value in matrix as [row][col]
        for (let col = 0; col < totalCols; col++) {
            // add this calculated value for all cols and print
            value += mat[row][col];
        }
        console.log("Value  of Row addition ", value);
        // move to the next row
        row++;
    } 
}

/*
    Q. Calculate the sum of upper & lower triangles in a 2d matrix
*/

function calculateTriangleSum(mat, totalRows, totalCols) {
    let row, col;

    let uTS = 0;
    let lTS = 0;
    let diagonalSum = 0;

    for(row=0; row< totalRows; row++) {
        for(col=0; col<totalCols; col++) {
            if(row <= col) {
                uTS += mat[row][col];
            }
        }
    }
    console.log("value of upper triangle sum", uTS);

    for(row=0; row< totalRows; row++) {
        for(col=0; col<totalCols; col++) {
            if(row >= col) {
                lTS += mat[row][col];
            }
        }
    }
    console.log("value of lower triangle sum", lTS);
}
/*
Sparse Matrix
if number of Zeros in a given matrix is more than half of total 
number of elements

1 0 15 0
2 0 0  9
3 0 0  10	    
0 2 0  0	

number of zeros = 9
total number of values = 16
9>16/2 so it is a sparse matrix

*/
function checkIfMatrixIsSparse(mat, totalRows, totalCols) {
    let countOfZeros = 0;
    for(row=0; row< totalRows; row++) {
        for(col=0; col<totalCols; col++) {
            if(mat[row][col] == 0) {
                countOfZeros++;
            }
        }
    }

    if(countOfZeros > (totalCols*totalRows)/2) {
        return true;
    }

    return false;
}

/*
    Find a unique element in a matrix

    Input 4*4 matrix
    Output ->   either list of unique elements or 
                "if no unique element exists -> print "No unique Element found"

    
*/
function checkUnique(mat, totalRows, totalCols) {
    //find the largest number
    let largestNumber = 0;
    for(row=0; row< totalRows; row++) {
        for(col=0; col<totalCols; col++) {
            // iterate through the rows and cols
            // mat[row][col] = 15 lN = 28
            if(mat[row][col] > largestNumber) {
                largestNumber = mat[row][col];
            }
            // lN = 28
        }
    }

    // 28--> 0 to 27... 28th index
    // 1 to 28
    // 0 to 27 index
    // 28 th index if I initialise with 28+1
    // 0 to 28
    let countContaniner = new Array(largestNumber+1).fill(0);
    // cc = [0,0,0,0,0,0,.....28]

    for(row=0; row< totalRows; row++) {
        for(col=0; col<totalCols; col++) {
            // Go to the index represented by mat[row][col]
            // in countContainer
            // 2, 14, 15, 18
            let countIndex = mat[row][col];
            // 2
            countContaniner[countIndex]++;
            // countContaniner[2];
        }
    }

    let uniqueNumbers = "";
    for(let i =0; i< countContaniner.length; i++) {
        if(countContaniner[i] == 1) {
            uniqueNumbers = i + " ";
        }
    }

    if(uniqueNumbers.length == 0) {
        console.log("No unique Numbers found");
    } else {
        console.log(uniqueNumbers);
    }
}

/*
check if number exists in matrix
input given matrix and the target number
output -> Exists or Does not exist
*/

function checkTarget(mat, totalRows, totalCols, target) {
    for(row=0; row< totalRows; row++) {
        for(col=0; col<totalCols; col++) {
            if(mat[row][col] === target) {
                console.log(target + " Exists.");
                return;
            }
        }
    }

    console.log(target + " Does not Exist.");
}

/*
Find element in a array 
*/

function checkTargetWithTwist(mat, totalRows, totalCols, target) {
    // tR = 3
    // tc = 3
    let row = 0;
    let col = totalCols - 1;
    // row 3 col 1 target 12
    while(row < totalRows && col >= 0) {
        let currentValue = mat[row][col];
        // cv = 11
        if(currentValue === target) {
            //Print answer... 
            console.log(target + " Exists.");
            return;
        } else if(currentValue < target) {
            row++;
        } else {
            col--;
        }
    }
    console.log(target + " Does not Exist.");
}
