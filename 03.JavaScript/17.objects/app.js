// -------------------Objects----------------------
// object ma order matter nhi karta
// object ko iterate nhi karty
// Collection of key-value pairs.
// Used to represent real-world entities.

// https://www.w3schools.com/js/js_objects.asp

// a - z
// A - Z
// _ $
// 0-9 (except first)

let city = 0;

let a = 6;
someFunction(a);

let student = {
  firstName: "shehzad",
  lastName: "iqbal",
  age: 23,
  isPresent: true,
  isPresident: false,
  gender: "male",
  email: "shehzad@gmail.com",
  hobbies: ["Coding", "Running", "Reciting Quran"],
  school: null,
  address: {
    city: "karachi",
    country: "pakistan",
    postalCode: 345678,
    age: "huzaifa",
  },
};

student.rollNo = 45678;

// delete student.firstName

// Updating values
// student.address.city = "lahore"

// console.log(typeof student);

// if (student.firstName !== undefined)

// for (const a in student){
//     console.log(a);
// }

// car.color = "blue" // updating value
// car.year = 2025 // adding new value

// Object.freeze()

const car = {
  company: "bmw",
  model: "M5",
  color: "black",
};

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

car.neww = "new";
car.company = "hello";

// console.log(car);
// console.log(car["color"]);

// [{},{}]

for (const key in car) {
  // console.log("Key: ", key);
  // console.log("Value: ", car["key"]);
}

// let a = []; // Array ki datatype Object hoti hy

// let b = [];

// for (let i = 0; i < 1000000; i++) {
//   b.push(i * i * i);
// }

// Memory = RAM
// Storage = ROM

// let a =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti nisi numquam accusamus, commodi quia nostrum, ut at ipsa nam placeat aut unde, hic non sequi sed amet magni consequatur ipsum beatae. Sit quod iste voluptate iusto, nihil voluptatibus incidunt architecto modi soluta impedit ab commodi quasi magni! Esse blanditiis provident laudantium laboriosam voluptatum vero animi nobis, labore corporis obcaecati adipisci sint aspernatur rerum voluptatibus? Quidem alias fugiat quia veritatis voluptas magnam praesentium iste dolorum nobis expedita, quasi vitae mollitia quibusdam recusandae. Quisquam illum earum, quibusdam, incidunt veritatis eius animi similique, officia saepe fugiat quo! Culpa id eveniet amet. Porro!";

// let test1 = [4, 5, 6,6];
// test1.push(5)

// Set ma duplicate value nhi ho sagti

// const test = new Set(["ali","shehzad","fatima","ali","shehzad"]);

// test.delete("fatima")

// console.log(test);

// let c = "abcc"

// let d = new Set(c)

// console.log(d);
