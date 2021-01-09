class Graph {
  constructor() {
    this.graph = {};
  }
  addEdge(startNode, endNode) {
    if (this.graph[startNode]) {
      this.graph[startNode].push(endNode);
    } else {
      this.graph[startNode] = [endNode];
    }
  }
  getNumberOfNodes() {
    return Object.keys(this.graph).length;
  }
}

module.exports = { Graph };
