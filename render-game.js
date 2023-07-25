import { shuffle, getRandomInt, renderDefeatPage, renderWinPage } from './independent-functions.js'
import { cardsArray } from './cards-array.js'
import { appEl, renderMainPage } from './index.js'
let appHtml = null
export function renderEasyGame() {
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

    let restartButton = document.querySelector('.header__button')

    restartButton.addEventListener("click", () => {
        renderMainPage()
    })

    const randomCardsIds = getRandomInt(3)

    const shuffledArray = shuffle(randomCardsIds)

    const cardField = document.querySelector('.cards-field')

    const cardElements = []
    for (let i = 0; i < shuffledArray.length; i++) {
        var element = shuffledArray[i]
        var cardElement = `<div class="cards-hide"><div data-id="${element}" class="cards-field__card" id="card-vision" data-is-clicked="true">${cardsArray[element]}</div></div>`
        cardElements.push(cardElement)
    }

    cardField.innerHTML = cardElements.join('')

    let cardsVision = document.querySelectorAll('.cards-hide')
    for (const cardVision of cardsVision) {
        setTimeout(() => {
            cardVision.classList.add('picture')
        }, 5000)
        cardVision.addEventListener('click', () => {
            cardVision.classList.remove('picture')
        })
    }
    let clickCards = document.querySelectorAll('.cards-field__card')
    let openCards = []
    for (const clickCard of clickCards) {
        setTimeout(() => {
            clickCard.classList.add('opacity')
            clickCard.addEventListener('click', () => {
                // if (cardClicked == true) {
                    
                // console.log(cardClicked);
                
                clickCard.classList.remove('opacity')
                let cardValue = clickCard.dataset.id
    
                openCards.push(cardValue)
                console.log(openCards)
                if (openCards.length == 2) {
                    if (openCards[0] != openCards[1]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 4) {
                    if (openCards[2] != openCards[3]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 6) {
                    setTimeout(() => {
                        renderWinPage()
                    }, 1000)
                }
                // cardClicked = false
                // }
                
            })
        }, 5000)
        // let cardClicked = clickCard.dataset.isClicked
        
        // console.log(clickCard.dataset.isClicked);
        
    }
}
export function renderMediumGame() {
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

    let restartButton = document.querySelector('.header__button')

    restartButton.addEventListener("click", () => {
        renderMainPage()
    })

    const randomCardsIds = getRandomInt(6)

    const shuffledArray = shuffle(randomCardsIds)

    const cardField = document.querySelector('.cards-field')

    const cardElements = []
    for (let i = 0; i < shuffledArray.length; i++) {
        var element = shuffledArray[i]
        var cardElement = `<div class="cards-hide"><div data-id="${element}" class="cards-field__card" id="card-vision">${cardsArray[element]}</div></div>`
        cardElements.push(cardElement)
    }

    cardField.innerHTML = cardElements.join('')

    let cardsVision = document.querySelectorAll('.cards-hide')
    for (const cardVision of cardsVision) {
        setTimeout(() => {
            cardVision.classList.add('picture')
        }, 5000)
        cardVision.addEventListener('click', () => {
            cardVision.classList.remove('picture')
        })
    }
    let clickCards = document.querySelectorAll('.cards-field__card')
    let openCards = []
    for (const clickCard of clickCards) {
        setTimeout(() => {
            clickCard.classList.add('opacity')
            clickCard.addEventListener('click', () => {
                clickCard.classList.remove('opacity')
                let cardValue = clickCard.dataset.id
    
                openCards.push(cardValue)
                console.log(openCards)
                if (openCards.length == 2) {
                    if (openCards[0] != openCards[1]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 4) {
                    if (openCards[2] != openCards[3]) {
                        renderDefeatPage()

                    }
                }
                if (openCards.length == 6) {
                    if (openCards[4] != openCards[5]) {
                        renderDefeatPage()

                    }
                }
                if (openCards.length == 8) {
                    if (openCards[6] != openCards[7]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 10) {
                    if (openCards[8] != openCards[9]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 12) {
                    setTimeout(() => {
                        renderWinPage()
                    }, 1000)
                }
            })
        }, 5000)

        
    }
}
export function renderHardGame() {
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

    let restartButton = document.querySelector('.header__button')

    restartButton.addEventListener("click", () => {
        renderMainPage()
    })

    const randomCardsIds = getRandomInt(9)

    const shuffledArray = shuffle(randomCardsIds)

    const cardField = document.querySelector('.cards-field')

    const cardElements = []
    for (let i = 0; i < shuffledArray.length; i++) {
        var element = shuffledArray[i]
        var cardElement = `<div class="cards-hide"><div data-id="${element}" class="cards-field__card" id="card-vision">${cardsArray[element]}</div></div>`
        cardElements.push(cardElement)
    }

    cardField.innerHTML = cardElements.join('')

    let cardsVision = document.querySelectorAll('.cards-hide')
    for (const cardVision of cardsVision) {
        setTimeout(() => {
            cardVision.classList.add('picture')
        }, 5000)
        cardVision.addEventListener('click', () => {
            cardVision.classList.remove('picture')
        })
    }
    let clickCards = document.querySelectorAll('.cards-field__card')
    let openCards = []
    for (const clickCard of clickCards) {
        setTimeout(() => {
            clickCard.classList.add('opacity')
            clickCard.addEventListener('click', () => {
                clickCard.classList.remove('opacity')
                let cardValue = clickCard.dataset.id
    
                openCards.push(cardValue)
                console.log(openCards)
                if (openCards.length == 2) {
                    if (openCards[0] != openCards[1]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 4) {
                    if (openCards[2] != openCards[3]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 6) {
                    if (openCards[4] != openCards[5]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 8) {
                    if (openCards[6] != openCards[7]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 10) {
                    if (openCards[8] != openCards[9]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 12) {
                    if (openCards[10] != openCards[11]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 14) {
                    if (openCards[12] != openCards[13]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 16) {
                    if (openCards[14] != openCards[15]) {
                        renderDefeatPage()
                    }
                }
                if (openCards.length == 18) {
                    setTimeout(() => {
                        renderWinPage()
                    }, 1000)
                }
            })
        }, 5000)

        
    }
}
