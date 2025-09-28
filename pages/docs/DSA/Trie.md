A Trie data structure is simply two things. An array of length (number of characters) and a boolean flag.  

```cpp

struct Node {
	Node *links[26]; // Array of references to next nodes 
	bool flag = false, // If true, no next reference exists in links array. 
	bool contains_key (char ch) {
		return (links [ch-'a'] != NULL); // ch - 'a' is the ASCII of char ch minus start -> 'a'. This gives you point in the array
	}
	void put_key (char ch, Node* node) {
		links[ch-'a'] = node
	}
	Node* get_node (char ch) {
		return links[ch-'a'];
	}
	void mark_end ():
		flag = true;
}

class Trie {
    public:
	    Trie() {
			root new Node();
			}
	void insert (string word) {
		 Node* node  = root;
		 for (int i = 0; i <= word.length(); i++) {
			 char ch = word[i];
			 if !root->contains_key(ch) {
				 root->put_key(ch, new Node())
			 }
		  node->get_node(ch);
		 }
	
    }
    }
```

Every Trie node holds a reference to the next node.  

> Where is the reference stored? >   
