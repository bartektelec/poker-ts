import Card from "../Card.ts";

export default (input: Card[]) => {
  const [firstCard] = input;
  return input.some((match) => match.rank !== firstCard.rank);
};
