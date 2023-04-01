// CREATE VARIABLE TO HOLD NUMBER OF QUESTIONS & WHAT IS LEFT TO BE ANSWERED
let questions = 5;
let questionsLeft = `You have ${questions} questions left to answer`;
// CREATE A VARIABLE TO HOLD CORRECT ANSWER & WRONG ANSWER
let rightAnswer = 0;
let wrongAnswer = 0;
// DISPLAY THE QUESTIONS AS A POPUP
const freedom = prompt(`When is Nigeria independence, day, month, and year?. ${questionsLeft}`);
questions -= 1;
questionsLeft = `You have ${questions} questions left to answer`;
// CHECK FOR RIGHT OR WRONG ANSWER
if(freedom.toUpperCase() === '1st Oct 1960'.toUpperCase()) {
    rightAnswer += 1;
    alert('You have answered correctly');
} else {
    wrongAnswer += 1;
    alert('You answered incorrectly')
}
// DISPLAY THE QUESTIONS AS A POPUP
const secondPresident = prompt(`Who is Nigeria's second military president?. ${questionsLeft}`);
questions -= 1;
questionsLeft = `You have ${questions} questions left to answer`;
// CHECK FOR RIGHT OR WRONG ANSWER
if(secondPresident.toUpperCase() === 'Gen Yakubu Gowon'.toUpperCase()) {
    rightAnswer += 1;
    alert('You have answered correctly');
} else {
    wrongAnswer += 1;
   alert('You answered incorrectly');
}
// DISPLAY THE QUESTIONS AS A POPUP
const firstOnMoon = prompt(`Who is the first man to land on the moon?. ${questionsLeft}`);
questions -= 1;
questionsLeft = `You have ${questions} questions left to answer`;
// CHECK FOR RIGHT OR WRONG ANSWER
if(firstOnMoon.toUpperCase() === 'neil armstrong'.toUpperCase()) {
    rightAnswer += 1;
    alert('You have answered correctly')
} else {
    wrongAnswer += 1;
    alert('You answered incorrectly');
}
// DISPLAY THE QUESTIONS AS A POPUP
const civilWar = prompt(`Betwen what year was the American civil war fought?. ${questionsLeft}`);
questions -= 1;
questionsLeft = `You have ${questions} questions left to answer`;
// CHECK FOR RIGHT OR WRONG ANSWER
if(civilWar === '1861 - 1865') {
    rightAnswer += 1;
   alert('You have answered correctly');
}else {
    wrongAnswer += 1;
    alert('You answered incorrectly');
}
// DISPLAY THE QUESTIONS AS A POPUP
const bestBasketPlayer = prompt(`Who is the greatest basketball player?. ${questionsLeft}`);
questions -= 1;
questionsLeft = `You have ${questions} questions left to answer`;
// CHECK FOR RIGHT OR WRONG ANSWER
if(bestBasketPlayer.toUpperCase() === 'Micheal Jordan'.toUpperCase()) {
    rightAnswer += 1;
    alert('You have answered correctly');
} else {
    wrongAnswer += 1;
    alert('You answered incorrectly');
}

// DISPLAY TOTAL CORRECT ANSWERS AND RANK
if(rightAnswer === 5) {
    document.write(`<h3>You scored ${rightAnswer} questions correctly</h3>`);
    document.write('<h3>Hurray! You have won a GOLD CROWN</h3>');
} else if(rightAnswer === 4 || rightAnswer === 3) {
    document.write(`<h3>You scored ${rightAnswer} questions correctly</h3>`);
    document.write('<h3>Hurray! You have won a SILVER CROWN</h3>');
} else if(rightAnswer === 2 || rightAnswer === 1) {
    document.write(`<h3>You scored ${rightAnswer} questions correctly</h3>`);
    document.write('<h3>Hurray! You have won a BRONZE CROWN</h3>');
} else {
    document.write(`<h3>You scored ${rightAnswer} questions correctly</h3>`);
    document.write('<h3>Oops! You have got no CROWN</h3>');
}