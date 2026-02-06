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
function calculateHyp(base, perp) {
  function calculateSquare(x) {
    return x ** 2;
  }
  var hypSquare = calculateSquare(base) + calculateSquare(perp)
  return hypSquare
}
console.log(calculateHyp(2,3));


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
function isPalindrome(str) {
var cleanedStr = str.toLowerCase();
var reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'
function capitalizeFirstLetter(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(capitalizeFirstLetter("the quick brown fox"));

//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
//Sample arguments : 'JSResourceS.com', 'o'
function countLetterOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
console.log(countLetterOccurrences("JSResourceS.com", "o"));

//The Geometrizer: Create 2 functions that calculate properties of a circle, using the definitions here.
//Create a function called calcCircumference :

//pass the radius to the function. 
// calculate the circumference based on the radius, and output "The circumference is NN".

//Create a function called calcArea:

//pass the radius to the function.
//calculate the area based on the radius, and output "The area is NN".

//Circumference of circle  = 2πr
//Area of circle = πr2

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2) + "<br><br>");
}
function calcArea(radius) {
    var area = Math.PI * radius ** 2;
    document.write("The area is " + area.toFixed(2) + "<br><br>");
}
var radius = +prompt("Enter the radius of the circle:");
calcCircumference(radius);
calcArea(radius);
