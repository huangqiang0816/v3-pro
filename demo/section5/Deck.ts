interface Card {
    suit: string
    card: number
}

interface Deck {
    suits: string[]
    cards: number[]
    createCardPciker(this: Deck): () => Card
}

let deck: Deck = {
    suits: ['h', 's', 'c', 'd'],
    cards: Array(52),
    createCardPciker: function (this: Deck) {
        return function () {
            let pickCard = Math.floor(Math.random() * 52)
            let pickSuit = Math.floor(pickCard / 13)
            return {
                suit: this.suits[pickSuit],
                card: 12
            }
        }
    }
}
