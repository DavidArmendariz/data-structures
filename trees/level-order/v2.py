from collections import deque

# In this version time complexity is O(n)


class Node:
    def __init__(self, key=None, left=None, right=None):
        self.key = key
        self.left = left
        self.right = right


def levelOrderTraversal(root):
    queue = deque()
    queue.append(root)
    while queue:
        curr = queue.popleft()
        print(curr.key)
        if curr.left:
            queue.append(curr.left)
        if curr.right:
            queue.append(curr.right)


if __name__ == "__main__":
    root = Node(15)
    root.left = Node(10)
    root.right = Node(20)
    root.left.left = Node(8)
    root.left.right = Node(12)
    root.right.left = Node(16)
    root.right.right = Node(25)
    levelOrderTraversal(root)