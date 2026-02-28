
# Python Complete Course

```markdown
# Python Programming - Complete Course

## Table of Contents
1. [Introduction to Python](#introduction-to-python)
2. [Setting Up Python](#setting-up-python)
3. [Basic Syntax](#basic-syntax)
4. [Data Types](#data-types)
5. [Operators](#operators)
6. [Control Flow](#control-flow)
7. [Functions](#functions)
8. [Data Structures](#data-structures)
9. [Object-Oriented Programming](#object-oriented-programming)
10. [File Handling](#file-handling)
11. [Error Handling](#error-handling)
12. [Modules and Packages](#modules-and-packages)
13. [Advanced Topics](#advanced-topics)
14. [Python Projects](#python-projects)

---

## 1. Introduction to Python <a name="introduction-to-python"></a>

Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability with its clean syntax and indentation.

**Key Features:**
- Easy to learn and use
- Interpreted language (no compilation needed)
- Dynamically typed (no need to declare variable types)
- Cross-platform (Windows, macOS, Linux)
- Large standard library
- Supports multiple programming paradigms

**Applications:**
- Web Development
- Data Science and Machine Learning
- Automation and Scripting
- Scientific Computing
- Game Development
- Artificial Intelligence
- Network Programming

---

## 2. Setting Up Python <a name="setting-up-python"></a>

### Installation

**Windows:**
1. Download Python installer from [python.org](https://www.python.org/)
2. Run installer and check "Add Python to PATH"
3. Verify installation:
```bash
python --version
```

**macOS:**
1. Install Homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
2. Install Python:
```bash
brew install python
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install python3
```

### IDEs and Text Editors
- **PyCharm** (Professional and Community editions)
- **VS Code** with Python extension
- **Jupyter Notebook** (for data science)
- **Sublime Text** with Python packages
- **Atom** with Python packages

---

## 3. Basic Syntax <a name="basic-syntax"></a>

### Hello World
```python
print("Hello, World!")
```

### Comments
```python
# Single-line comment

"""
Multi-line comment
or docstring
"""
```

### Variables and Naming Conventions
```python
# Valid variable names
name = "John"
age = 30
_underscore = 10
camelCase = "value"
UPPER_CASE = "CONSTANT"

# Invalid variable names
2nd_var = "invalid"  # Can't start with number
my-var = "invalid"   # Can't contain hyphens
```

### Indentation
Python uses indentation to define blocks of code (no braces `{}`):
```python
if condition:
    print("Indented block")
    nested_block = True
    if nested_condition:
        print("Nested block")
```

---

## 4. Data Types <a name="data-types"></a>

### Basic Data Types

| Type | Description | Example |
|------|-------------|---------|
| `int` | Integer | `42` |
| `float` | Floating point number | `3.14` |
| `str` | String | `"Hello"` |
| `bool` | Boolean | `True` |
| `None` | Null value | `None` |

### Type Conversion
```python
# Convert string to number
num_str = "42"
num_int = int(num_str)
num_float = float(num_str)

# Convert number to string
num = 42
str_num = str(num)

# Convert to boolean
bool_val = bool(0)  # False
```

### Complex Numbers
```python
complex_num = 3 + 4j
print(complex_num.real)   # 3.0
print(complex_num.imag)   # 4.0
```

---

## 5. Operators <a name="operators"></a>

### Arithmetic Operators
```python
a = 10
b = 3

print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
print(a // b) # 3 (floor division)
print(a % b)  # 1 (modulus)
print(a ** b) # 1000 (exponentiation)
```

### Comparison Operators
```python
x = 5
y = 10

print(x == y)  # False
print(x != y)  # True
print(x < y)   # True
print(x > y)   # False
print(x <= y)  # True
print(x >= y)  # False
```

### Logical Operators
```python
a = True
b = False

print(a and b)  # False
print(a or b)   # True
print(not a)    # False
```

### Assignment Operators
```python
x = 5
x += 3  # x = 8
x -= 2  # x = 6
x *= 4  # x = 24
x /= 2  # x = 12.0
x **= 2 # x = 144
```

---

## 6. Control Flow <a name="control-flow"></a>

### Conditional Statements
```python
age = 25

if age < 18:
    print("Minor")
elif age < 65:
    print("Adult")
else:
    print("Senior")
```

### Loops

**For Loop**
```python
# Iterate over a sequence
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Using range
for i in range(5):  # 0 to 4
    print(i)

# With else clause
for i in range(3):
    print(i)
else:
    print("Loop completed")
```

**While Loop**
```python
count = 0
while count < 5:
    print(count)
    count += 1
else:
    print("Count reached 5")
```

### Break and Continue
```python
for i in range(10):
    if i == 5:
        break  # Exit loop when i is 5
    print(i)

for i in range(10):
    if i == 5:
        continue  # Skip when i is 5
    print(i)
```

---

## 7. Functions <a name="functions"></a>

### Defining Functions
```python
def greet(name):
    """This function greets the person passed in as parameter"""
    return f"Hello, {name}!"

print(greet("Alice"))
```

### Function Parameters
```python
# Default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(3))     # 9
print(power(2, 3))  # 8

# Variable-length arguments
def sum_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_all(1, 2, 3, 4))  # 10
```

### Lambda Functions
```python
# Anonymous function
square = lambda x: x ** 2
print(square(5))  # 25

# Using with map()
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16]
```

### Recursion
```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))  # 120
```

---

## 8. Data Structures <a name="data-structures"></a>

### Lists
```python
# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "apple", True, 3.14]

# Accessing elements
print(fruits[0])     # apple
print(numbers[-1])   # 5

# Modifying lists
fruits[0] = "apricot"
fruits.append("orange")
fruits.insert(1, "mango")
fruits.remove("banana")

# List slicing
print(numbers[1:4])   # [2, 3, 4]
print(numbers[:3])    # [1, 2, 3]
print(numbers[3:])    # [4, 5]
print(numbers[::2])   # [1, 3, 5]

# List comprehensions
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### Tuples
```python
# Immutable sequences
point = (3, 5)
colors = ("red", "green", "blue")

# Accessing elements
print(point[0])  # 3
print(colors[1]) # green

# Unpacking
x, y = point
print(x)  # 3
print(y)  # 5
```

### Dictionaries
```python
# Key-value pairs
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Accessing values
print(person["name"])  # Alice

# Adding/updating
person["email"] = "alice@example.com"
person["age"] = 31

# Deleting
del person["city"]

# Dictionary methods
print(person.keys())    # dict_keys(['name', 'age', 'email'])
print(person.values())  # dict_values(['Alice', 31, 'alice@example.com'])
print(person.items())   # dict_items([('name', 'Alice'), ...])
```

### Sets
```python
# Unordered collections of unique elements
fruits = {"apple", "banana", "cherry", "apple"}
print(fruits)  # {'banana', 'cherry', 'apple'}

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}

print(set1 | set2)  # Union: {1, 2, 3, 4, 5}
print(set1 & set2)  # Intersection: {3}
print(set1 - set2)  # Difference: {1, 2}
```

---

## 9. Object-Oriented Programming <a name="object-oriented-programming"></a>

### Classes and Objects
```python
class Dog:
    # Class attribute
    species = "Canis familiaris"
    
    # Initializer
    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age
    
    # Instance method
    def description(self):
        return f"{self.name} is {self.age} years old"
    
    # Another instance method
    def speak(self, sound):
        return f"{self.name} says {sound}"

# Creating objects
my_dog = Dog("Buddy", 5)
print(my_dog.description())  # Buddy is 5 years old
print(my_dog.speak("Woof"))  # Buddy says Woof
```

### Inheritance
```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        raise NotImplementedError("Subclass must implement this method")

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow"

class Bulldog(Dog):
    def run(self, speed):
        return f"{self.name} runs at {speed} mph"

# Polymorphism
animals = [Cat("Whiskers"), Bulldog("Spike")]
for animal in animals:
    print(animal.speak())
```

### Special Methods
```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # String representation
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    # Addition
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    # Equality
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

v1 = Vector(2, 3)
v2 = Vector(5, 7)
print(v1 + v2)  # Vector(7, 10)
print(v1 == v2) # False
```

---

## 10. File Handling <a name="file-handling"></a>

### Reading Files
```python
# Read entire file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())

# Read all lines into a list
with open("example.txt", "r") as file:
    lines = file.readlines()
```

### Writing Files
```python
# Write to a file
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is a second line.")

# Append to a file
with open("output.txt", "a") as file:
    file.write("\nAppended text.")
```

### File Operations
```python
# Check if file exists
import os
print(os.path.exists("example.txt"))

# Rename a file
os.rename("old_name.txt", "new_name.txt")

# Delete a file
os.remove("unwanted_file.txt")
```

---

## 11. Error Handling <a name="error-handling"></a>

### Try-Except Block
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print("Division successful")
finally:
    print("This always executes")
```

### Custom Exceptions
```python
class InvalidAgeError(Exception):
    def __init__(self, age):
        self.age = age
        self.message = f"Invalid age: {age}. Age must be between 0 and 120."
        super().__init__(self.message)

def validate_age(age):
    if age < 0 or age > 120:
        raise InvalidAgeError(age)
    return True

try:
    validate_age(150)
except InvalidAgeError as e:
    print(e)
```

### Logging Errors
```python
import logging

# Configure logging
logging.basicConfig(filename='app.log', level=logging.ERROR)

try:
    result = 10 / 0
except Exception as e:
    logging.exception("An error occurred")
```

---

## 12. Modules and Packages <a name="modules-and-packages"></a>

### Importing Modules
```python
# Import entire module
import math
print(math.sqrt(16))  # 4.0

# Import specific functions
from math import sqrt, pi
print(sqrt(25))  # 5.0
print(pi)        # 3.14159...

# Import with alias
import math as m
print(m.sqrt(36))  # 6.0
```

### Creating Modules

**math_operations.py**
```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
```

**main.py**
```python
from math_operations import add, subtract

result = add(5, 3)
print(result)  # 8
```

### Packages

**mypackage/__init__.py**
```python
# Can be empty or import specific functions
from .module1 import func1
```

**mypackage/module1.py**
```python
def func1():
    print("Function from module1")
```

**main.py**
```python
from mypackage import func1

func1()  # Function from module1
```

---

## 13. Advanced Topics <a name="advanced-topics"></a>

### Decorators
```python
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def calculate_factorial(n):
    if n == 0:
        return 1
    return n * calculate_factorial(n-1)

print(calculate_factorial(5))
```

### Generators
```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Using generator
for num in fibonacci(10):
    print(num)

# Generator expression
squares = (x**2 for x in range(10))
print(next(squares))  # 0
print(next(squares))  # 1
```

### Context Managers
```python
class FileHandler:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()

# Using context manager
with FileHandler("example.txt", "w") as file:
    file.write("Hello, World!")
```

### Asynchronous Programming
```python
import asyncio

async def fetch_data():
    print("Start fetching")
    await asyncio.sleep(2)
    print("Done fetching")
    return {"data": 1}

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())
```

---

## 14. Python Projects <a name="python-projects"></a>

### Project 1: To-Do List Application
```python
class TodoList:
    def __init__(self):
        self.tasks = []
    
    def add_task(self, task):
        self.tasks.append(task)
    
    def view_tasks(self):
        for i, task in enumerate(self.tasks, 1):
            print(f"{i}. {task}")
    
    def delete_task(self, task_num):
        if 1 <= task_num <= len(self.tasks):
            del self.tasks[task_num-1]
        else:
            print("Invalid task number")

# Usage
todo = TodoList()
todo.add_task("Buy groceries")
todo.add_task("Finish report")
todo.view_tasks()
todo.delete_task(1)
```

### Project 2: Web Scraper
```python
import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Extract all links
    links = [a['href'] for a in soup.find_all('a', href=True)]
    
    # Extract page title
    title = soup.title.string if soup.title else "No title"
    
    return title, links

# Usage
url = "https://example.com"
title, links = scrape_website(url)
print(f"Title: {title}")
print(f"Links: {links[:5]}...")  # Show first 5 links
```

### Project 3: Simple Flask Web App
```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    num1 = request.form['num1']
    num2 = request.form['num2']
    result = int(num1) + int(num2)
    return f"Result: {result}"

if __name__ == '__main__':
    app.run(debug=True)
```

---

## Conclusion

This comprehensive Python course covers everything from basic syntax to advanced programming concepts. Python's versatility makes it suitable for a wide range of applications, from simple scripts to complex web applications and data analysis pipelines.

**Next Steps:**
1. Practice coding regularly
2. Build personal projects
3. Explore Python libraries (NumPy, Pandas, Django, Flask)
4. Contribute to open-source projects
5. Participate in coding challenges

Remember: The best way to learn Python is by writing code!
