
```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <sstream>

using namespace std;

vector<vector<string>> readCSV(const string& filename) {
    vector<vector<string>> data;
    ifstream file(filename);
    
    if (!file.is_open()) {
        return data;  // Return empty if file can't be opened
    }
    
    string line;
    while (getline(file, line)) {
        vector<string> row;
        stringstream ss(line);
        string cell;
        
        while (getline(ss, cell, ',')) {
            row.push_back(cell);
        }
        
        data.push_back(row);
    }
    
    return data;
}
```

## What is `fstream` and `iostream`?

**Data plumbing system!** C++ streams create channels for information to flow between your program and the outside world (screen, files, memory). `iostream` defines the basic plumbing system, while `fstream` adds special connectors specifically for working with files.

`ifstream file(filename)`: The constructor calls operating system functions to locate the file, check permissions, and obtain a file handle (a reference number the OS uses to track open files). Once opened, the stream object configures internal buffers to efficiently read data from disk when requested.

## What is `sstream`?
cio`