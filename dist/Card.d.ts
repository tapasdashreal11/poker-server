declare enum Suit {
    Hearts = 0,
    Diamonds = 1,
    Clubs = 2,
    Spades = 3
}
declare enum Rank {
    Ace = 0,
    Two = 1,
    Three = 2,
    Four = 3,
    Five = 4,
    Six = 5,
    Seven = 6,
    Eight = 7,
    Nine = 8,
    Ten = 9,
    Jack = 10,
    Queen = 11,
    King = 12
}
interface Card {
    suit: Suit;
    rank: Rank;
}
declare class Deck {
    private cards;
    constructor();
    shuffle(): void;
    draw(): Card | undefined;
}
declare const deck: Deck;
