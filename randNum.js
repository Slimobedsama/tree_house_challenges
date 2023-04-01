function generateRandomNum(upperNum, lowerNum) {
    if(isNaN(upperNum) || isNaN(lowerNum)) {
        throw new Error('Please insert a number');
    }
    return randomNum = Math.floor(Math.random() * (upperNum - lowerNum + 1)) + lowerNum;
}
// console.log(generateRandomNum('10', 60));
// console.log(generateRandomNum('12', 45));

function randomGenNum() {
    // const userValue = prompt('Choose a number')
    return randomNum = Math.floor(Math.random() * 100) + 1
}

let guess = Number(prompt('Choose a number'));
let numOfTimes = 0;
while(guess !== randomGenNum()) {
    randomGenNum()
    numOfTimes += 1;
}
console.log(`It took ${numOfTimes} times to guess correctly`)