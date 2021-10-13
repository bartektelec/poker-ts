import { test } from "../deps.ts";
import Card from "../Card.ts";
import { SUITS } from "../consts.ts";
import isPair from "../utils/isPair.ts";

import type { TRank } from "../consts.ts";

const buildCard = (x: TRank) => new Card(x, SUITS.Clubs);
Deno.test("isPair should return true for pair hands", () => {
  const hands: TRank[][] = [
    ["A", "2", "3", "4", "5", "A", "K"],
    ["6", "5", "8", "9", "10", "3", "5"],
    ["K", "A", "J", "Q", "10", "K", "9"],
    ["K", "Q", "J", "10", "9", "10", "J"],
    ["5", "2", "3", "4", "6", "8", "3"],
  ];
  const failHands: TRank[][] = [
    ["A", "2", "J", "4", "5", "Q", "K"],
    ["6", "7", "8", "10", "9", "3", "5"],
    ["K", "A", "J", "Q", "9", "7", "2"],
    ["K", "Q", "J", "10", "2", "3", "A"],
    ["5", "2", "8", "4", "6", "9", "K"],
  ];

  const cardHands = hands.map((hand) => isPair(hand.map(buildCard)));
  const failedCardHands = failHands.map((hand) => isPair(hand.map(buildCard)));

  cardHands.forEach((result) => {
    test.assertEquals(result.success, true);
  });

  failedCardHands.forEach((result) => {
    test.assertEquals(result.success, false);
  });
});
