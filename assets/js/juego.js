// 2C = Two of Clubs (Tréboles)
// 2D = Two of Diamonds (Diamantes)
// 2H = Two of Hearts (Corazones)
// 2S = Two of Spades (Picas)

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos){
            deck.push(i+tipo)
        }
    }

    console.log(deck)
}

crearDeck();