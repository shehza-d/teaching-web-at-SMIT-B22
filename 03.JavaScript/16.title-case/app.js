let myString = "mY NaMe IS shEhZAd"; // "My Name Is Shehzad"

let array = myString.split(" ");

let result = "";

for (let i = 0; i < array.length; i++) {
  let word = array[i];

  result += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
}

console.log("result:", result);

// console.log(a.replace("h","k"));
// console.log(a.replaceAll("h","k"));
