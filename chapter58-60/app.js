//i)Get element of id "main-content" and assingn them in variable
var mainContent = document.getElementById("main-content");
//ii)Display all child elements of "main-content" element
console.log(mainContent.children);
//iii)Get all elements of class "render" and show their innerHTML in browser
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}
//iv)Fill input value whose element id first-name using javascript.
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "John";
//v)Repeat part iv for id last-name and email.
var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Doe";
var emailInput = document.getElementById("email");
emailInput.value = "johndoe@example.com";