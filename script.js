const boardSize = 8;

const board = Array.from({length: boardSize}, ()=> Array(boardSize));

function newNode() {
    return {
        distance: null,
        predecessor: null
    };
}








//Adds an edge to the gameboard
function addEdge(adjList, i, j) {

    //if row i exists in the list; if j exists return to avoid duplicates
    if(adjList[i]) {
        for(let n = 0; n < adjList[i].length; n++) {
            if(adjList[i][n] == j) {
                return;
            }
        } 
    }

    //i and j below 0 or higher than 7 doesn't exist
    if((i > -1 && i < 8) && (j > -1 && j < 8)) {
        adjList[i].push(j);

        //if i = j there would otherwise be a duplicate
        if(i != j) {
            adjList[j].push(i); //Knights move in an undirected pattern
        }
    }
}

//Assigns the starting location, and all possible next moves to the board (adjacency list)
function createPossibleMoves(start) {
    let x = start[0];
    let y = start[1];

    if(x < 0 || y < 0 || x > 7 || y > 7) {
        return;
    }

    console.log("test:");
    console.log(JSON.parse(JSON.stringify(board[x])));

    console.log(board);

    addEdge(board, x, y);
    addEdge(board, (x - 1), (y + 2));
    addEdge(board, (x - 2), (y - 1));
    addEdge(board, (x - 2), (y + 1));
    addEdge(board, (x + 1), (y + 2));
}

//If knight begins on board at 3, 3; board will show all possible moves


