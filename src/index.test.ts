import * as childProcess from "child_process";

describe("CLI Tests", () => {
  it("Prints results when input is correct", () => {
    const result = childProcess.execSync("npm start -- -t 7 -n 2,4,3,1,5,6");
    const output = result.toString();
    const expectedOutput = "Chimichanga! [ 2, 4, 3, 1, 5, 6 ] 7";
    expect(output).toMatch(expectedOutput);
  });
  it("Prints error when target is not a number", () => {
    try {
      childProcess.execSync("npm start -- -t 7e -n 2,4,3,1,5,6");
    } catch (e: any) {
      expect(e.message).toMatch("Target should be an integer");
    }
  });
  it("Prints error when numbers is not a number", () => {
    try {
      childProcess.execSync("npm start -- -t 7 -n 2,4,2r,3,1,5,6");
    } catch (e: any) {
      expect(e.message).toMatch("Numbers should be comma separated integers");
    }
  });
});
