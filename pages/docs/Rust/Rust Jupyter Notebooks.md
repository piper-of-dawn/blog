
```
cargo install evcxr_jupyter
evcxr_jupyter --install
```

- Select Rust Jupyter Kernel in VSCode

### Caveats
- Dependencies are added via `:dep <DEPENDENCY_NAME> = "<VERSION_NAME>` and are compiled everytime you restart kernel. Keep all dependencies in separate cell. 
