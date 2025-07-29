//  1. Primitive Types
// These hold simple values and are stored directly.

// number

// string

// boolean

// null

// undefined

// bigint

// symbol




// 🔹 2. Reference Types
// These store references to more complex data structures.

// object (includes objects, arrays, functions)

// array

// function

// tuple (technically a kind of array in TypeScript)

// enum (in TypeScript, enums are compiled to objects and are reference-like)




// 🔹 Special Types (not exactly primitive or reference)
// any – can be any type (primitive or reference)

// void – usually for functions that return nothing

// never – for functions that never return (like throw)


let isActive: boolean = true;
let items: number = 30;
let userName: string = "John Doe";

// 2. Complex Types
let user: { name: string; age: number; isActive: boolean } = {
    name: "Alice",
    age: 25,
    isActive: true
};
// 3. Array Types
let scores: number[] = [90, 85, 88];
let names: string[] = ["Alice", "Bob", "Charlie"];
// 4. Tuple Types
let userTuple: [string, number] = ["Alice", 25];
// 5. Enum Types
enum Role {
    Admin,
    User,
    Guest
}
// var age = 10; // This is a number type
let userRole: Role = Role.Admin;
// 6. Any Type
let randomValue: any = "Could be anything";
// 7. Void Type
function logMessage(message: string): void {
    console.log(message);
}

// return number
