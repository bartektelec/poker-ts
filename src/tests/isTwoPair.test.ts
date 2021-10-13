import { test } from "../deps.ts";
import Card from "../Card.ts";
import { SUITS } from "../consts.ts";
import isTwoPair from "../utils/isTwoPair.ts";

import type { TRank } from "../consts.ts";

const buildCard = (x: TRank) => new Card(x, SUITS.Clubs);
Deno.test("isTwoPair should return true for two pair hands", () => {
  const hands: TRank[][] = [
    ["A", "2", "2", "4", "4", "A", "K"],
    ["6", "5", "8", "9", "9", "3", "5"],
    ["K", "A", "9", "Q", "10", "K", "9"],
    ["K", "Q", "J", "10", "9", "10", "J"],
    ["6", "2", "3", "4", "6", "8", "3"],
  ];
  const failHands: TRank[][] = [
    ["A", "2", "J", "4", "5", "A", "K"],
    ["6", "7", "8", "10", "10", "3", "5"],
    ["K", "A", "J", "Q", "9", "J", "2"],
    ["K", "Q", "J", "10", "2", "Q", "A"],
    ["5", "2", "8", "4", "2", "2", "K"],
  ];

  const cardHands = hands.map((hand) => isTwoPair(hand.map(buildCard)));
  const failedCardHands = failHands.map((hand) =>
    isTwoPair(hand.map(buildCard))
  );

  cardHands.forEach((result) => {
    test.assertEquals(result.success, true);
  });

  failedCardHands.forEach((result) => {
    test.assertEquals(result.success, false);
  });
});
