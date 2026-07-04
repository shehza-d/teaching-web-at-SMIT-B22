// kisi code ko bar bar chalane ky liye

// shuru kidher se hoga aur end kidher hoga
// jab condition true hogyi tw loop ki body chale gyi
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// shuru 5 se aur ak number chor kr
for (let i = 5; i <= 10; i = i + 2) {
  console.log(i);
}

// ulta loop
for (let i = 20; i > 9; i--) {
  console.log(i);
}

// ulta loop
for (let i = 5; i >= -5; i--) {
  console.log(i);
}

// trick
for (let i = 1; i <= 10; i++) {
  console.log(11 - i);
}

// for (initialization; condition; increment / decrement) {
//   loop_body;
// }

// for (  1 ;  2 ; 4) {
//    3
// }

//

// break stop loop
// continue skip 1 iteration
for (let i = 0; i < 20; i++) {
  if (i === 5) {
    break; // break se loop khatam ho jata hy
    continue; // break se loop khatam ho jata hy
  }
  console.log(i);
}

//
let i = 1;

for (; i <= 10; ) {
  console.log(i);
  i++;
}

//

let i = 0;

for (console.log("hello"); i < 10; console.log("hello 3")) {
  console.log("hello 2");
  i++;
}
