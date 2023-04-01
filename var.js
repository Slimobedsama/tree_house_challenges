let questions = 3;
let questionLeft = `You have ${questions} questions left`;
const nameOfPerson = prompt(`Name of a person ${questionLeft}`);
const myName = nameOfPerson.charAt().toUpperCase() + nameOfPerson.slice(1);
questions -= 1;
questionLeft = `You have ${questions} questions left`;
const profession = prompt(`List a profession ${questionLeft}`);
const job = profession.charAt().toUpperCase() + profession.slice(1);
questions -= 1;
questionLeft = `You have ${questions} questions left`;
const anyNum = prompt(`List a number between 1 - 50 ${questionLeft}`);
const myAge = anyNum;
alert('Ready to see what\'s next?');
const outPut = `<h3>My name is ${myName}, a respected ${job}, and i am ${myAge}years old.</h3>`
document.write(outPut);
