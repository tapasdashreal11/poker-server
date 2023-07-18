"use strict";
/* The above code defines a TypeScript class that represents a deck of cards, allowing for shuffling
and drawing cards from the deck. */
// Enum to represent card suits
var Suit;
(function (Suit) {
    Suit[Suit["Hearts"] = 0] = "Hearts";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Clubs"] = 2] = "Clubs";
    Suit[Suit["Spades"] = 3] = "Spades";
})(Suit || (Suit = {}));
// Enum to represent card ranks
var Rank;
(function (Rank) {
    Rank[Rank["Ace"] = 0] = "Ace";
    Rank[Rank["Two"] = 1] = "Two";
    Rank[Rank["Three"] = 2] = "Three";
    Rank[Rank["Four"] = 3] = "Four";
    Rank[Rank["Five"] = 4] = "Five";
    Rank[Rank["Six"] = 5] = "Six";
    Rank[Rank["Seven"] = 6] = "Seven";
    Rank[Rank["Eight"] = 7] = "Eight";
    Rank[Rank["Nine"] = 8] = "Nine";
    Rank[Rank["Ten"] = 9] = "Ten";
    Rank[Rank["Jack"] = 10] = "Jack";
    Rank[Rank["Queen"] = 11] = "Queen";
    Rank[Rank["King"] = 12] = "King";
})(Rank || (Rank = {}));
// Class representing a deck of cards
class Deck {
    constructor() {
        this.cards = [];
        // Generate all cards in the deck
        // Generate all cards in the deck
        for (let suit = 0; suit < Object.keys(Suit).length / 2; suit++) {
            for (let rank = 0; rank < Object.keys(Rank).length / 2; rank++) {
                this.cards.push({
                    suit: suit,
                    rank: rank,
                });
            }
        }
    }
    // Shuffle the deck using Fisher-Yates algorithm
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    // Draw a card from the deck
    draw() {
        return this.cards.pop();
    }
}
// Example usage
const deck = new Deck();
deck.shuffle();
// Draw 5 cards from the deck
for (let i = 0; i < 5; i++) {
    const card = deck.draw();
    if (card) {
        console.log(`Drawn card: ${Rank[card.rank]} of ${Suit[card.suit]}`);
    }
    else {
        console.log("No more cards in the deck.");
        break;
    }
}
//# sourceMappingURL=Card.js.map