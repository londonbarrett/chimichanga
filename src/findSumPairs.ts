export const findSumPairs = (
  numbers: number[],
  target: number
): [number, number][] => {
  const numSet = new Set<number>();
  const pairs: [number, number][] = [];

  for (const num of numbers) {
    const complement = target - num;

    if (numSet.has(complement)) {
      pairs.push([num, complement]);
    }

    numSet.add(num);
  }

  return pairs;
};
