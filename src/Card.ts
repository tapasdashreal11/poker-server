/* The above code defines a TypeScript class that represents a deck of cards, allowing for shuffling
and drawing cards from the deck. */

// Enum to represent card suits
enum Suit {
    Hearts,
    Diamonds,
    Clubs,
    Spades,
}

// Enum to represent card ranks
enum Rank {
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
}

// Interface for a card
interface Card {
    suit: Suit;
    rank: Rank;
}

// Class representing a deck of cards
class Deck {
    private cards: Card[];

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
    draw(): Card | undefined {
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
    } else {
        console.log('No more cards in the deck.');
        break;
    }
}
