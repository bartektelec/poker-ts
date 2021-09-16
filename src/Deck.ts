import Card from "./Card.ts";
import { RANKS, SUITS } from "./consts.ts";

export default class Deck {
  private stack: Card[];

  constructor() {
    this.stack = this.getNewDeck();
    this.shuffle();
  }

  private getNewDeck(): Card[] {
    return RANKS.map((rank) => {
      return Object.values(SUITS).map((suit) => {
        return new Card(rank, suit);
      });
    }).flat();
  }

  public shuffle(): void {
    this.stack = this.stack.sort(() => (Math.random() < 0.5 ? -1 : 1));
  }

  get cardsCount(): number {
    return this.stack.length;
  }

  public getCard(id: number): Card {
    return this.stack.at(id)!;
  }

  public drawCard(): Card {
    if (!this.stack.length) throw new Error("No cards left in deck");

    const [drawnCard, ...restDeck] = this.stack;
    this.stack = restDeck;
    return drawnCard;
  }

  public drawCards(amount: number): Card[] {
    return Array.from({ length: amount }).map(() => this.drawCard());
  }

  public reset(): void {
    this.stack = this.getNewDeck();
    this.shuffle();
  }
}
