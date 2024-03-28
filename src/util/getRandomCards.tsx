const suits: string[] = ["hearts", "diamonds", "clubs", "spades"];
const ranks: string[] = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
];

export const TOTAL_CARDS: number = 4; // must be even

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleCards(cards: string[]): string[] {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

// Generate a deck of cards
let deck: string[] = [];
for (let suit of suits) {
    for (let rank of ranks) {
        deck.push(`${rank}_of_${suit}`);
    }
}

const chosenCards: string[] = [];
for (let i = 0; i < TOTAL_CARDS / 2; i++) {
    const randomIndex: number = getRandomInt(0, deck.length - 1);
    chosenCards.push(deck[randomIndex]);
    deck.splice(randomIndex, 1);
}

export const randomCards: string[] = shuffleCards([
    ...chosenCards,
    ...chosenCards,
]);
