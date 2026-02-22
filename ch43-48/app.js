//show an alert box on click a link.
//display some mobile images in browser . on click on an Imageshow the message in alert to user.
//display 10 student record in table and each row should contain a delete button .if you click on a delete button a record , entire row should be deleted.
//show a counter in browser .counter should increase on click on increase button and decrease on click on decrease button.and show updated counter value in browser .
// script.js
function deleteRow(button) {
    var row = button.closest('tr');
    if (row) {
        row.remove();
    }
}