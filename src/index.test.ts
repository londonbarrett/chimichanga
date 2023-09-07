import * as childProcess from "child_process";

describe("CLI Tests", () => {
  it("Prints sum pairs when the input is correct", () => {
    const result = childProcess.execSync(
      "npm start -- -t 16 -n 2,3,4,3,14,5,6,13,5,12,10"
    );
    const output = result.toString();
    const expectedOutput =
      "Chimichanga! [ [ 14, 2 ], [ 13, 3 ], [ 12, 4 ], [ 10, 6 ] ]";
    expect(output).toMatch(expectedOutput);
  });
  it("Throws error when target is not a number", () => {
    try {
      childProcess.execSync("npm start -- -t 7e -n 2,4,3,1,5,6");
    } catch (e: any) {
      expect(e.message).toMatch("Target should be an integer");
    }
  });
  it("Throws error when numbers is not a list of comma separated numbers", () => {
    try {
      childProcess.execSync("npm start -- -t 7 -n 2,4,2r,3,1,5,6");
    } catch (e: any) {
      expect(e.message).toMatch("Numbers should be comma separated integers");
    }
  });
  it("Prints error when there is no target", () => {
    try {
      childProcess.execSync("npm start -- -n 2,4,3,1,5,6");
    } catch (e: any) {
      expect(e.message).toMatch(
        "error: required option '-t, --target <value>' not specified"
      );
    }
  });
  it("Prints error when there is no list of numbers", () => {
    try {
      childProcess.execSync("npm start -- -t 7");
    } catch (e: any) {
      expect(e.message).toMatch(
        "error: required option '-n, --numbers <numbers>' not specified"
      );
    }
  });
});
