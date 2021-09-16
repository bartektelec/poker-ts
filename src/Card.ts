import { SUITS, RANKS, RANK_NAMES } from "./consts.ts";
import type { TRank } from "./consts.ts";

export default class Card {
  constructor(readonly rank: TRank, readonly suit: SUITS) {}

  get fullName(): string {
    return `${this.rankName} of ${this.suit}`;
  }

  get rankName(): string {
    return RANK_NAMES[this.rank];
  }

  get rankValue(): number {
    return RANKS.indexOf(this.rank) + 2;
  }
}
