enum SUITS {
  Spades = "Spades",
  Hearts = "Hearts",
  Diamonds = "Diamonds",
  Clubs = "Clubs",
}

const RANK_NAMES = {
  "2": "Deuce",
  "3": "Three",
  "4": "Four",
  "5": "Five",
  "6": "Six",
  "7": "Seven",
  "8": "Eight",
  "9": "Nine",
  "10": "Ten",
  J: "Jack",
  Q: "Queen",
  K: "King",
  A: "Ace",
};

const RANKS: TRank[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

enum STREETS {
  Preflop,
  Flop,
  Turn,
  River,
  Showdown,
}

enum GAME_STATES {
  Seating,
  Break,
  Finished,
}

type TRank = keyof typeof RANK_NAMES;

export { SUITS, RANKS, RANK_NAMES, STREETS, GAME_STATES };
export type { TRank };
