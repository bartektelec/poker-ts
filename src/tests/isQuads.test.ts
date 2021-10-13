import { test } from "../deps.ts";
import Card from "../Card.ts";
import { SUITS } from "../consts.ts";
import isQuads from "../utils/isQuads.ts";

import type { TRank } from "../consts.ts";

const buildCard = (x: TRank) => new Card(x, SUITS.Clubs);
Deno.test("isQuads should return true for quad hands", () => {
  const hands: TRank[][] = [
    ["A", "2", "A", "4", "5", "A", "A"],
    ["6", "5", "9", "9", "9", "3", "9"],
    ["9", "9", "9", "K", "10", "K", "9"],
    ["10", "10", "J", "10", "9", "10", "J"],
    ["6", "6", "3", "4", "6", "6", "3"],
  ];
  const failHands: TRank[][] = [
    ["A", "J", "J", "4", "5", "A", "K"],
    ["6", "7", "10", "10", "10", "3", "5"],
    ["K", "A", "J", "K", "9", "J", "2"],
    ["K", "Q", "J", "10", "2", "Q", "A"],
    ["5", "2", "8", "4", "2", "2", "K"],
  ];

  const cardHands = hands.map((hand) => isQuads(hand.map(buildCard)));
  const failedCardHands = failHands.map((hand) => isQuads(hand.map(buildCard)));

  cardHands.forEach((result) => {
    test.assertEquals(result.success, true);
  });

  failedCardHands.forEach((result) => {
    test.assertEquals(result.success, false);
  });
});
