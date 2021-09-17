import Card from "../Card.ts";

export default function (input: Card[]): {
  success: boolean;
  matching: Card[] | null;
} {
  const uniqCards = input.reduce<Card[]>((acc, curr) => {
    if (acc.some((x) => x.rankValue === curr.rankValue)) return acc;
    return [...acc, curr];
  }, []);

  const [firstCard, ...restCards] = [...uniqCards].sort(
    (a, b) => b.rankValue - a.rankValue
  );

  const sortedCards =
    firstCard.rank === "A"
      ? [firstCard, ...restCards, firstCard]
      : [firstCard, ...restCards];

  let count = 1;
  let _matching = [firstCard];

  for (let i = 1; i < sortedCards.length; i++) {
    if (count === 5) break;
    const now = sortedCards[i];
    const nowVal = now.rank === "A" ? 1 : now.rankValue;
    const prev = sortedCards[i - 1];
    if (prev.rankValue - 1 === nowVal) {
      count++;
      _matching = [..._matching, sortedCards[i]];
    } else {
      count = 1;
      _matching = [sortedCards[i]];
    }
  }

  const success = count >= 5;
  const matching = success ? _matching : null;

  return {
    success,
    matching,
  };
}
