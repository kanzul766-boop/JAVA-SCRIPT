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

//i) WHAT IS NODE type of element having id "form-content"
var form$content = document.getElementById("form-content");
var node_type = form$content.nodeType;
console.log(node_type);

//ii)
var lname = document.getElementById("last-name");
console.log(lname.childNodes);

//iii)
var update_childNode = (lname.nodeValue = "SMIT");
console.log(update_childNode);

//iv)
var getting_F_Child = mainContent.firstElementChild;
var getting_L_Child = mainContent.lastElementChild;
console.log(getting_F_Child);
console.log(getting_L_Child);

//v)
var find_next = lname.nextSibling;
console.log(find_next);
var find_previous = lname.previousSibling;
console.log(find_previous);

//vi)
var email = document.getElementById("email");

var findParent = email.parentNode
var findNodeType = email.nodeType
console.log(findNodeType);

console.log(findParent);

