from collections import defaultdict


class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def addEdge(self, u, v):
        self.graph[u].append(v)

    def getNumberOfNodes(self):
        return len(self.graph)

    def BFS(self, startingNode):
        visited = [False] * self.getNumberOfNodes()
        queue = []
        queue.append(startingNode)
        visited[startingNode] = True
        while queue:
            node = queue.pop(0)
            print(node)
            for adjacentNode in self.graph[node]:
                if not visited[adjacentNode]:
                    queue.append(adjacentNode)
                    visited[adjacentNode] = True


if __name__ == "__main__":
    graph = Graph()
    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 2)
    graph.addEdge(2, 0)
    graph.addEdge(2, 3)
    graph.addEdge(3, 3)
    graph.BFS(2)
