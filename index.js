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

const tuzPik = `<img src="img/tuz-pik.png" alt="card">`
const kingPik = `<img src="img/king-pik.png" alt="card">`
const ladyPik = `<img src="img/lady-pik.png" alt="card">`
const valPik = `<img src="img/val-pik.png" alt="card">`
const tenPik = `<img src="img/10-pik.png" alt="card">`
const ninePik = `<img src="img/9-pik.png" alt="card">`
const eightPik = `<img src="img/8-pik.png" alt="card">`
const sevenPik = `<img src="img/7-pik.png" alt="card">`
const sixPik = `<img src="img/6-pik.png" alt="card">`
const tuzCherv = `<img src="img/a-hrt.png" alt="card">`
const kingCherv = `<img src="img/king-hrt.png" alt="card">`
const ladyCherv = `<img src="img/lady-hrt.png" alt="card">`
const valCherv = `<img src="img/val-hrt.png" alt="card">`
const tenCherv = `<img src="img/10-hrt.png" alt="card">`
const nineCherv = `<img src="img/9-hrt.png" alt="card">`
const eightCherv = `<img src="img/8-hrt.png" alt="card">`
const sevenCherv = `<img src="img/7-hrt.png" alt="card">`
const sixCherv = `<img src="img/6-hrt.png" alt="card">`
const tuzBubn = `<img src="img/a-b.png" alt="card">`
const kingBubn = `<img src="img/k-b.png" alt="card">`
const ladyBubn = `<img src="img/l-b.png" alt="card">`
const valBubn = `<img src="img/v-b.png" alt="card">`
const tenBubn = `<img src="img/10-b.png" alt="card">`
const nineBubn = `<img src="img/9-b.png" alt="card">`
const eightBubn = `<img src="img/8-b.png" alt="card">`
const sevenBubn = `<img src="img/7-b.png" alt="card">`
const sixBubn = `<img src="img/6-b.png" alt="card">`
const tuzKrest = `<img src="img/a-k.png" alt="card">`
const kingKrest = `<img src="img/k-k.png" alt="card">`
const ladyKrest = `<img src="img/l-k.png" alt="card">`
const valKrest = `<img src="img/v-k.png" alt="card">`
const tenKrest = `<img src="img/10k.png" alt="card">`
const nineKrest = `<img src="img/9-k.png" alt="card">`
const eightKrest = `<img src="img/8-k.png" alt="card">`
const sevenKrest = `<img src="img/7-k.png" alt="card">`
const sixKrest = `<img src="img/6-k.png" alt="card">`

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

function getRandomInt() {
    let minValue = 0
    let maxValue = 35
    return Math.round(Math.random() * (maxValue - minValue)) + minValue
}
function getRandomInt2() {
    let minValue = 0
    let maxValue = 35
    return Math.round(Math.random() * (maxValue - minValue)) + minValue
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
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    <div class="cards-field__card" id="card-vision"></div> 
    </div>
</div>`

    appEl.innerHTML = appHtml

    // let cardVision = document.querySelectorAll('cards-field__card') - не работает
    let cardVision = document.getElementById('card-vision') // работает, но только одну карту показывает
    let closedCard = `<img src="img/card.png" alt="card"></img>`
    let openedCard = cardsArray[getRandomInt()]

    cardVision.innerHTML = openedCard

    setTimeout(() => {
        cardVision.innerHTML = closedCard
    }, 5000)

    cardVision.addEventListener('click', () => {
        cardVision.innerHTML = openedCard
    })
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
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
   
    </div>
</div>`
    appEl.innerHTML = appHtml
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
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    <div class="cards-field__card" >${cardsArray[getRandomInt()]}</div>
    </div>
</div>`
    appEl.innerHTML = appHtml
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
