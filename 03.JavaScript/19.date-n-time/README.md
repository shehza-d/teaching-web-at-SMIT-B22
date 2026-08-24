# JavaScript Date & Time

## 1. What is Date & Time?

A computer needs to represent:

- **Date** → year, month, day
- **Time** → hours, minutes, seconds
- **Date + Time** → a specific moment

---

## 2. Creating a Date

### Current date & time

```js
let rightNow = new Date();

console.log(rightNow);
```

### Specific date

```js
let date = new Date(2026, 7, 24);
```

> **Important:** Months start from `0`.

```text
January → 0
February → 1
...
August → 7
December → 11
```

### Date from string

```js
new Date("2026-08-24");
new Date("2026-08-24T15:30:00");
```

---

## 3. Getting Date & Time

```js
let date = new Date();

date.getFullYear(); // Year
date.getMonth(); // Month (0–11)
date.getDate(); // Day of month (1–31)
date.getDay(); // Day of week (0–6)

date.getHours(); // Hour
date.getMinutes(); // Minutes
date.getSeconds(); // Seconds
date.getMilliseconds(); // Milliseconds
```

### Remember

```text
getDate() → day of month
getDay()  → day of week
```

`getDay()`:

```text
0 Sunday
1 Monday
2 Tuesday
...
6 Saturday
```

---

## 4. Changing Date & Time

```js
let date = new Date();

date.setFullYear(2030);
date.setMonth(5);
date.setDate(15);

date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);
```

Pattern:

```text
get...() → read
set...() → change
```

---

## 5. Formatting

```js
let date = new Date();

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
```

Example ISO:

```text
2026-08-24T07:30:00.000Z
```

`Z` = UTC.

---

# 6. Timestamp

### What is a timestamp?

A timestamp represents a moment as a number.

JavaScript counts **milliseconds since the Unix Epoch**.

```text
Unix Epoch
January 1, 1970 00:00:00 UTC
```

### Get current timestamp

```js
Date.now();
```

or:

```js
new Date().getTime();
```

### Timestamp → Date

```js
let timestamp = Date.now();

let date = new Date(timestamp);

console.log(date);
```

### Date → Timestamp

```js
let date = new Date();

let timestamp = date.getTime();

console.log(timestamp);
```

---

# 7. Date Calculations

Dates can be subtracted.

```js
let start = new Date();
let end = new Date();

let difference = end - start;
```

Result is **milliseconds**.

### Conversions

```text
1000 ms       = 1 second
60 seconds    = 1 minute
60 minutes    = 1 hour
24 hours      = 1 day
```

Example:

```js
let milliseconds = 5000;

let seconds = milliseconds / 1000;

console.log(seconds); // 5
```

---

# 8. UTC vs Local Time

### Local

```js
let date = new Date();

date.getHours();
date.getDate();
date.getFullYear();
```

### UTC

```js
date.getUTCHours();
date.getUTCDate();
date.getUTCFullYear();
```

**Key idea:**

> Same moment, different local times.

Pakistan:

```text
UTC + 5
```

---

# 9. ISO 8601

Common format:

```text
2026-08-24T12:30:00+05:00
```

Breakdown:

```text
2026       → Year
08         → Month
24         → Day
T          → Date/time separator
12:30:00   → Time
+05:00     → Timezone offset
```

UTC example:

```text
2026-08-24T07:30:00Z
```

---

# 10. Comparing Dates

```js
let date1 = new Date("2026-08-20");
let date2 = new Date("2026-08-25");

console.log(date1 < date2);
console.log(date1 > date2);
```

Useful for:

- deadlines
- expiration dates
- appointments
- events

---

# 11. Checking Invalid Dates

```js
let date = new Date("hello");

console.log(isNaN(date.getTime()));
```

`true` → invalid date.

---

# 12. Formatting for Users

```js
let date = new Date();

let formatted = new Intl.DateTimeFormat("en-PK", {
  dateStyle: "full",
  timeStyle: "short",
}).format(date);

console.log(formatted);
```

---

# 13. Real-World Examples

### Current year

```js
let year = new Date().getFullYear();
```

### Current month

```js
let month = new Date().getMonth();
```

### Check deadline

```js
let deadline = new Date("2026-08-25");

if (new Date() > deadline) {
  console.log("Deadline passed");
}
```

### Store creation time

```js
let createdAt = Date.now();
```

Common in databases:

```text
created_at
updated_at
```

---

# 14. Final Mental Model

```text
              Date Object
                  ↓
            Represents a moment
                  ↓
              Timestamp
                  ↓
      Milliseconds since 1970 UTC
                  ↓
       Compare / Calculate / Store
                  ↓
        Format for the user
                  ↓
       Local Time / Timezone
```

## Practice Questions

1. Display the current date.
2. Display the current year.
3. Display the current day of the week.
4. Display the current hour and minute.
5. Create your date of birth.
6. Calculate your approximate age.
7. Convert the current date into a timestamp.
8. Convert a timestamp back into a date.
9. Calculate how many days remain until a given date.
10. Create a deadline and check whether it has passed.
