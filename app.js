const content = document.querySelector('.content');
const fourthBox = document.querySelector('.box-4');
const msg = document.querySelector('.info-msg');
const figure = document.getElementById('figure');
const outPut1 = document.querySelector('.output-1');
const outPut2 = document.querySelector('.output-2');
const outPut3 = document.querySelector('.output-3');
const outPut4 = document.querySelector('.output-4');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
let gameRound = 1;

function randomGuess() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    outPut1.innerHTML = `Current Random Number: ${randomNum}`;
    outPut2.innerHTML = `Current Guess Number: ${figure.value}`;
    console.log(typeof randomNum);
    if(gameRound === 1) {
        outPut3.innerHTML = 'Previous Random Number ';
        outPut4.innerHTML = 'Previous Guess ';
    }
    outPut3.innerHTML += `${randomNum} `;
    outPut4.innerHTML += `${figure.value} `;

    if(Number(figure.value) === randomNum) {
        msg.innerHTML = 'Hurrah!!! Your Guess Matched The Random Number';
        content.style.backgroundColor = '#00ff00';
        gameOver()
    } else if(figure.value > randomNum) {
        msg.innerHTML = 'Your Guess Is Above The Random Number';
        content.style.backgroundColor = '#ff0000';
        checkValue();
    } else if(figure.value < randomNum) {
        msg.innerHTML = 'Your Guess Is Below The Random Number';
        content.style.backgroundColor = '#ffd700';
        checkValue()
    }
    if(gameRound === 10) {
        msg.innerHTML = 'Game Over';
        gameOver()
    } 
    gameRound++
    figure.focus();
}

resetBtn.addEventListener('click', clearInput);
submitBtn.addEventListener('click', randomGuess);

function playOn() {
    figure.disabled = false;
    submitBtn.disabled = false;
    msg.innerHTML = 'Please Insert A Value';
}

function gameOver() {
    figure.disabled = true;
    submitBtn.disabled = true;
    resetBtn.remove();

    const restart = document.createElement('button');
    restart.id = 'restart';
    restart.textContent = 'Replay';
    fourthBox.appendChild(restart);
    restart.addEventListener('click', replay);
}

function replay() {
    gameRound = 1;
    const paras = document.querySelectorAll('div p');
    paras.forEach((para)=> para.textContent = '');
    restart.remove();
    fourthBox.appendChild(resetBtn)
    figure.disabled = false;
    submitBtn.disabled = false;
    figure.value = '';
    figure.focus();
    content.style.backgroundColor = 'white';
    randomNum = Math.floor(Math.random() * 10) + 1;
}

function checkValue() {
    if(figure.value === '') {
        content.style.backgroundColor = 'white';
        msg.textContent = 'Please Insert A Value'
        msg.style.color = 'Black';
    } else if(figure.value > 10) {
        content.style.backgroundColor = 'white';
        msg.textContent = 'Please Choose A Number Between 1 & 10'
    }
}

function clearInput() {
    if(figure.value != '') {
        figure.value = '';
    }
}
