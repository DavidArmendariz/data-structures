const { BFS } = require(".");

it("should traverse the graph starting from second node", () => {
  const graph = new BFS();
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(2, 0);
  graph.addEdge(2, 3);
  graph.addEdge(3, 3);
  expect(graph.BFS(2)).toEqual([2, 0, 3, 1]);
});
