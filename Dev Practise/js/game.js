// // Create secretNumber
// var secretNumber = 4;

// // Ask user for guess
// var stringGuess = prompt("Guess a number");
// var guess = Number(stringGuess);

// // Check to see if user is correct
// if (guess === secretNumber) {
//     alert("Well played!");
// }

// // Otherwise check if higher 
// else if (guess > secretNumber) {
//     alert("Too high, guess again!");
// }

// // Otherwise check if lower
// else {
//     alert("Too low, guess again!");
// }

var count = 5;

while(count < 50) {
    if (count % 5 === 0 && count % 3 ===0)
    console.log(count)
    count++;
}