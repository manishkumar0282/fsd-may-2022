console.log("Basic problem solving on Recursion");

function countPath(maze, r, c) {
    //if the start or end is blocked we say no possible ways
    if(maze[0][0] == -1 || maze[r-1][c-1] == -1) {
        console.log("returning from failure");
        return 0;
    }

    for (let i=0; i< r; i++) {
        
        // there is a possibiity of going from i,0 to i+1,0
        if(maze[i][0] == 0) {
            maze[i][0] = 1;
        }
        
        else {
            break;
        }
    }
    console.log("After row correction "+maze);

    for (let k=0; k<c; k++) {
        console.log("inside col correction i ="+ k+" maze[0][i] "+maze[0][k]);

        // there is a possibiity of going from 0,i to 0,i+1
        if(maze[0][k] == 0) {
            maze[0][k] = 1;
        }
        
        else {
            continue;
        }
    }

    console.log(maze);
    console.log("start for")
    for(let i=1; i< r; i++) {
        for( let j =1; j< c; j++) {
            console.log("i = "+i+ " j= "+j);
            // if blocakge is found
            // check for continue
            if(maze[i][j] == -1) {
                console.log("inside continue");
                continue;
            }

            // if we can reach 
            // is it possible to go to the next row in the same column
            // from 0,0 to 1,0
            if(maze[i-1][j] > 0) {
                maze[i][j] = maze[i][j]+maze[i-1][j];
                // console.log("inside i-1,j "+maze[i][j]);
            }

            // is it possible to go to the next col in the same row
            // from 0,0 to 0,1
            if(maze[i][j-1] > 0) {
                maze[i][j] = maze[i][j]+maze[i][j-1];
                // console.log("inside i, j-1 "+maze[i][j]);
            }

            console.log(maze);
        }
    }
    console.log(maze);
    return maze[r-1][c-1];
}

let maze = [[0,0,0,0], [0,-1,0,0],[-1,0,0,0],[0,0,0,0]];
console.log(countPath(maze, 4,4));