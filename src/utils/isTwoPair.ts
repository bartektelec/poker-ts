import isPair from "./isPair.ts";

import Card from "../Card.ts";
import hasDifferentPair from "./hasDifferentPair.ts";

export default function (input: Card[]): {
  success: boolean;
  matching: Card[] | null;
} {
  const result = isPair(input);

  const success = result.matching
    ? result.matching.length >= 4 && hasDifferentPair(result.matching)
    : false;

  const matching = success ? result.matching : null;

  return {
    success,
    matching,
  };
}
