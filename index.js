import './style.css'
import {
    renderEasyGame,
    renderMediumGame,
    renderHardGame,
} from './render-game.js'
// import { updateTime } from './independent-functions.js'

let appHtml = null
export let appEl = document.getElementById('app')
//check


export function renderMainPage() {
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
            let timer = document.querySelector('.header__count')
            let seconds = 0
            let minutes = 0
            let interval
            function updateTime() {
                seconds++
                if (seconds === 60) {
                    minutes++
                    seconds = 0
                }
                if (minutes === 60) {
                    hours++
                    minutes = 0
                }
                timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
                    .toString()
                    .padStart(2, '0')}`
            }
            interval = setInterval(updateTime, 1000)
        }
        if (gameLevel == 'medium') {
            renderMediumGame()
            let timer = document.querySelector('.header__count')
            let seconds = 0
            let minutes = 0
            let interval
            function updateTime() {
                seconds++
                if (seconds === 60) {
                    minutes++
                    seconds = 0
                }
                if (minutes === 60) {
                    hours++
                    minutes = 0
                }
                timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
                    .toString()
                    .padStart(2, '0')}`
            }
            interval = setInterval(updateTime, 1000)
        }
        if (gameLevel == 'hard') {
            renderHardGame()
            let timer = document.querySelector('.header__count')
            let seconds = 0
            let minutes = 0
            let interval
            function updateTime() {
                seconds++
                if (seconds === 60) {
                    minutes++
                    seconds = 0
                }
                if (minutes === 60) {
                    hours++
                    minutes = 0
                }
                timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
                    .toString()
                    .padStart(2, '0')}`
            }
            interval = setInterval(updateTime, 1000)
        }
        if (gameLevel == null) {
            alert('Выберите уровень сложности игры')
        }
    })
}


renderMainPage()
