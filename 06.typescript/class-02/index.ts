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


let nestedArray: string[][] = []
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
role = "student"
role = "student"
role = "reception"
role = "reception"
role = "teacher1"
role = "teacher"
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


// class 02

const multiply = (num1: number, num2: number): number => {
    // return `${num1 * num2}`
    return num1 * num2
}

let result = multiply(2, 4)
// result = ""

// alert("hello typescript")

const returnArrFun = (name1: string, name2: string): string[] => {
    return [name1, name2]
}

const say_hello = (username: string): void => {
    alert(`hello ${username}`)
    // return 11
}

say_hello("user 123");


// tuple
type arrType = (string | boolean | null)[]
let city_names: arrType = ["Karachi", null, false, "Quetta", null]

interface myObjIntrerface2 {
    name: string,
    age: number
}

type myObjIntrerface_2 = {
    name: string,
    age: number
}

let myObject: myObjIntrerface_2 = {
    name: "",
    age: 45,
}

type myCustomRestrictType = [number, string, number, boolean, myObjIntrerface2]
let my__array: myCustomRestrictType = [
    12, "laptop", 223, true,
    {
        name: "username",
        age: 23
    }
]


// type vs interface

type ageType = number | string
type permissionType = string[]
type booleanType = boolean

interface userInterface {
    username: string,
    age: ageType,
    permissions: permissionType,
    isActive: booleanType,
}

type userType = {
    username: string,
    age: ageType,
    permissions: permissionType,
    isActive: booleanType,
    userDetails: userInterface,
}

const userObj__: userType = {
    age: 23,
    isActive: false,
    permissions: ["admin", "attendance"],
    username: "Umar",
    userDetails: {
        age: 34,
        isActive: false,
        permissions: [],
        username: "hello user"
    }
}

interface myInterface {
    username: string
}

type myType = myInterface


// union type
type age_Type = number | string

// intersection
type user = {
    username: string,
    role: rolesType
}

type student = {
    studentId: number
}

type admin = {
    employeeId: number
}

let student: user & student = {
    role: "student",
    username: "student1",
    studentId: 423744
}

// optional

type carType = {
    engine: number,
    color: "black" | "white",
    body: "sedan" | "suv",
    numberPlate?: string,
    seats: number,
}

const myCar: carType = {
    body: "sedan",
    color: "black",
    engine: 800,
    seats: 7,
    // numberPlate: "EAB 1234"
}

// exclude
type myAllTypes = number | boolean | string
type excludedType = Exclude<myAllTypes, boolean>

let myNewVariable: excludedType = 464
let myNewVariable_2: Exclude<myAllTypes, boolean> = 467

let a: string | string[] = "some string"
a = ["da", "ab"]