# Intro to Programming with `JavaScript`

<p align="center">
<img width="100" height="100" src="https://skillicons.dev/icons?i=js" />
</p>

## JavaScript Course Progress

> **Reference:** _A Smarter Way to Learn JavaScript_

> **Purpose:** This is the teaching roadmap.

## 1. Getting Started

- [x] Script placement and `defer`
- [x] Console output
- [ ] Browser DevTools and debugging (important)
- [x] Comments
- [x] Alerts and prompts

## 2. Variables and Operators

- [x] `let` vs `const` vs `var`
- [x] Primitive data types and `typeof`
  - [x] `null`, `undefined` and `NaN`
- [x] String-to-number conversion
- [x] Number-to-string conversion
- [x] Arithmetic operators
- [x] Assignment operators
- [x] Comparison operators (prefer strict equality)
- [x] Logical operators
- [x] String concatenation
- [x] Template literals

## 3. Conditions and Strings

- [x] `if` and `else`
  - [x] `else if`
- [x] Truthy and falsy values
- [x] Ternary operator
- [x] Nested conditions
- [x] `switch`
- [x] String
  - [x] length and `trim()`
  - [x] String `includes()`, `indexOf()`
  - [x] String `slice()`
  - [x] `toLowerCase()` and `toUpperCase()`
  - [x] `replace()` and `replaceAll()`

## 4. Arrays and Loops

- [x] Array basics and indexing
  - [x] Array `length`
  - [x] `push()` and `pop()`, `shift()` and `unshift()`
  - [x] Array `slice()`
  - [x] `splice()`
- [x] `for` loop
  - [x] Flags, `break` and `continue`
- [x] `for...of,in`
- [x] `while`
- [x] `do...while` (skip)

## 5. Functions and Scope

- [x] Function declarations
  - [x] Parameters and return values (important)
  - [x] Default parameters
- [x] Local and global variables
- [x] Block scope
- [x] Function expressions and Arrow functions
- [ ] Hoisting and temporal dead zone
- [ ] Callback functions (important)
- [ ] Higher-order functions
- [x] Additional LeetCode practice (skip)

## 6. Objects and Useful Array Methods

- [x] Object basics
  - [x] Reading and updating properties
  - [x] Object methods
    - [ ] `this` inside an object method
- [x] Arrays of objects (important)
  - [x] `forEach()`
  - [x] `map()`
  - [x] `filter()`
  - [x] `find()`
  - [x] `for...in`; use object methods later
  - [x] Array `includes()`
  - [x] `some()` and `every()`
  - [ ] `reduce()`; (skip)
- [ ] Destructuring
- [ ] Spread syntax
- [x] Rest syntax
- [ ] Optional chaining
- [ ] Nullish coalescing (`??`)
- [x] `Object.keys()` and `Object.values()`
- [x] `Object.entries()`
- [ ] Primitive values and object references (important)
  - [ ] Argument passing; JavaScript passes values, including reference values
  - [ ] Shallow copies; spread does not copy nested objects (important)
  - [ ] Deep-copy techniques (skip)

## 7. DOM Basics

- [ ] What the DOM is
- [x] Selecting elements
  - [ ] `textContent`
  - [ ] `classList`
  - [ ] Inline styles
  - [ ] Attributes; practice changing an image source
- [ ] Parents and children
- [ ] Creating elements
  - [ ] Appending and inserting elements
  - [ ] Removing elements
- [ ] Rendering arrays as a list (important)
  - [ ] `innerHTML`; use `textContent` for user/API text (important)

## 8. Events and Forms

- [ ] `addEventListener()`
  - [x] Click events
  - [ ] Event object and `event.target` (important)
  - [ ] Input and change events
  - [ ] Keyboard events
  - [ ] Exhaustive mouse-event coverage (skip)
- [ ] Form submit events
  - [x] `preventDefault()`
  - [ ] reset and focus
- [x] Form handling and validation (important)
- [ ] Event bubbling
  - [ ] Event delegation; use a dynamic delete button
- [x] Counter exercise
- [ ] Form validation exercise
- [x] Todo list project

## 9. JSON and Persistence

- [x] JSON format
  - [x] `JSON.stringify()`
  - [x] `JSON.parse()`
- [x] `localStorage`
  - [x] Restore saved state and render it
- [ ] `sessionStorage`
- [ ] Cookie implementation (skip)
- [ ] `window.location`
- [ ] Browser history controls (skip)
- [x] Local storage project: upgrade the existing todo app

## 10. Numbers and Dates — Short Revision

- [x] Rounding
- [x] Random numbers
- [x] Decimal precision; `toFixed()` returns a string
- [x] Creating dates
  - [x] Extracting date components
  - [x] Changing date components (skip)
  - [x] Additional `date-fns` coverage (skip)
- [ ] Separate digital clock project (skip)

## 11. Async JavaScript and Errors

- [ ] Synchronous versus asynchronous execution
  - [ ] `setTimeout()`; demonstrate execution order
- [ ] Call stack
- [ ] Event loop; explain why async callbacks run later
- [ ] Callback hell exercises (skip)
- [ ] Promises and their states
  - [ ] `.then()` and `.catch()`
  - [ ] Promise `.finally()`
- [ ] `async` and `await` (important)
- [x] `try` and `catch` (important)
  - [x] `throw`
  - [x] `finally`
  - [x] Common error types and reading error messages

## 12. Fetch and APIs

- [x] HTTP requests and responses
  - [ ] Status codes
- [ ] GET with `fetch()`
  - [ ] Reading JSON responses
  - [x] Checking `response.ok`; HTTP errors do not automatically reject fetch (important)
- [ ] Rendering API data
  - [ ] Loading state
  - [ ] Empty state
  - [ ] Error state and retry (important)
- [ ] POST; send a JSON body
- [ ] PUT and PATCH
- [ ] DELETE
- [ ] `Promise.all()`
- [ ] `Promise.allSettled()` (skip)
- [ ] `Promise.race()` (skip)
- [ ] API app; choose a searchable directory or weather app

## 13. Modules and Essential Tooling

- [ ] ES modules: `import` and `export`
  - [ ] Named and default exports
  - [ ] Browser module scripts; run through a local development server
- [ ] Node.js as a tool runtime
- [ ] npm
  - [ ] `package.json`
  - [ ] Dependencies and devDependencies
  - [ ] `node_modules`
- [ ] `.gitignore`
- [ ] Environment variables; frontend variables cannot keep secrets (important)
- [ ] CommonJS: `require()` and `module.exports` (skip)

## 14. Short Introductions and Topics to Defer

- [ ] OOP concepts; short introduction
  - [ ] Constructor functions and `new` (skip)
  - [ ] Prototypes (skip)
  - [ ] Reading a basic ES6 class; short introduction
    - [ ] Getters and setters (skip)
  - [ ] Inheritance (skip)
    - [ ] `extends` and `super` (skip)
- [ ] Detailed execution contexts (skip)
- [ ] Memory-management internals (skip)
- [ ] Detailed scope-chain mechanics (skip)
- [ ] `this` in regular functions versus arrow functions; one example
  - [ ] `call()` and `apply()` (skip)
  - [ ] `bind()` (skip)
- [ ] Basic closures; recognize a function using an outer variable
  - [ ] Closures in depth (skip)
- [ ] Microtask versus macrotask ordering (skip)
- [ ] Promise/event-loop output puzzles (skip)
- [ ] Separate quiz app project (skip)

## 15. Final Practical Check

- [ ] Final project: improve the API app instead of starting another app
  - [ ] Add search or filtering
  - [ ] Persist favorites using `localStorage`
  - [ ] Split code into modules
  - [ ] Demonstrate loading, empty, and error states
  - [ ] Explain the code and make one small change without copying (important)

## Teaching Suggestions

- Start with a short fundamentals check. Revisit checked topics only where students struggle.
- Teach one concept, show one example, then ask students to change it independently.
- Provide starter HTML/CSS so practice time stays focused on JavaScript.
- Reuse the todo app for DOM and storage. Reuse the API app for modules and the final project.
- Use realistic data: products, students, tasks, and favorites.
- Set short homework after every class. Begin the next class by fixing one common mistake.
- Test the chosen API before class and keep sample JSON available as a fallback.
- If time shrinks further, drop (skip) topics first. Cover the remaining sequence and protect practice time for (important) topics.
- Use AI after students make a first attempt. Ask them to explain the output, test edge cases, and fix one bug before accepting generated code.
- Assess understanding with a small requirement change, not just a finished app. AI makes syntax lookup easier; students still need to understand data flow, events, and errors.

## Learning Resources

- [Chai aur JavaScript YouTube course](https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)
- [Free JavaScript course with certificate](https://www.freecodecamp.org/learn/javascript-v9/)
- [JavaScript book](https://github.com/shehza-d/Learning-Resources/blob/main/04.JS-Books/JS_from_Beginner_to_professional.pdf)
- Book reference: **A Smarter Way to Learn JavaScript**. Use topic lookup rather than chapter order.

### Course Flow

**Fundamentals → Functions & Problem Solving → DOM & Events → Objects & OOP → Async JS → APIs → Behind the Scenes → Modules → Node.js**
