import './style.css'

let appHtml = null
let appEl = document.getElementById('app')
//check
function renderMainPage() {
    appHtml = `<div class="flex-container">
    <div class="cards">
<div class="modal difficulty-level">
 <h1 class="modal__header">
     Выбери <br>
     сложность
 </h1>
 <div class="difficulty-level__flex-container">
     <div class="difficulty-level__levels" id="easy">
         1
     </div>
     <div class="difficulty-level__levels" id="medium">
         2
     </div>
     <div class="difficulty-level__levels" id="hard">
         3
     </div>
 </div>
 <button class="difficulty-level__button button" id="start-game-button">
      Старт
 </button>
</div>
</div>
</div>`

    appEl.innerHTML = appHtml
}
renderMainPage()

const tuzPik = `<img src="./static/img/tuz-pik.png" alt="card">`
const kingPik = `<img src="./static/img/king-pik.png" alt="card">`
const ladyPik = `<img src="./static/img/lady-pik.png" alt="card">`
const valPik = `<img src="./static/img/val-pik.png" alt="card">`
const tenPik = `<img src="./static/img/10-pik.png" alt="card">`
const ninePik = `<img src="./static/img/9-pik.png" alt="card">`
const eightPik = `<img src="./static/img/8-pik.png" alt="card">`
const sevenPik = `<img src="./static/img/7-pik.png" alt="card">`
const sixPik = `<img src="./static/img/6-pik.png" alt="card">`
const tuzCherv = `<img src="./static/img/a-hrt.png" alt="card">`
const kingCherv = `<img src="./static/img/king-hrt.png" alt="card">`
const ladyCherv = `<img src="./static/img/lady-hrt.png" alt="card">`
const valCherv = `<img src="./static/img/val-hrt.png" alt="card">`
const tenCherv = `<img src="./static/img/10-hrt.png" alt="card">`
const nineCherv = `<img src="./static/img/9-hrt.png" alt="card">`
const eightCherv = `<img src="./static/img/8-hrt.png" alt="card">`
const sevenCherv = `<img src="./static/img/7-hrt.png" alt="card">`
const sixCherv = `<img src="./static/img/6-hrt.png" alt="card">`
const tuzBubn = `<img src="./static/img/a-b.png" alt="card">`
const kingBubn = `<img src="./static/img/k-b.png" alt="card">`
const ladyBubn = `<img src="./static/img/l-b.png" alt="card">`
const valBubn = `<img src="./static/img/v-b.png" alt="card">`
const tenBubn = `<img src="./static/img/10-b.png" alt="card">`
const nineBubn = `<img src="./static/img/9-b.png" alt="card">`
const eightBubn = `<img src="./static/img/8-b.png" alt="card">`
const sevenBubn = `<img src="./static/img/7-b.png" alt="card">`
const sixBubn = `<img src="./static/img/6-b.png" alt="card">`
const tuzKrest = `<img src="./static/img/a-k.png" alt="card">`
const kingKrest = `<img src="./static/img/k-k.png" alt="card">`
const ladyKrest = `<img src="./static/img/l-k.png" alt="card">`
const valKrest = `<img src="./static/img/v-k.png" alt="card">`
const tenKrest = `<img src="./static/img/10k.png" alt="card">`
const nineKrest = `<img src="./static/img/9-k.png" alt="card">`
const eightKrest = `<img src="./static/img/8-k.png" alt="card">`
const sevenKrest = `<img src="./static/img/7-k.png" alt="card">`
const sixKrest = `<img src="./static/img/6-k.png" alt="card">`

let cardsArray = [
    tuzPik,
    kingPik,
    ladyPik,
    valPik,
    tenPik,
    ninePik,
    eightPik,
    sevenPik,
    sixPik,
    tuzCherv,
    kingCherv,
    ladyCherv,
    valCherv,
    tenCherv,
    nineCherv,
    eightCherv,
    sevenCherv,
    sixCherv,
    tuzBubn,
    kingBubn,
    ladyBubn,
    valBubn,
    tenBubn,
    nineBubn,
    eightBubn,
    sevenBubn,
    sixBubn,
    tuzKrest,
    kingKrest,
    ladyKrest,
    valKrest,
    tenKrest,
    nineKrest,
    eightKrest,
    sevenKrest,
    sixKrest,
]

function getRandomInt(cardNumber) {
    let minValue = 0
    let maxValue = 35
    const randomCards = []
    for (let i = 0; i < cardNumber.length; i++) {
        randomCards[i] =
            Math.round(Math.random() * (maxValue - minValue)) + minValue
    }
    return [...randomCards, ...randomCards]
    // return Math.round(Math.random() * (maxValue - minValue)) + minValue
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))

        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

function renderEasyGame() {
    appHtml = `<div class="container">
    <header class="header">
        <div class="header__timer">
<div class="header__text-box">
<p class="header__text">min</p>
<p class="header__text">sec</p>
</div>
<div class="header__count">
00.00
</div>
        </div>
        <button class="header__button button">
            Начать заново
        </button>
    </header>
    <div class="cards-field">
    </div>
</div>`

    appEl.innerHTML = appHtml

    const randomCardsIds = getRandomInt(3)

    const shuffledArray = shuffle(randomCardsIds)

    const cardField = document.querySelector('.cards-field')

    const cardElements = []
    for (let i = 0; i < shuffledArray.length; i++) {
        const element = shuffledArray[i]
        const cardElement = `<div class="cards-field__card" id="card-vision">${cardsArray[element]}</div>`
        cardElements.push(cardElement)
    }

    cardField.innerHTML = cardElements.join('')

    // let cardsElements = document.querySelectorAll('.cards-field__card')

    // // let cardVision = document.getElementById('card-vision')
    // let closedCard = `<img src="./static/img/card.png" alt="card"></img>`

    // for (const cardElement of cardsElements) {
    //     let openedCard = cardsArray[getRandomInt()]

    //     cardElement.innerHTML = openedCard

    //     setTimeout(() => {
    //         cardElement.innerHTML = closedCard
    //     }, 5000)

    //     cardElement.addEventListener('click', () => {
    //         cardElement.innerHTML = `<div class="cards-field__card" id="card-vision">${openedCard}</div>`
    //     })
    // }
}

function renderMediumGame() {
    appHtml = `<div class="container">
    <header class="header">
        <div class="header__timer">
<div class="header__text-box">
<p class="header__text">min</p>
<p class="header__text">sec</p>
</div>
<div class="header__count">
00.00
</div>
        </div>
        <button class="header__button button">
            Начать заново
        </button>
    </header>
    <div class="cards-field">
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
   
    </div>
</div>`

    appEl.innerHTML = appHtml

    let cardsElements = document.querySelectorAll('.cards-field__card')

    // let cardVision = document.getElementById('card-vision')
    let closedCard = `<img src="./static/img/card.png" alt="card"></img>`

    for (const cardElement of cardsElements) {
        let openedCard = cardsArray[getRandomInt()]

        cardElement.innerHTML = openedCard

        setTimeout(() => {
            cardElement.innerHTML = closedCard
        }, 5000)

        cardElement.addEventListener('click', () => {
            cardElement.innerHTML = openedCard
        })
    }
}

function renderHardGame() {
    appHtml = `<div class="container">
    <header class="header">
        <div class="header__timer">
<div class="header__text-box">
<p class="header__text">min</p>
<p class="header__text">sec</p>
</div>
<div class="header__count">
00.00
</div>
        </div>
        <button class="header__button button">
            Начать заново
        </button>
    </header>
    <div class="cards-field">
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    </div>
</div>`
    appEl.innerHTML = appHtml

    let cardsElements = document.querySelectorAll('.cards-field__card')

    // let cardVision = document.getElementById('card-vision')
    let closedCard = `<img src="./static/img/card.png" alt="card"></img>`

    for (const cardElement of cardsElements) {
        let openedCard = cardsArray[getRandomInt()]

        cardElement.innerHTML = openedCard

        setTimeout(() => {
            cardElement.innerHTML = closedCard
        }, 5000)

        cardElement.addEventListener('click', () => {
            cardElement.innerHTML = openedCard
        })
    }
}

let easyLevelGame = document.getElementById('easy')
let mediumLevelGame = document.getElementById('medium')
let hardLevelGame = document.getElementById('hard')

let gameLevel = null

easyLevelGame.addEventListener('click', () => {
    gameLevel = 'easy'
    hardLevelGame.classList.remove('background')
    mediumLevelGame.classList.remove('background')
    easyLevelGame.classList.add('background')
    console.log('выбран легкий уровень')
    return
})

mediumLevelGame.addEventListener('click', () => {
    gameLevel = 'medium'
    easyLevelGame.classList.remove('background')
    hardLevelGame.classList.remove('background')
    mediumLevelGame.classList.add('background')
    console.log('выбран средний уровень')
    return
})

hardLevelGame.addEventListener('click', () => {
    gameLevel = 'hard'
    easyLevelGame.classList.remove('background')
    mediumLevelGame.classList.remove('background')
    hardLevelGame.classList.add('background')
    console.log('выбран сложный уровень')
    return
})

let startGameButton = document.getElementById('start-game-button')

startGameButton.addEventListener('click', () => {
    if (gameLevel == 'easy') {
        renderEasyGame()
    }
    if (gameLevel == 'medium') {
        renderMediumGame()
    }
    if (gameLevel == 'hard') {
        renderHardGame()
    }
    // почему-то если здесь просто поставить else, то не работает
    if (gameLevel == null) {
        alert('Выберите уровень сложности игры')
    }
})
