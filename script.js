const boardSize = 8;

const board = Array.from({length: boardSize}, ()=> Array(boardSize));

function newNode(distance = null, value = null) {
    return {
        value: value,
        distance: distance,
        predecessor: null
    };
}

const start = [3, 3];


function createMoves(start, distance = 0) {
    const x = start[0];
    const y = start[1];

    //If the values exceed the board throw an error
    if(x < 0 || y < 0 || x > 7 || y > 7) {
        throw new Error("Choose a valid startpoint [x, y] where x and y both must be greater than 0 and smaller than 8");
    }

    //Store the starting vertex in the graph
    board[x][y] = newNode(distance, start);
    const currentNode = board[x][y];
    const queue = [];
    queue.push(currentNode);

    while(queue.length > 0) {
        const node = queue.shift();

        //Returns multiple child items - in an array or object
        potentialMoves(node);

        //
    }

};

//Takes in a parentNode and generates all it's possible next level vertexes
function potentialMoves(parentNode) {

    //Create a generic template for all potential children nodes
    const childNode = newNode(++parentNode.distance);
    childNode.predecessor = parentNode;

}

createMoves(start);
console.log(board);

function addSpace(board, a, b) {
    board[a][b].push(newNode())
    board[b][a].push(newNode());
}