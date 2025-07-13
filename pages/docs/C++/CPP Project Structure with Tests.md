# C++ Library Project Structure

## Directory Structure
```
mylib/
├── CMakeLists.txt
├── README.md
├── .gitignore
├── include/
│   └── mylib/
│       ├── mylib.hpp
│       └── math_utils.hpp
├── src/
│   ├── mylib.cpp
│   └── math_utils.cpp
├── tests/
│   ├── CMakeLists.txt
│   ├── test_mylib.cpp
│   └── test_math_utils.cpp
├── examples/
│   ├── CMakeLists.txt
│   └── example_usage.cpp
├── docs/
│   └── README.md
└── cmake/
    └── modules/
        └── FindGTest.cmake
```

## Root CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 3.16)
project(mylib VERSION 1.0.0 LANGUAGES CXX)

# Set C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Set default build type
if(NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif()

# Compiler flags
set(CMAKE_CXX_FLAGS "-Wall -Wextra")
set(CMAKE_CXX_FLAGS_DEBUG "-g")
set(CMAKE_CXX_FLAGS_RELEASE "-O3")

# Add cmake modules path
list(APPEND CMAKE_MODULE_PATH ${CMAKE_CURRENT_SOURCE_DIR}/cmake/modules)

# Library sources
file(GLOB_RECURSE SOURCES "src/*.cpp")
file(GLOB_RECURSE HEADERS "include/*.hpp")

# Create library
add_library(${PROJECT_NAME} ${SOURCES} ${HEADERS})

# Include directories
target_include_directories(${PROJECT_NAME}
    PUBLIC
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
        $<INSTALL_INTERFACE:include>
    PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}/src
)

# Set target properties
set_target_properties(${PROJECT_NAME} PROPERTIES
    VERSION ${PROJECT_VERSION}
    SOVERSION 1
)

# Enable testing
enable_testing()

# Add subdirectories
add_subdirectory(tests)
add_subdirectory(examples)

# Installation
install(TARGETS ${PROJECT_NAME}
    EXPORT ${PROJECT_NAME}Targets
    LIBRARY DESTINATION lib
    ARCHIVE DESTINATION lib
    RUNTIME DESTINATION bin
    INCLUDES DESTINATION include
)

install(DIRECTORY include/
    DESTINATION include
    FILES_MATCHING PATTERN "*.hpp"
)

# Export targets
install(EXPORT ${PROJECT_NAME}Targets
    FILE ${PROJECT_NAME}Targets.cmake
    NAMESPACE ${PROJECT_NAME}::
    DESTINATION lib/cmake/${PROJECT_NAME}
)

# Create config file
include(CMakePackageConfigHelpers)
write_basic_package_version_file(
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}ConfigVersion.cmake"
    VERSION ${PROJECT_VERSION}
    COMPATIBILITY AnyNewerVersion
)

configure_package_config_file(
    "${CMAKE_CURRENT_SOURCE_DIR}/cmake/${PROJECT_NAME}Config.cmake.in"
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
    INSTALL_DESTINATION lib/cmake/${PROJECT_NAME}
)

install(FILES
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}ConfigVersion.cmake"
    DESTINATION lib/cmake/${PROJECT_NAME}
)
```

## tests/CMakeLists.txt
```cmake
# Find Google Test
find_package(GTest REQUIRED)

# Test executable
file(GLOB TEST_SOURCES "*.cpp")
add_executable(${PROJECT_NAME}_tests ${TEST_SOURCES})

# Link libraries
target_link_libraries(${PROJECT_NAME}_tests
    PRIVATE
        ${PROJECT_NAME}
        GTest::GTest
        GTest::Main
        pthread
)

# Include directories
target_include_directories(${PROJECT_NAME}_tests
    PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}
        ${CMAKE_SOURCE_DIR}/include
)

# Discover tests
include(GoogleTest)
gtest_discover_tests(${PROJECT_NAME}_tests)

# Add custom test target
add_custom_target(run_tests
    COMMAND ${CMAKE_CTEST_COMMAND} --verbose
    DEPENDS ${PROJECT_NAME}_tests
)
```

## Header Files

### include/mylib/mylib.hpp
```cpp
#pragma once

#include <string>

namespace mylib {

class MyLib {
public:
    MyLib();
    ~MyLib() = default;
    
    std::string getVersion() const;
    bool initialize();
    void cleanup();
    
private:
    bool m_initialized;
    std::string m_version;
};

} // namespace mylib
```

### include/mylib/math_utils.hpp
```cpp
#pragma once

namespace mylib {
namespace math {

double add(double a, double b);
double multiply(double a, double b);
double divide(double a, double b);
bool isPrime(int n);

} // namespace math
} // namespace mylib
```

## Source Files

### src/mylib.cpp
```cpp
#include "mylib/mylib.hpp"

namespace mylib {

MyLib::MyLib() : m_initialized(false), m_version("1.0.0") {}

std::string MyLib::getVersion() const {
    return m_version;
}

bool MyLib::initialize() {
    if (!m_initialized) {
        // Initialization logic here
        m_initialized = true;
    }
    return m_initialized;
}

void MyLib::cleanup() {
    if (m_initialized) {
        // Cleanup logic here
        m_initialized = false;
    }
}

} // namespace mylib
```

### src/math_utils.cpp
```cpp
#include "mylib/math_utils.hpp"
#include <cmath>
#include <stdexcept>

namespace mylib {
namespace math {

double add(double a, double b) {
    return a + b;
}

double multiply(double a, double b) {
    return a * b;
}

double divide(double a, double b) {
    if (std::abs(b) < 1e-9) {
        throw std::invalid_argument("Division by zero");
    }
    return a / b;
}

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

} // namespace math
} // namespace mylib
```

## Test Files

### tests/test_mylib.cpp
```cpp
#include <gtest/gtest.h>
#include "mylib/mylib.hpp"

class MyLibTest : public ::testing::Test {
protected:
    void SetUp() override {
        lib = std::make_unique<mylib::MyLib>();
    }
    
    void TearDown() override {
        lib.reset();
    }
    
    std::unique_ptr<mylib::MyLib> lib;
};

TEST_F(MyLibTest, GetVersion) {
    EXPECT_EQ(lib->getVersion(), "1.0.0");
}

TEST_F(MyLibTest, Initialize) {
    EXPECT_TRUE(lib->initialize());
}

TEST_F(MyLibTest, InitializeTwice) {
    EXPECT_TRUE(lib->initialize());
    EXPECT_TRUE(lib->initialize()); // Should still return true
}
```

### tests/test_math_utils.cpp
```cpp
#include <gtest/gtest.h>
#include "mylib/math_utils.hpp"
#include <stdexcept>

using namespace mylib::math;

TEST(MathUtilsTest, Add) {
    EXPECT_DOUBLE_EQ(add(2.0, 3.0), 5.0);
    EXPECT_DOUBLE_EQ(add(-1.0, 1.0), 0.0);
    EXPECT_DOUBLE_EQ(add(0.0, 0.0), 0.0);
}

TEST(MathUtilsTest, Multiply) {
    EXPECT_DOUBLE_EQ(multiply(2.0, 3.0), 6.0);
    EXPECT_DOUBLE_EQ(multiply(-2.0, 3.0), -6.0);
    EXPECT_DOUBLE_EQ(multiply(0.0, 5.0), 0.0);
}

TEST(MathUtilsTest, Divide) {
    EXPECT_DOUBLE_EQ(divide(6.0, 2.0), 3.0);
    EXPECT_DOUBLE_EQ(divide(-6.0, 2.0), -3.0);
    
    EXPECT_THROW(divide(5.0, 0.0), std::invalid_argument);
}

TEST(MathUtilsTest, IsPrime) {
    EXPECT_FALSE(isPrime(1));
    EXPECT_TRUE(isPrime(2));
    EXPECT_TRUE(isPrime(3));
    EXPECT_FALSE(isPrime(4));
    EXPECT_TRUE(isPrime(5));
    EXPECT_FALSE(isPrime(9));
    EXPECT_TRUE(isPrime(17));
    EXPECT_FALSE(isPrime(25));
}
```

## Example Usage

### examples/CMakeLists.txt
```cmake
add_executable(example_usage example_usage.cpp)
target_link_libraries(example_usage PRIVATE ${PROJECT_NAME})
target_include_directories(example_usage PRIVATE ${CMAKE_SOURCE_DIR}/include)
```

### examples/example_usage.cpp
```cpp
#include <iostream>
#include "mylib/mylib.hpp"
#include "mylib/math_utils.hpp"

int main() {
    mylib::MyLib lib;
    
    std::cout << "Library version: " << lib.getVersion() << std::endl;
    
    if (lib.initialize()) {
        std::cout << "Library initialized successfully!" << std::endl;
        
        // Math operations
        std::cout << "2 + 3 = " << mylib::math::add(2.0, 3.0) << std::endl;
        std::cout << "4 * 5 = " << mylib::math::multiply(4.0, 5.0) << std::endl;
        std::cout << "10 / 2 = " << mylib::math::divide(10.0, 2.0) << std::endl;
        
        std::cout << "Is 17 prime? " << (mylib::math::isPrime(17) ? "Yes" : "No") << std::endl;
        
        lib.cleanup();
    }
    
    return 0;
}
```

## .gitignore
```
# Build directories
build/
cmake-build-*/

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# Compiled Object files
*.o
*.obj

# Compiled Dynamic libraries
*.so
*.dylib
*.dll

# Compiled Static libraries
*.a
*.lib

# Executables
*.exe
*.out
*.app

# CMake
CMakeCache.txt
CMakeFiles/
cmake_install.cmake
Makefile
*.cmake
!CMakeLists.txt
!cmake/

# Testing
Testing/
CTestTestfile.cmake

# Package files
*.deb
*.rpm
*.tar.gz
*.zip
```

## Build Instructions

### Using Ninja (Recommended)
```bash
# Create build directory
mkdir build && cd build

# Configure with Ninja generator
cmake -G Ninja ..

# Build the project
ninja

# Run tests
ninja test
# or
ctest --verbose

# Run specific test
./tests/mylib_tests

# Build and run example
ninja example_usage
./examples/example_usage
```

### Using Make (Alternative)
```bash
# Create build directory
mkdir build && cd build

# Configure with Make generator
cmake ..

# Build the project
make -j$(nproc)

# Run tests
make test

# Build and run example
make example_usage
./examples/example_usage
```

### Installing Google Test (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install libgtest-dev cmake ninja-build

# If libgtest-dev doesn't provide compiled libraries:
cd /usr/src/gtest
sudo cmake CMakeLists.txt
sudo make
sudo cp lib/*.a /usr/lib
```

### Installing Google Test (macOS)
```bash
brew install googletest cmake ninja
```

This structure provides a solid foundation for a C++ library with modern CMake practices, comprehensive testing with Google Test, and support for both Ninja and Make build systems.
