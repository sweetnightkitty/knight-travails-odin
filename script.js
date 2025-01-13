const boardSize = 8;

const board = Array.from({length: boardSize}, ()=> []);
console.log(board);

function addEdge(adjList, i, j) {
    adjList[i].push(j);
    adjList[j].push(i); //Knights move in an undirected pattern
}

