const boardSize = 8;

const board = Array.from({length: boardSize}, ()=> Array(boardSize));

function newNode(distance = null) {
    return {
        distance: distance,
        predecessor: null
    };
}

const start = [3, 3];


function createMoves(start, distance = 0) {
    const x = start[0];
    const y = start[1];

    //If the values exceed the playable board do nothing
    if(x < 0 || y < 0 || x > 7 || y > 7) {
        return;
    }

    //Takes the start and adds it to the graph with 0 distance; stores it as a node
    board[x][y] = newNode(distance);
    const currentNode = board[x][y];
};

createMoves(start);
console.log(board);

function addSpace(board, a, b) {
    board[a][b].push(newNode())
    board[b][a].push(newNode());
}