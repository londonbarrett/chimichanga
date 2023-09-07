Object.defineProperty(exports, "__esModule", { value: true });
exports.findSumPairs = void 0;
const findSumPairs = (numbers, target) => {
  const numSet = new Set();
  const pairs = [];
  for (const num of numbers) {
    const complement = target - num;
    if (numSet.has(complement)) {
      pairs.push([num, complement]);
    }
    numSet.add(num);
  }
  return pairs;
};
exports.findSumPairs = findSumPairs;
