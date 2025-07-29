//Type Inference
//Type Annotations


let name1 = "Alice"; // TypeScript infers this as string
let age1 = 30; // TypeScript infers this as number

let name2: string = "Bob"; // Explicit type annotation
let age2: number = 25; // Explicit type annotation

let name3: string | null | number; // This variable can be a string, null, or number
name3 = "Charlie"; // Assigning a string
name3 = null; // Assigning null
name3 = 42; // Assigning a number

// name3 = ["David", "Eve"]; // This will cause a type error since it's an array, not a string, null, or number


// type annotations with function parameters
function greet(name: string, age: number): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}