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
