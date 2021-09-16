import Deck from "./Deck.ts";
import Player from "./Player.ts";
import { STREETS, GAME_STATES } from "./consts.ts";

export default class Table {
  private deck: Deck;
  private currentStreet: STREETS | GAME_STATES;
  private _players: Player[];
  private tableSize: number;

  constructor() {
    this.deck = new Deck();
    this.currentStreet = GAME_STATES.Seating;
    this._players = [];
    this.tableSize = 9;
  }

  public get players(): Player[] {
    return this._players;
  }

  public addPlayer(player: Player) {
    if (this.players.length >= this.tableSize) throw new Error("Table is full");
    this._players = [...this._players, player];
  }
}
