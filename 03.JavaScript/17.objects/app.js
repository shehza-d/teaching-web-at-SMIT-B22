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

console.log(student);

// if (student.firstName !== undefined)



// for (const a in student){
//     console.log(a);
// }

