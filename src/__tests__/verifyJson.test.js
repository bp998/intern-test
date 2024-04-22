import verifyJson from "../utils/verifyJson.js";

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

describe("verifyJson", () => {
  test("should return true if resource is not a single asterisk", () => {
    const json = { ...jsonTemplate };
    json.PolicyDocument.Statement[0].Resource = "not an asterisk";
    expect(verifyJson(json)).toBe(true);
  });

  test("should return false if resource is a single asterisk", () => {
    const json = { ...jsonTemplate };
    json.PolicyDocument.Statement[0].Resource = "*";
    expect(verifyJson(json)).toBe(false);
  });

  test("should return true if resource is an empty string", () => {
    const json = { ...jsonTemplate };
    json.PolicyDocument.Statement[0].Resource = "";
    expect(verifyJson(json)).toBe(true);
  });
});
