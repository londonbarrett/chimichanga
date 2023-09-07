import { findSumPairs } from "./findSumPairs";

describe("Find Sum Pairs", () => {
  it("Finds sum pairs with positive integers", () => {
    const result = findSumPairs([1, 2, 3, 4, 5, 6, 7], 8);
    expect(result).toEqual([
      [5, 3],
      [6, 2],
      [7, 1],
    ]);
  });
  it("Finds sum pairs with zeros and zero target", () => {
    const result = findSumPairs([0, 0, 0, 0], 0);
    expect(result).toEqual([
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
  });
  it("Finds correct amount of sum pairs with repeated integers", () => {
    const result = findSumPairs([1, 1, 1, 1], 2);
    expect(result).toEqual([
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
  });
  it("Returns empty array when there is no sum pairs", () => {
    const result = findSumPairs([1, 2, 3, 4, 5, 6, 7], 85);
    expect(result).toEqual([]);
  });
  it("Finds sum pairs with negative integers", () => {
    const result = findSumPairs([1, -2, 3, 4, -5, 6, 7, 10], 8);
    expect(result).toEqual([[7, 1], [10, -2], ,]);
  });
  it("Returns empty array with a single integer input", () => {
    const result = findSumPairs([1], 8);
    expect(result).toEqual([]);
  });
  it("Returns empty array with empty input array", () => {
    const result = findSumPairs([], 8);
    expect(result).toEqual([]);
  });
});
