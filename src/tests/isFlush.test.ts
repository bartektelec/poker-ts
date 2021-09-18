import { test } from "../deps.ts";
import Card from "../Card.ts";
import { SUITS } from "../consts.ts";
import isFlush from "../utils/isFlush.ts";

import type { TRank } from "../consts.ts";

const buildFlushCard = (x: TRank) => new Card(x, SUITS.Clubs);
const buildNoFlushCard = (x: TRank, idx: number) =>
  idx % 2 === 0 ? new Card(x, SUITS.Clubs) : new Card(x, SUITS.Diamonds);
Deno.test("isFlush should return true for flush hands", () => {
  const hands: TRank[][] = [
    ["A", "2", "3", "4", "5", "A", "K"],
    ["6", "7", "8", "9", "10", "3", "5"],
    ["K", "A", "J", "Q", "10", "7", "9"],
    ["K", "Q", "J", "10", "9", "10", "J"],
    ["5", "2", "3", "4", "6", "8", "3"],
  ];
  const failHands: TRank[][] = [
    ["A", "2", "J", "4", "5", "A", "K"],
    ["6", "7", "8", "10", "10", "3", "5"],
    ["K", "A", "J", "Q", "9", "7", "9"],
    ["K", "Q", "J", "10", "10", "10", "J"],
    ["5", "2", "8", "4", "6", "8", "K"],
  ];

  const cardHands = hands.map((hand) => isFlush(hand.map(buildFlushCard)));
  const failedCardHands = failHands.map((hand) =>
    isFlush(hand.map(buildNoFlushCard))
  );

  cardHands.forEach((result) => {
    test.assertEquals(result.success, true);
  });

  failedCardHands.forEach((result) => {
    test.assertEquals(result.success, false);
  });
});
