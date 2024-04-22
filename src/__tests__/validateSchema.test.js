import validateSchema from "../utils/validateSchema.js";

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

describe("validateSchema", () => {
  test("should return true if the schema is valid", () => {
    expect(validateSchema(jsonTemplate)).toBe(true);
  });

  test("should return false if the schema is invalid", () => {
    const json = { ...jsonTemplate };
    delete json.PolicyDocument.Version;
    expect(validateSchema(json)).toBe(false);
  });
});
