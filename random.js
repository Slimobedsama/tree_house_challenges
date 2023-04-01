let userInput = prompt('Input a number between 1 & 100');
while (userInput === '' || userInput > 100 || userInput === null || isNaN(userInput)) {
    userInput = prompt('Input a number between 1 & 100');
}
let randNum = Math.floor(Math.random() * userInput) + 1
const randomNum = `<h3>Your random generated number is ${randNum}.</h3>`;
document.write(randomNum);

let guess = prompt('Pick a number between 1 & 100');
while (guess === '' || guess > 100 || guess === null || isNaN(guess)) {
    guess = prompt('Pick a number between 1 & 100');
}
let guessedNumber = Number(guess);
if(guessedNumber === randNum) {
    document.write('<h3>Hurray!!! You guessed correctly.</h3>')
} else if(guessedNumber < randNum) {
    document.write('<h3>Oops! Less than your guessed.</h3>')
} else if(guessedNumber > randNum) {
    document.write('<h3>Oops! Greater than your guessed.</h3>')
} else {
    document.write('<h3>Oops! Wrongly guessed.</h3>');
}
