// Testing to make sure we can run file with Node

console.log('Hello World!')

// Setting up variables with different Data Types

const firstName = "Kyle"
let age = 29
let isCool = true

console.log(firstName, age, isCool)

// Setting up Number variables for addition

let x = 5
let y = 2
let z = 37000

let sum = x + y + z

console.log(sum)

// Setting up String variables for concatenation 

let a = "Hello "
let b = "there, "
let c = "General "
let d = "Kenobi"

let greeting = a + b + c + d

console.log(greeting)

// Importing readline (Boilerplate - don't worry about understanding this right now)

const readline = require('readline')

// Setting up readline instance (Boilerplate - don't worry about understanding this right now)
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

// Setting up Readline Question
// First argument is a string -- "Hello, what is your name"
// Second argument is a function that takes in an input -- function(answer){}
// The actual functionality is defined inside the curly brackets -- {console.log(answer + " is the greatest")}

  reader.question("Hello, what's your name?", function(answer) {
    console.log(answer + " is the greatest");


// Closes readline instance (Boilerplate - don't worry about understanding this right now)
    reader.close()    
  });