const boardSize = 8;

const board = Array.from({length: boardSize}, ()=> []);
console.log(board);

function addEdge(adjList, i, j) {
    if((i > -1 && i < 8) && (j > -1 && j < 8)) {
        adjList[i].push(j);
        adjList[j].push(i); //Knights move in an undirected pattern
    }
}


