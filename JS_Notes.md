
Here's the JavaScript code formatted as a markdown (.md) file with detailed explanations:

```markdown
# JavaScript Fundamentals Explained

## Console Methods
```javascript
console.log("This is a console log message.");
console.error("This is an error message.");
console.warn("This is a warning message.");
console.info("This is an informational message.");
console.debug("This is a debug message.");
```

**Explanation:**  
These methods output messages to the console with different purposes:
- `log()`: General information
- `error()`: Error messages (appears in red)
- `warn()`: Warning messages (appears in yellow)
- `info()`: Informational messages
- `debug()`: Debugging information (visible only in debug mode)

## Data Types
```javascript
// Strings
let fullname = "John Doe"; 
let $fullname = "Jane Smith";

// Object
const profile = {
    userName: "@shraddhakhapra",
    isFollow: true,    // Boolean
    posts: 195,        // Number
    role: "Interpreneur" // String
};

// Function
function greet(name) {
    return `Hello, ${name}!`;
}
```

**Explanation:**  
JavaScript has several fundamental data types:
- **Strings**: Text values in quotes (`" "` or `' '`)
- **Numbers**: Both integers and decimals
- **Booleans**: `true` or `false`
- **Objects**: Collections of key-value pairs
- **Functions**: Blocks of code that can be executed

## Conditional Statements
```javascript
let num = -1;

if (num > 0) {
    console.log("Number is positive");
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}
```

**Explanation:**  
Control flow structures that execute different code blocks based on conditions:
- `if`: First condition to check
- `else if`: Additional conditions
- `else`: Default case when no conditions are met

## Loops
```javascript
// for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i <= 3) {
    console.log(i);
    i++;
}

// do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);
```

**Explanation:**  
Loops repeat code execution:
- **for**: Runs when condition is true, increments after each iteration
- **while**: Runs while condition remains true
- **do-while**: Executes at least once before checking condition

## Functions
```javascript
function square(x) {
    return x * x;
}

const result = square(5);
console.log(`The square of 5 is ${result}`);
```

**Explanation:**  
Reusable blocks of code:
- Defined with `function` keyword
- Accept parameters (`x`)
- Return values with `return` statement
- Called by name with arguments (`square(5)`)

## Arrays & Objects
```javascript
// Array operations
let numbers = [1, 2, 3, 4, 5];

// Add/remove elements
numbers.push(6);       // Add to end
numbers.pop();         // Remove from end
numbers.unshift(0);    // Add to start
numbers.shift();       // Remove from start
numbers.splice(2, 0, 4); // Insert at position 2
numbers.splice(2, 1);  // Remove 1 element at position 2

// Object manipulation
const student = {
    name: "John",
    age: 20,
    grade: "A"
};

student.age = 21;          // Add/update property
delete student.age;        // Remove property
```

**Explanation:**  
- **Arrays**: Ordered lists with index positions (0-based)
- **Objects**: Unordered collections of key-value pairs
- Array methods modify the array in different positions
- Object properties can be added/updated/deleted

## Object Properties & Methods
```javascript
const person = {
    name: "John",
    age: 20,
    isStudent: true,
    grade: "A",
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};

console.log(person.greet());  // Method call
console.log(person.name);     // Property access
```

**Explanation:**  
- **Properties**: Variables inside objects (`name`, `age`)
- **Methods**: Functions inside objects (`greet`)
- `this` keyword refers to the current object context
- Access properties with dot notation (`person.name`)

## DOM Manipulation
```javascript
// Selecting elements
const header = document.getElementById("header");
const headings = document.getElementsByClassName("heading");
const allParagraphs = document.getElementsByTagName("p");

// Modifying content
headings[0].textContent = "Hello World";

// Modifying attributes
const link = document.querySelector("a");
link.textContent = "Google";
link.href = "https://www.google.com";

// Event handling
const button = document.querySelector("button");
button.textContent = "Click Me";
button.addEventListener("click", () => {
    alert("Button clicked!");
});

// HTML modification
const firstParagraph = document.querySelector("p");
firstParagraph.innerHTML = "Hello <strong>World</strong>";
```

**Explanation:**  
The DOM (Document Object Model) represents HTML elements as objects:
- **Selection methods**:
  - `getElementById()`: Get by ID
  - `getElementsByClassName()`: Get by class
  - `getElementsByTagName()`: Get by tag name
  - `querySelector()`: CSS-style selection
- **Modification properties**:
  - `textContent`: Text content
  - `href`: Link URL
  - `innerHTML`: HTML content
- **Event handling**: Respond to user actions (`click` event)
```

## Key Features of This Markdown Format

1. **Section Headers**: Clear organization using `##` for major topics
2. **Code Blocks**: Syntax-highlighted JavaScript code using triple backticks
3. **Explanations**: Detailed descriptions below each code block
4. **Modern Syntax**: 
   - Template literals (`${}`)
   - Arrow functions
   - `const`/`let` declarations
5. **Error Corrections**: Fixed typos (e.g., `sqauare` → `square`)
6. **Best Practices**:
   - Descriptive variable names
   - Consistent indentation
   - Comments for clarification
7. **DOM Methods**: Modern `querySelector` and `addEventListener`
8. **Semantic Structure**: Logical grouping of related concepts

This format is ideal for documentation because:
- Preserves code formatting and syntax highlighting
- Allows easy copying of code snippets
- Provides context for each code block
- Follows markdown standards for universal compatibility
- Can be rendered directly in GitHub/GitLab
- Maintains readability with clear section breaks