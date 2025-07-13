### 1. Basic Commands

#### Set a variable

```cmake
set(VARIABLE_NAME value)
```

#### Minimum CMake version and project declaration

```cmake
cmake_minimum_required(VERSION 3.16)
project(ProjectName)
```

#### Set C/C++ standard

```cmake
set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)
```

---

### 2. Enabling Tests

```cmake
enable_testing()
```

Tells CMake that the project will include tests (e.g., with GoogleTest or CTest).

---

### 3. Organising Source and Header Files

Good practice: define sources and headers in variables for clarity and reuse.

```cmake
set(Headers
    Example.hpp
)

set(Sources
    Example.cpp
)
```

---

### 4. Creating a Static Library

```cmake
add_library(${PROJECT_NAME} STATIC ${Sources} ${Headers})
```

This creates a static library using the specified source and header files.

### 5. Add Subdirectory

```cmake
add_subdirectory(test)
```

This adds the `test` directory to the build.  
CMake will look for a `CMakeLists.txt` file inside the specified directory and execute it in the context of a sub-project (a child scope of the main project).  
Each subdirectory **must** have its own `CMakeLists.txt`.

### Add Executable

The `add_executable()` command tells CMake to build an executable from the specified source files. It takes the name of the output binary and a list of source files. This target becomes part of the build system, and CMake automatically tracks dependencies. Example:

```cmake
add_executable(my_app main.cpp utils.cpp)
```

This creates an executable named `my_app` compiled from `main.cpp` and `utils.cpp`.

### Target Link Libraries

The `target_link_libraries()` command links a target (e.g., an executable or library) with one or more libraries. It handles dependency resolution and ensures correct include paths and linking. Usage:

```cmake
target_link_libraries(my_app PRIVATE mylib)
```

Here, `my_app` is linked with `mylib`. The `PRIVATE` keyword means `mylib` is only needed for `my_app` and won’t propagate to targets depending on `my_app`. Use `PUBLIC` or `INTERFACE` for different visibility.