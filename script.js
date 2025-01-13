const boardSize = 8;

const board = Array.from({length: boardSize}, ()=> []);

function addEdge(adjList, i, j) {

    //i and j below 0 or higher than 7 doesn't exist
    if((i > -1 && i < 8) && (j > -1 && j < 8)) {
        adjList[i].push(j);
        
        //if i = j there would otherwise be a duplicate
        if(i != j) {
            adjList[j].push(i); //Knights move in an undirected pattern
        }
    }
}

//start must be a coordinate [0, 1]
function createPossibleMoves(start) {
    let x = start[0];
    let y = start[1];
    addEdge(board, x, y);
    addEdge(board, (x - 1), (y + 2));
    addEdge(board, (x - 2), (y - 1));
    addEdge(board, (x - 2), (y + 1));
    addEdge(board, (x + 1), (y + 2));
}

createPossibleMoves([3, 3]);
console.log(board);

