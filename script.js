function addEdge(adjList, i, j) {
    adjList[i].push(j);
    adjList[j].push(i); //Knights move in an undirected pattern
}