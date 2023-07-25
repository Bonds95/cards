import { appEl, renderMainPage } from './index.js'
let appHtml = null

export function getRandomInt(cardNumber) {
    let minValue = 0
    let maxValue = 35
    const randomCards = []
    for (let i = 0; i < cardNumber; i++) {
        randomCards[i] =
            Math.round(Math.random() * (maxValue - minValue)) + minValue
    }
    return [...randomCards, ...randomCards]
    // return Math.round(Math.random() * (maxValue - minValue)) + minValue
}

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))

        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

export function renderWinPage() {
    appHtml = `<div class="flex-container">
        <div class="cards">
            <div class="result">
                <div class="result__image"><img src="static/img/celebration.png" alt=""></div>
             <h1 class="result__header">
                 Вы выиграли!
             </h1>
             <div class="result__body">
                 <p class="result__text">Затраченное время:</p>
                 <p class="result__timer">01.20</p>
             </div>
             <button class="result__button button" id="start-again-button">
                  Играть снова
             </button>
            </div>
            </div>
    </div>`

    appEl.innerHTML = appHtml

    let beginButton = document.querySelector('.result__button')
    beginButton.addEventListener("click", () => {
        renderMainPage()
    })
}
export function renderDefeatPage() {
    appHtml = `<div class="flex-container">
    <div class="cards">
        <div class="result">
            <div class="result__image"><img src="static/img/dead.png" alt=""></div>
         <h1 class="result__header">
             Вы проиграли!
         </h1>
         <div class="result__body">
             <p class="result__text">Затраченное время:</p>
             <p class="result__timer">01.20</p>
         </div>
         <button class="result__button button" id="start-again-button">
              Играть снова
         </button>
        </div>
        </div>
</div>`

    appEl.innerHTML = appHtml

    let beginButton = document.querySelector('.result__button')
    beginButton.addEventListener("click", () => {
        renderMainPage()
    })
}