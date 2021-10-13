import isPair from "./isPair.ts";

import Card from "../Card.ts";

export default function (input: Card[]): {
  success: boolean;
  matching: Card[] | null;
} {
  const result = isPair(input);

  const success = result.matching
    ? result.matching.some(
        (match) =>
          result.matching!.filter((x) => x.rank === match.rank).length === 3
      )
    : false;
  const matching = success ? result.matching : null;

  return {
    success,
    matching,
  };
}
