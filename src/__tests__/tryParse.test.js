import tryParse from "../utils/tryParse.js";

const jsonTemplate = {
  PolicyName: "root",
  PolicyDocument: {
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "IamListAccess",
        Effect: "Allow",
        Action: ["iam:ListRoles", "iam:ListUsers"],
        Resource: "*",
      },
    ],
  },
};

describe("tryParse", () => {
  test("should return undefined if the file does not exist", () => {
    const path = "nonexistent.json";
    expect(tryParse(path)).toBe(console.error("Problem with reading file"));
  });

  test("should return undefined if the file is empty", () => {
    const path = "empty.json";
    expect(tryParse(path)).toBe(console.error("Problem with parsing JSON"));
  });

  test("should return undefined if the file is not a valid JSON", () => {
    const invalidJson = { key: "value" };
    expect(tryParse(invalidJson)).toBe(
      console.error("Problem with parsing JSON")
    );
  });

  test("should return the parsed JSON if the file is valid", () => {
    const jsonTemplatePath = "./src/__tests__/jsonTemplate.json";
    expect(tryParse(jsonTemplatePath)).toEqual(jsonTemplate);
  });
});
