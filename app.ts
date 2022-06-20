let myWeapon : string = ''
let AIWeapon : string = ''
const weapons : string[] = ['rock', 'paper', 'scissors', 'spock', 'lizard']
let result : string = ''
let score : number = 0

const aiWeapons : HTMLElement = document.getElementById('aiWeapons')
const myWeapons : HTMLElement =  document.getElementById('myWeapons')
const resultText : HTMLElement = document.getElementById('resultText')
const scoreBox : HTMLElement = document.getElementById('score')
const pickPanel : HTMLElement = document.querySelector('#pickPanel')
const pickPanelContent : HTMLElement = document.querySelector('#pickPanelContent')
const choosePanel : HTMLElement = document.querySelector('#choosePanel')
const waitingItem : HTMLElement = document.querySelector('.waiting__item')
const resetButton : HTMLElement = document.querySelector('.reset__button')

const showRules = (): void => {
    document.querySelector('#rulesModal').classList.remove('d-none')
}

const closeRules = (): void => {
    document.querySelector('#rulesModal').classList.add('d-none')
}

const setWeapon = (weapon : string ) : void => {
    myWeapon = weapon
    myWeapons.querySelector('.' + weapon).classList.remove('d-none')
    pickPanel.classList.remove('d-none')
    choosePanel.classList.add('d-none')
}

const paperUsed = (): void => {
    result = (AIWeapon === 'rock' || AIWeapon === 'spock') ? 'win' : 'lost'
}

const rockUsed = (): void => {
    result = (AIWeapon === 'scissors' || AIWeapon === 'lizard') ? 'win' : 'lost'
}

const scissorsUsed = (): void => {
    result = (AIWeapon  === 'paper' || AIWeapon === 'lizard') ? 'win' : 'lost'
}

const spockUsed = (): void => {
    result = (AIWeapon  === 'scissors' || AIWeapon === 'rock') ? 'win' : 'lost'
}

const lizardUsed = (): void => {
    result = (AIWeapon  === 'spock' || AIWeapon === 'paper') ? 'win' : 'lost'
}

const decideVictory = (): void => {
    aiWeapons.querySelector('.' + AIWeapon).classList.remove('d-none')
    if (AIWeapon === myWeapon) {
        handleDraw()
    } else {
        checkWinner()
    }
    if (result === 'lost') {
        handleLost()
    }

    if (result === 'win') {
        handleWin()
    }
    showPanel()
}

const showPanel = (): void => {
    waitingItem.classList.remove('d-none')
    pickPanelContent.classList.remove('waiting__content')
    pickPanelContent.classList.add('result__content')
}

const handleDraw = (): void => {
    result = 'draw'
    resultText.textContent = 'NOBODY WON'
}

const handleLost = (): void => {
    aiWeapons.classList.add('highlight')
    resultText.textContent = 'YOU LOSE'
    resetButton.classList.add('red')
}

const handleWin = (): void => {
    score++
    resultText.textContent = 'YOU WIN'
    scoreBox.textContent = String(score)
    myWeapons.classList.add('highlight')
}

const checkWinner = (): void => {
    if (myWeapon === 'paper') {
        paperUsed()
    } else if (myWeapon === 'rock') {
        rockUsed()
    } else if (myWeapon === 'scissors') {
        scissorsUsed()
    } else if (myWeapon === 'spock') {
        spockUsed()
    } else if (myWeapon === 'lizard') {
        lizardUsed()
    }
}

const reset = (): void => {
    pickPanel.classList.add('d-none')
    choosePanel.classList.remove('d-none')
    aiWeapons.querySelector('.' + AIWeapon).classList.add('d-none')
    myWeapons.querySelector('.' + myWeapon).classList.add('d-none')
    waitingItem.classList.add('d-none')
    myWeapons.classList.remove('highlight')
    aiWeapons.classList.remove('highlight')

    result = ''
    myWeapon = ''
    AIWeapon = ''
}

const choose = (weapon : string): void => {
    pickPanelContent.classList.add('waiting__content')
    setWeapon(weapon)
    setAIWeapon()
    setTimeout(() => {
        decideVictory()
    }, 1000);
}

const setAIWeapon = (): void => {
    AIWeapon = weapons[Math.floor(Math.random() * 5)]
}
