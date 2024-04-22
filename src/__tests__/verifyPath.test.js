import verifyPath from "../utils/verifyPath.js";

describe("verifyPath", () => {
  test("should return true if the path exists", () => {
    const path = "data.json";
    expect(verifyPath(path)).toBe(true);
  });

  test("should return false if the path does not exist", () => {
    const path = "nonexistent.json";
    expect(verifyPath(path)).toBe(false);
  });
});
