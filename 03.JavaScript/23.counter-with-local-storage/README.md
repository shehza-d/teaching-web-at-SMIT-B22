# LocalStorage — Quick Revision

## What is localStorage?

**localStorage** is a browser feature that stores **key-value data** on the user's device.

## Key Points

- Data stays after refreshing the page or closing the browser, unless it is cleared.
- Keys and values are stored as **strings**.
- Data belongs to a specific **origin** (protocol, domain, and port).
- Useful for themes, preferences, and simple app data, such as a counter value.
- Avoid storing passwords or other sensitive information.

## Main Methods

```js
// Save a value (or update it if the key already exists)
localStorage.setItem("name", "Shehzad");

// Read a value
const name = localStorage.getItem("name");
console.log(name); // "Shehzad"

// Remove one item
localStorage.removeItem("name");

// Remove all localStorage items for this origin
localStorage.clear();
```

**Remember:** `getItem()` returns `null` if the key does not exist.

## Storing Objects and Arrays

Use **`JSON.stringify()`** to convert an object or array into a string before saving it. Use **`JSON.parse()`** to convert the saved string back into JavaScript data.

### Object Example

```js
const user = { name: "Shehzad", age: 22 };

// Store the object as a JSON string
localStorage.setItem("user", JSON.stringify(user));

// Read and convert it back into an object
const savedUser = JSON.parse(localStorage.getItem("user"));

if (savedUser !== null) {
  console.log(savedUser.name); // "Shehzad"
}
```

### Array Example

```js
const subjects = ["HTML", "CSS", "JavaScript"];

// Store the array as a JSON string
localStorage.setItem("subjects", JSON.stringify(subjects));

// Read and convert it back into an array
const savedSubjects = JSON.parse(localStorage.getItem("subjects"));

console.log(savedSubjects); // ["HTML", "CSS", "JavaScript"]
```

## Memory Flow

**JS data → JSON.stringify() → localStorage → JSON.parse() → JS data**

## localStorage vs sessionStorage

- **localStorage:** Data persists across browser sessions until cleared.
- **sessionStorage:** Data survives a refresh but is cleared when the tab's session ends, usually when you close the tab.

Both store strings and use the same methods shown above.
