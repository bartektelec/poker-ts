import isPair from "./isPair.ts";
import isThree from "./isThree.ts";

import Card from "../Card.ts";

export default function (input: Card[]): {
  success: boolean;
  matching: Card[] | null;
} {
  const result = isPair(input);

  const success = result.matching
    ? result.matching.some(
        (match) =>
          result.matching!.filter((x) => x.rank === match.rank).length === 2
      ) &&
      result.matching.some(
        (match) =>
          result.matching!.filter((x) => x.rank === match.rank).length === 3
      )
    : false;

  const matching = result.matching;

  return {
    success,
    matching,
  };
}
