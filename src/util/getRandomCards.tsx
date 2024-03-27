// Define suits and ranks
const suits: string[] = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks: string[] = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
];

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate a deck of cards
let deck: string[] = [];
for (let suit of suits) {
    for (let rank of ranks) {
        deck.push(`${rank}_${suit}`);
    }
}

// Shuffle the deck
// deck = shuffleArray(deck);

// Select 13 random cards from the shuffled deck
const chosenCards: string[] = [];
for (let i = 0; i < 18; i++) {
    const randomIndex: number = getRandomInt(0, deck.length - 1);
    chosenCards.push(deck[randomIndex]);
    deck.splice(randomIndex, 1);
}

export const randomCards = shuffleArray([...chosenCards, ...chosenCards]);
