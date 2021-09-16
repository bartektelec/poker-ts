import { test } from "../deps.ts";
import Card from "../Card.ts";
import { SUITS } from "../consts.ts";

Deno.test("card should store data about a card", () => {
  const AceOfSpades = new Card("A", SUITS.Spades);

  test.assertEquals(AceOfSpades.rank, "A");
  test.assertEquals(AceOfSpades.rankValue, 14);
  test.assertEquals(AceOfSpades.suit, "Spades");
  test.assertEquals(AceOfSpades.rankName, "Ace");
  test.assertEquals(AceOfSpades.fullName, "Ace of Spades");

  const DeuceOfHearts = new Card("2", SUITS.Hearts);
  test.assertEquals(DeuceOfHearts.rank, "2");
  test.assertEquals(DeuceOfHearts.rankValue, 2);
  test.assertEquals(DeuceOfHearts.suit, "Hearts");
  test.assertEquals(DeuceOfHearts.rankName, "Deuce");
  test.assertEquals(DeuceOfHearts.fullName, "Deuce of Hearts");

  const TenOfDiamonds = new Card("10", SUITS.Diamonds);
  test.assertEquals(TenOfDiamonds.rank, "10");
  test.assertEquals(TenOfDiamonds.rankValue, 10);
  test.assertEquals(TenOfDiamonds.suit, "Diamonds");
  test.assertEquals(TenOfDiamonds.rankName, "Ten");
  test.assertEquals(TenOfDiamonds.fullName, "Ten of Diamonds");

  const JackOfClubs = new Card("J", SUITS.Clubs);
  test.assertEquals(JackOfClubs.rank, "J");
  test.assertEquals(JackOfClubs.rankValue, 11);
  test.assertEquals(JackOfClubs.suit, "Clubs");
  test.assertEquals(JackOfClubs.rankName, "Jack");
  test.assertEquals(JackOfClubs.fullName, "Jack of Clubs");
});
