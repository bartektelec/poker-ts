import { test } from "../deps.ts";
import Deck from "../Deck.ts";

const deck = new Deck();
Deno.test("deck should generate a deck of 52 cards", () => {
  test.assertEquals(deck.cardsCount, 52);
});

Deno.test("deck should be shuffled", () => {
  const firstCard = deck.getCard(0).rankValue;
  const secondCard = deck.getCard(1).rankValue;
  const thirdCard = deck.getCard(2).rankValue;
  const fourthCard = deck.getCard(3).rankValue;

  test.assert(
    firstCard !== secondCard ||
      secondCard !== thirdCard ||
      thirdCard !== fourthCard
  );
});

Deno.test("deck should allow manual shuffling", () => {
  const ids = [5, 10, 30, 50];
  const before = ids.map((x) => deck.getCard(x)).map((z) => JSON.stringify(z));
  deck.shuffle();
  const after = ids.map((x) => deck.getCard(x)).map((z) => JSON.stringify(z));

  test.assert(!before.every((val, idx) => after[idx] === val));
});

Deno.test("deck should allow draw a card", () => {
  const drawnCard = deck.drawCard();

  test.assert(deck.cardsCount < 52);
  test.assert(drawnCard.rankValue);
});

Deno.test("deck should allow draw multiple cards", () => {
  deck.reset();
  const cards = deck.drawCards(5);

  test.assert(deck.cardsCount < 48);
  test.assertEquals(cards.length, 5);
});
