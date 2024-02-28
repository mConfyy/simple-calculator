// Initialize variables num1 and num2
let num1 = 8
let num2 = 2

// Set the text content of elements with IDs "num1-el" and "num2-el" to the values of num1 and num2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Get the element with ID "sum-el"
let sumEl = document.getElementById("sum-el")

// Define the add function
function add() {
    let result = num1 + num2
    // Calculate the sum of num1 and num2 and assign it to the text content of the element with ID "sum-el"
    sumEl.textContent = "Sum: " + result // Addition operation
}

// Call the add function
//add()

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

//subtract()


function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

//divide()


function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

//multiply()



// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let sumEl = document.getElementById("sum-el")

// function add() {
//     sumEl.textContent = num1 + num2
// }

// add()



// This is a variable
//let firstName = "Confidence"
// let lastName = "Osuji"
// let fullName = lastName + " " + firstName
// console.log(fullName)

//This is a funtion 
//let name = "Confyy"
// let greeting = "Hi there"
//  function greetHer() {
//     console.log(greeting + "," + name + "!" )
//  }
//  greetHer()


// let myPoints = 3
// function add3points(){

// }

// f
// function increment() {

// }

// console.log(myPoints)


