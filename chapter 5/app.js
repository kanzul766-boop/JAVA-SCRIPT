//Write a program that take two numbers & add them in a new variable . show the result in your browser.
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<hr>");

//Repeat task for subtraction, multiplication, division & modulus.
var difference = num2 - num1;
document.write("<br>The difference of " + num2 + " and " + num1 + " is: " + difference);
var product = num1 * num2;
document.write("<br>The product of " + num1 + " and " + num2 + " is: " + product);
var quotient = num2 / num1;
document.write("<br>The quotient of " + num2 + " and " + num1 + " is: " + quotient);
var remainder = num2 % num1;
document.write("<br>The remainder of " + num2 + " and " + num1 + " is: " + remainder  + "<hr>");

//Do the following using JS Mathematic Expressions.
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial value: 5”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value after increment is: 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value after decrement is: 12”.
//k. Show the remainder after dividing the variable’s value by 3.
//l. Output : “The remainder is : 0”.
var variable;
document.write("<br>Value after variable declaration is: " + variable + "<br>");
variable = 5;
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable += 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>");
var rem = variable % 3;
document.write("The remainder is : " + rem + "<br>"    +    "<hr>");

//Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("<br>Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR" + "<hr>");

//Write a script to display multiplication table of any number in your browser. E.g.:
var tableNumber = 4;
document.write("<br>Multiplication Table of " + tableNumber + "<br>");
document.write("tableNumber" + "x 1" + "=" + (tableNumber*1) + "<br>");
document.write("tableNumber" + "x 2" + "=" + (tableNumber*2) + "<br>");
document.write("tableNumber" + "x 3" + "=" + (tableNumber*3) + "<br>");
document.write("tableNumber" + "x 4" + "=" + (tableNumber*4) + "<br>");
document.write("tableNumber" + "x 5" + "=" + (tableNumber*5) + "<br>");
document.write("tableNumber" + "x 6" + "=" + (tableNumber*6) + "<br>");
document.write("tableNumber" + "x 7" + "=" + (tableNumber*7) + "<br>");
document.write("tableNumber" + "x 8" + "=" + (tableNumber*8) + "<br>");
document.write("tableNumber" + "x 9" + "=" + (tableNumber*9) + "<br>");
document.write("tableNumber" + "x 10" + "=" + (tableNumber*10) + "<hr>");

//The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemp = 25;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write("<br>" + celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");
fahrenheitTemp = 70;
celsiusTemp = (fahrenheitTemp - 32) * 5/9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C<br>" + "<hr>");

//Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("<br>Price of item 1 is " + item1Price + "<br>");

