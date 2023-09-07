import { Command } from "commander";
import { findSumPairs } from "./findSumPairs";

const program = new Command();

program
  .version("1.0.0")
  .description(
    "Find pairs of integers in a list that sum to a given target value."
  )
  .requiredOption(
    "-n, --numbers <numbers>",
    "List of numbers separated by commas"
  )
  .requiredOption("-t, --target <value>", "Target value")
  .action((options) => {
    // Validates input
    if (!/^[\d,]*$/.test(options.numbers)) {
      throw Error("Numbers should be comma separated integers");
    }
    if (!/^\d+$/.test(options.target)) {
      throw Error("Target should be an integer");
    }
    const numbers = (options.numbers as string)
      .split(",")
      .map((num) => parseInt(num.trim(), 10));
    const target = parseInt(options.target, 10);
    const result = findSumPairs(numbers, target);
    console.log("Chimichanga!", result);
  });

program.parse();
