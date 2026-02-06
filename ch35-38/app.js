//write a fuction that displays current date and time in your browser.
var now = new Date();
document.write("Current date and time: " + now + "<br><br>");

//write a fuction that takes first and last name and then it greets the user using his full name.
function greetUser(firstName, lastName) {
  document.write("Welcome, " + firstName + " " + lastName + "<br><br>");
   
}
greetUser(prompt("Enter your first name:"), prompt("Enter your last name:"));

//write a fuction that adds two numbers (input by user) and returns the sum of two numbers.
function addNumbers(num1, num2) {
    document.write("Sum: " + (num1+num2) + "<br><br>");
}
addNumbers(+prompt("Enter first number:"), +prompt("Enter second number:"));

//Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
function calculator(num1, num2, operator) {
    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid operator";
    }
    document.write("Result: " + result + "<br><br>");
}
calculator(+prompt("Enter first number:"), +prompt("Enter second number:"), prompt("Enter operator (+, -, *, /):") );

//Write a function that squares its argument.
function square(num) {
    document.write("Square of " + num + " is " + (num * num) + "<br><br>");
}
square(+prompt("Enter a number to square:"));

//Write a function that computes factorial of a number.
function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }
    document.write("Factorial of " + num + " is " + fact + "<br><br>");
}
factorial(+prompt("Enter a number to compute its factorial:"));

//Write a function that take start and end number as inputs & display counting in your browser.
function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
countNumbers(+prompt("Enter start number:"), +prompt("Enter end number:"));
document.write("<br>");

//Write a function that calculates the hypotenuse of a right angle triangle.


//Write a function that calculates the area of a rectangle.
//A=length * width
//pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables
function areaOfRectangle(length, width) {
    document.write("Area of rectangle: " + (length * width) + "<br><br>");
}
var len = +prompt("Enter length of rectangle:");
var wid = +prompt("Enter width of rectangle:");
areaOfRectangle(len, wid);

//write a javaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.