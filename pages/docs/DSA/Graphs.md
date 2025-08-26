
*A beautiful way to recurse in Python*
```python
def find_group_leader(node: int) -> int:
        # If node is its own leader, return it; otherwise, find the leader recursively
        return node if group_leader[node] == node else find_group_leader(group_leader[node])
```
