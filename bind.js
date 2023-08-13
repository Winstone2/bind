// Define a simple function
function greet(message) {
    console.log(`${message}, ${this.name}`);
}

// Create an object
const person = {
    name: "Alice"
};

// Bind the greet function to the person object
const greetPerson = greet.bind(person);

// Now, calling greetPerson will always use 'person' as the 'this' value
greetPerson("Hello");  // Outputs: Hello, Alice
greetPerson("Hi");     // Outputs: Hi, Alice
greetPerson("Amosi");