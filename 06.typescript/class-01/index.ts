let age: number = 66
age = []

let fruit: string = "Mango"
fruit = {}

let isActive: boolean = false
isActive = true
isActive = "string"



let cities: string[] = []
cities.push("Karachi")


let myArray: (number | string | boolean)[] = []
myArray.push(55)
myArray.push("some text")
myArray.push(true)


let nestedArray: (string[])[] = []
nestedArray = [
    ["Lahore", "Quetta", false],
    ["Karachi", "Kashmir"],
    true, 90
]

interface myObjIntrerface {
    name: string,
    age: number
}

let myObj: myObjIntrerface = {
    name: "Junaid",
    age: 44,
}

myObj.name = "Shoaib"
myObj.age = 44


let userArray: myObjIntrerface[] = []

userArray = [
    {
        name: "Junaid",
        age: 44,
    },
    {
        name: "Junaid",
        age: 44,
    }, {
        name: "Junaid",
        age: 44,
    }
]

let all_data: any = "my name"
all_data = 77
all_data = []
all_data = true
all_data = null
all_data = [
    true,
    "my name",
    34
]


// string
// number
// boolean, array, object, null, undefined


// union, intersection, enum, tuple

// enum type

type rolesType = "admin" | "student" | "teacher" | "reception"

let role: rolesType = "admin"
role = "student"
role = "reception"
role = "teacher"


interface memberInterface {
    name: string,
    id: number,
    age: number,
    role: rolesType,
    permissions: string[]
}

let member: memberInterface = {
    age: 22,
    name: "Abdullah",
    id: 798123,
    role: "admin",
    // role: "reception",
    permissions: ["office", "attendance", "monitor"]
}


function sum(num1: number, num2: number) {
    return num1 + num2
}

const sayHello = (user: memberInterface) => {
    // console.log(`hello ${username}`)
}
