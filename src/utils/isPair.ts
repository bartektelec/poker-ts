import Card from "../Card.ts";

export default function (input: Card[]): {
  success: boolean;
  matching: Card[] | null;
} {
  const matching: Card[] = [];
  const uniques = input.reduce<Card[]>((acc, curr) => {
    const found = acc.find((added) => added.rank === curr.rank);
    if (found) {
      if (!matching.some((match) => match.fullName === found.fullName))
        matching.push(found);
      matching.push(curr);
      return acc;
    }
    return [...acc, curr];
  }, []);

  const sortedSlicedMatches = [
    ...matching.sort((a, b) => a.rankValue - b.rankValue),
  ];

  const noWidowedMatches = sortedSlicedMatches.filter(
    (match) =>
      sortedSlicedMatches.filter((x) => x.rank === match.rank).length >= 2
  );

  const success = uniques.length < input.length;

  return {
    success,
    matching: noWidowedMatches,
  };
}
