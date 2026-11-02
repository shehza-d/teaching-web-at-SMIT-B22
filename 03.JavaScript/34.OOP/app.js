// https://chatgpt.com/share/6ae89c01-c980-83ee-97f7-84c00473e061
// Best OOP course on Youtube: https://youtube.com/playlist?list=PLnd7R4Mcw3rJicg4QtoI8gFkoefyCLvEq&si=U90LN81aoGM1HPcn

class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;

		console.log("Constructor chala...");
	}
}

let s1 = new Student("Asim", 25);
let s2 = new Student("Huzaifa", 15);

console.log(s1.name);
console.log(s2.name);

class Car {
	constructor(model, color, brand) {
		this.model = model;
		this.color = color;
		this.brand = brand;
	}

	start() {
		console.log("stuutututututuuu");
	}
}

// class Bike extends Car {}

let c1 = new Car(2009, "black", "Toyota");
let c2 = new Car(2015, "white", "Nissan");

c1.model = 1999;

console.log(c1.model);

c2.start();
