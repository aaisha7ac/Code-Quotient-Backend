// mathFunctions.js

// Function to add two numbers
function sum(a, b) {
    return a + b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Exporting functions
  module.exports = {
    sum,
    multiply,
    divide,
    subtract
  };
  