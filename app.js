var myWeapon = '';
var AIWeapon = '';
var weapons = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
var result = '';
var score = 0;
var aiWeapons = document.getElementById('aiWeapons');
var myWeapons = document.getElementById('myWeapons');
var resultText = document.getElementById('resultText');
var scoreBox = document.getElementById('score');
var pickPanel = document.querySelector('#pickPanel');
var pickPanelContent = document.querySelector('#pickPanelContent');
var choosePanel = document.querySelector('#choosePanel');
var waitingItem = document.querySelector('.waiting__item');
var resetButton = document.querySelector('.reset__button');
var showRules = function () {
    document.querySelector('#rulesModal').classList.remove('d-none');
};
var closeRules = function () {
    document.querySelector('#rulesModal').classList.add('d-none');
};
var setWeapon = function (weapon) {
    myWeapon = weapon;
    myWeapons.querySelector('.' + weapon).classList.remove('d-none');
    pickPanel.classList.remove('d-none');
    choosePanel.classList.add('d-none');
};
var paperUsed = function () {
    result = (AIWeapon === 'rock' || AIWeapon === 'spock') ? 'win' : 'lost';
};
var rockUsed = function () {
    result = (AIWeapon === 'scissors' || AIWeapon === 'lizard') ? 'win' : 'lost';
};
var scissorsUsed = function () {
    result = (AIWeapon === 'paper' || AIWeapon === 'lizard') ? 'win' : 'lost';
};
var spockUsed = function () {
    result = (AIWeapon === 'scissors' || AIWeapon === 'rock') ? 'win' : 'lost';
};
var lizardUsed = function () {
    result = (AIWeapon === 'spock' || AIWeapon === 'paper') ? 'win' : 'lost';
};
var decideVictory = function () {
    aiWeapons.querySelector('.' + AIWeapon).classList.remove('d-none');
    if (AIWeapon === myWeapon) {
        handleDraw();
    }
    else {
        checkWinner();
    }
    if (result === 'lost') {
        handleLost();
    }
    if (result === 'win') {
        handleWin();
    }
    showPanel();
};
var showPanel = function () {
    waitingItem.classList.remove('d-none');
    pickPanelContent.classList.remove('waiting__content');
    pickPanelContent.classList.add('result__content');
};
var handleDraw = function () {
    result = 'draw';
    resultText.textContent = 'NOBODY WON';
};
var handleLost = function () {
    aiWeapons.classList.add('highlight');
    resultText.textContent = 'YOU LOSE';
    resetButton.classList.add('red');
};
var handleWin = function () {
    score++;
    resultText.textContent = 'YOU WIN';
    scoreBox.textContent = String(score);
    myWeapons.classList.add('highlight');
};
var checkWinner = function () {
    if (myWeapon === 'paper') {
        paperUsed();
    }
    else if (myWeapon === 'rock') {
        rockUsed();
    }
    else if (myWeapon === 'scissors') {
        scissorsUsed();
    }
    else if (myWeapon === 'spock') {
        spockUsed();
    }
    else if (myWeapon === 'lizard') {
        lizardUsed();
    }
};
var reset = function () {
    pickPanel.classList.add('d-none');
    choosePanel.classList.remove('d-none');
    aiWeapons.querySelector('.' + AIWeapon).classList.add('d-none');
    myWeapons.querySelector('.' + myWeapon).classList.add('d-none');
    waitingItem.classList.add('d-none');
    myWeapons.classList.remove('highlight');
    aiWeapons.classList.remove('highlight');
    result = '';
    myWeapon = '';
    AIWeapon = '';
};
var choose = function (weapon) {
    pickPanelContent.classList.add('waiting__content');
    setWeapon(weapon);
    setAIWeapon();
    setTimeout(function () {
        decideVictory();
    }, 1000);
};
var setAIWeapon = function () {
    AIWeapon = weapons[Math.floor(Math.random() * 5)];
};
