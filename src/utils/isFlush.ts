import Card from "../Card.ts";
import { SUITS } from "../consts.ts";

export default function (input: Card[]): {
  success: boolean;
  matching: Card[] | null;
} {
  const spades = input.filter((card) => card.suit === SUITS.Spades);
  const clubs = input.filter((card) => card.suit === SUITS.Clubs);
  const hearts = input.filter((card) => card.suit === SUITS.Hearts);
  const diamonds = input.filter((card) => card.suit === SUITS.Diamonds);

  const matching =
    [spades, clubs, hearts, diamonds].find((x) => x.length >= 5) || null;
  const success = [spades, clubs, hearts, diamonds].some((x) => x.length >= 5);

  return {
    success,
    matching,
  };
}
