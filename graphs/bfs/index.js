const { Graph } = require("../graph");
class BFS extends Graph {
  BFS(startingNode) {
    const visitedNodes = Array.from(
      { length: this.getNumberOfNodes() },
      () => false
    );
    const queue = [];
    queue.push(startingNode);
    visitedNodes[startingNode] = true;
    const data = [];
    while (queue.length) {
      const node = queue.shift();
      data.push(node);
      for (const adjacentNode of this.graph[node]) {
        if (!visitedNodes[adjacentNode]) {
          queue.push(adjacentNode);
          visitedNodes[adjacentNode] = true;
        }
      }
    }
    return data;
  }
}

module.exports = { BFS };
