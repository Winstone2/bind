function multiply(a, b) {
    return a * b;
}

// Create a new function that always multiplies by 2
const double = multiply.bind(null, 2);

console.log(double(15));  // Outputs: 10
console.log(double(27));  // Outputs: 16
