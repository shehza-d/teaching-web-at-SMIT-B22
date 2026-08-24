let now = new Date();

// let date = now.getDate();

// console.log(now);
// console.log(date);
// console.log(now.getFullYear());
// console.log(now.getHours());

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Out",
  "Nov",
  "December",
];
// console.log(months[now.getMonth()]);

// let index = now.getDay()

// console.log(days[index]);

// console.log(now.toString().slice(0, 3));

// now.getMonth()

// ----------------------
// 1) Mon 24 Aug 7:32 PM

let result = "";

result += days[now.getDay()];
result += " " + now.getDate();
result += " " + months[now.getMonth()].slice(0, 3);
let hour = now.getHours();
let ampm = "";

if (hour === 0) {
  hour = 12;
  ampm = "AM";
} else if (hour < 12) {
  ampm = "AM";
} else {
  hour = hour - 12;
  ampm = "PM";
}

result += ` ${hour}:${now.getMinutes()} ${ampm}`;

// 2) 24th/August/2026 07:32:30 PM

let date1 = now.getDate();

if (date1 === 1 || date1 === 21 || date1 === 31) {
  date1 = `${date1}st`;
} else if (date1 === 2 || date1 === 22) {
  date1 = `${date1}nd`;
} else if (date1 === 3 || date1 === 23) {
  date1 = `${date1}rd`;
} else {
  date1 = `${date1}th`;
}

// let result2 = `${date1}/${get}`;

console.log(result2);
