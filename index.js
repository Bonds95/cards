
let page = null
let appHtml = null
let appEl = document.getElementById('app')

function renderMainPage() {
    appHtml = `<div class="container">
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

function renderEasyGame() {
    appHtml = `<h1 class="modal__header">
Легкий уровень сложности
</h1>`
    appEl.innerHTML = appHtml
}

function renderMediumGame() {
    appHtml = `<h1 class="modal__header">
    Средний уровень сложности
    </h1>`
    appEl.innerHTML = appHtml
}

function renderHardGame() {
    appHtml = `<h1 class="modal__header">
    Тяжелый уровень сложности
    </h1>`
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
    return;
})

mediumLevelGame.addEventListener('click', () => {
    gameLevel = 'medium'
    easyLevelGame.classList.remove('background')
    hardLevelGame.classList.remove('background')
    mediumLevelGame.classList.add('background')
    console.log('выбран средний уровень')
    return;
})

hardLevelGame.addEventListener('click', () => {
    gameLevel = 'hard'
    easyLevelGame.classList.remove('background')
    mediumLevelGame.classList.remove('background')
    hardLevelGame.classList.add('background')
    console.log('выбран сложный уровень')
    return;
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
