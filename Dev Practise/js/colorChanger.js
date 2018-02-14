//Added selectors as variables to make code meaningful.
var button = document.querySelector("button");
var body = document.querySelector("body");

// //This will change the colour of the background from red to white and vice verse.
// button.addEventListener('click', function() {
//     //If anything other than red, change to red
//     if (body.style.background !== "red") {
//         body.style.background = "red";
//     }
//     //Else, change to white
//     else {
//         body.style.background = "white";
//     }
// });

//Cleaner function than earlier (included for learning purposes)
button.addEventListener('click', function() {
    body.classList.toggle("red");
})
