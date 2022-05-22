console.log("Doubt Class");

/*
sort in ascending order
 5 3 2 9 1 10
 1 2 3 5 9 10 --> ascending order sort
 ce < ne

 ce = 5
 check the next element
 ne = 3
 
 compare ce & ne
    arr[currentIndex] > arr[ni].... position of ce is not right
    arr[currentIndex] < arr[ni]
    move the ce to ne and ne to ce
    3 5 2 9 1 10
currentIndex =0, ni = 1

 a. access the first element
 b. run through the loop to find a smaller element
*/

function sortArra(arr, n) {
    let currentIndex, currentValue, previousIndex;
    for(currentIndex=0; currentIndex<n; currentIndex++) {
        currentValue = arr[currentIndex];

        previousIndex = currentIndex-1;

        while(previousIndex >= 0 && arr[previousIndex] > currentValue) {
            arr[previousIndex+1] = arr[previousIndex];// arr[1] = arr[0]
            previousIndex--;
        }
        arr[previousIndex+1] = currentValue; // arr[0] = 12 
    }
}

/*
Bomb Explosion
*/
function explodeBombs(bombs, nRows, nCols) {
    let outputMatrix = [];
    // let bombs = [[2,3],[2,1]];
    for(let i=0; i< nRows; i++) {
        outputMatrix[i] = [];
        for(let j=0; j< nCols; j++) {
            outputMatrix[i][j] = 0;
        }
    }

    for(let i=0; i< bombs.length; i++){
        let bomb = bombs[i];//[2,-1]
        let rB = bomb[0]; // 2
        let cB = bomb[1]; // -1
        console.log(rB+" "+ cB);
        outputMatrix[rB][cB] = -1;

        for(let i=rB-1; i<= rB+1; i++) {
            for(let j=cB-1; j<= cB+1; j++) {// 2,1
                if(0 <= i && 
                    i< nRows && 
                    0 <= j && 
                    j < nCols && 
                    outputMatrix[i][j] !== -1) /// bomb cell
                {
                    outputMatrix[i][j] += 1;
                }
            }
        }
    }

    console.log("Bombs Exploded matrix ", outputMatrix);
}

let bombs = [[2,1],[2,3]];
let nRows = 4;
let nCols = 4;

explodeBombs(bombs,nRows, nCols);