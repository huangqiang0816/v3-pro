let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: number): { suit: string, card: number }
function pickCard(x: { suit: string, card: number }): number

function pickCard(x): any {
    if (Array.isArray(x)) {
        let pickedCard = Math.floor(Math.random() * x.length)
        return pickedCard
    } else if (typeof x === "number") {
        let pickedSult = Math.floor(x / 13)
        return { suit: suits[pickedSult], card: x & 13 }
    }
}

