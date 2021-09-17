import { test } from "../deps.ts";
import Card from "../Card.ts";
import { SUITS } from "../consts.ts";
import isStraight from "../utils/isStraight.ts";

import type { TRank } from "../consts.ts";

const buildCard = (x: TRank) => new Card(x, SUITS.Clubs);
Deno.test("isStraight should return true for straight hands", () => {
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

  const cardHands = hands.map((hand) => isStraight(hand.map(buildCard)));
  const failedCardHands = failHands.map((hand) =>
    isStraight(hand.map(buildCard))
  );

  cardHands.forEach((result) => {
    test.assertEquals(result.success, true);
  });

  failedCardHands.forEach((result) => {
    test.assertEquals(result.success, false);
  });
});
