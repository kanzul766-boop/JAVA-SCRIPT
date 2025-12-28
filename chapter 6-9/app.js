//Write a program to make a number in a variable,do the required arithmetic to display the following result in your browser:
var num1 = 9 ;
var num2 = 1 ;
var result = num1 + num2 ;
++result
console .log("The value of ++num is: " + result);
document.write("The value of ++num is: " + result + "<br>");

var a = 9 ;
var b = 1 ;
var abresult = a + b ;
abresult++
console.log("The value of abresult is: " + abresult);
document.write("The value of abresult++  is: " + abresult + "<Br>");

var num1 = 13 ;
var num2 = 1 ;
var result = num1 - num2 ;
--result
console .log("The value of --num is: " + result);
document.write("The value of --num is: " + result + "<Br>");

var a = 13 ;
var b = 1 ;
var abresult = a - b ;
abresult--
console.log("The value of abresult is: " + abresult);
document.write("The value of abresult-- is: " + abresult  + "<hr>");

//What will be the output in variables a,b & result after execution of the  following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//--a;  (2-1)=1
//--a - --b;  (1 - 0)=1
//--a - --b + ++b;  (1 + 1)=2
//--a - --b + ++b + b--;  (2 + 1)=3

//Write a program that takes input a name from user & greet the user.
var userName = prompt("Enter your name:");
var welcomeNote = "Welcome to the team, " + userName + "! We're excited to work with you and see your contributions."
"On behalf of everyone, welcome! We're looking forward to achieving great things together."
alert("Hello, " + userName + welcomeNote + "<br>");
document.write("Hello, " + userName + welcomeNote + "<br>");

//Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var number = prompt("Enter a number to display its multiplication table (default is 5):");

//a.Take three subjects name from user & store them in 3 different variables.
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

//b.Take total marks for each subject & store it in another variable.
var totalMarks = 100;

//c.Take obtained marks for first subject from user & store it in different variable.
var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

//d.Take obtained marks for remaining 2 subjects from user & store them in variables.
var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

//e.Now Calculate total marks & percentage & show the result in browser.

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write("<h2>Result</h2>");
document.write("<p>Subject 1: " + subject1 + " - Marks: " + marks1 + "</p>");
document.write("<p>Subject 2: " + subject2 + " - Marks: " + marks2 + "</p>");
document.write("<p>Subject 3: " + subject3 + " - Marks: " + marks3 + "</p>");
document.write("<p>Total Obtained Marks: " + totalObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


//      ------------------THE END-----------------      //