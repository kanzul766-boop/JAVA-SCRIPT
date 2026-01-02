//Declare an empty array using JS literal notation to store student names in future.
var array1 = [];

//Declare an empty array using JS constructor notation to store student names in future.
var array2 = new Array();

//Declare and initialize a string array.
var studentNames = ["Sehrish", "Ayesha", "Owaise"];

//Declare and initialize a number array.
var studentAges = [20, 21, 19, 22];

//Declare and initialize a boolean array.
var studentPassed = [true, false, true, true];

//Declare and initialize a mixed array.
var mixedArray = ["Sehrish",35, true, "Ayesha", 34, false];

//Declare and initialize an array & store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like.
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h3>Qualifications:</h3><br>");
document.write("<ol><li>SSC</li><li>HSC</li><li>BCS</li><li>BS</li><li>BCOM</li><li>MS</li><li>M. Phil.</li><li>PhD</li></ol>");

//Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var studentNames2 = ["Sehrish", "Ayesha", "Owaise"];
var studentScores = [450, 400, 350];
var totalMarks = 500;
console.log("Score of Sehrish is "+ studentScores[0]+". Percentage: "+ (studentScores[0]/totalMarks*100) +"%");
console.log("Score of Ayesha is "+ studentScores[1]+". Percentage: "+ (studentScores[1]/totalMarks*100) +"%");
console.log("Score of Owaise is "+ studentScores[2]+". Percentage: "+ (studentScores[2]/totalMarks*100) +"%");

//Initialize an array with color names. Display the array elements in your browser.
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.display the updated array in your browser.
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.display the updated array in your browser.
//c. Add two more color to the beginning of the array.display the updated array in your browser.
//d. Delete the first color in the array.display the updated array in your browser.
//e. Delete the last color in the array.display the updated array in your browser.
//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.display the updated array in your browser.
//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.display the updated array in your browser.
var colors = ["Red", "Green", "Blue"];
console.log("Initial Colors: " + colors.join(", "));
var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
console.log("After adding to beginning: " + colors.join(", "));
var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
console.log("After adding to end: " + colors.join(", "));
colors.unshift("Yellow", "Purple");
console.log("After adding two more to beginning: " + colors.join(", "));
colors.shift();
console.log("After deleting first color: " + colors.join(", "));
colors.pop();
console.log("After deleting last color: " + colors.join(", "));
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorNameToAdd = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorNameToAdd);
console.log("After adding color at index " + indexToAdd + ": " + colors.join(", "));
var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
console.log("After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", "));

//Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var studentScores2 = [320, 230, 480, 120];
console.log("Scores of Students: " + studentScores2.join(", "));
studentScores2.sort(function(a, b){return a-b});
console.log("Ordered Scores of Students: " + studentScores2.join(", "));

//Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 5);
console.log("Cities List: " + cities.join(", "));
console.log("Selected Cities List: " + selectedCities.join(", "));

//Write a program to create a single string from the below mentioned array:
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log("Array: " + arr.join(", "));
console.log("String: " + singleString);

//Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");
console.log("Devices:");
console.log("Out:");
console.log(fifoArray.shift());
console.log("Out:");
console.log(fifoArray.shift());
console.log("Out:");
console.log(fifoArray.shift());
console.log("Out:");
console.log(fifoArray.shift());

//Create a new array. Store values one by one in such a way that you can access the values in reverse order. (LIFO-Last In First Out)
var lifoArray = [];
lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");
console.log("Devices:");
console.log("Out:");
console.log(lifoArray.pop());
console.log("Out:");
console.log(lifoArray.pop());
console.log("Out:");
console.log(lifoArray.pop());
console.log("Out:");
console.log(lifoArray.pop());

//Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
var i;
for(i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}