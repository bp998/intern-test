### AWS IAM Role JSON Verifier

This project contains a method that verifies the input JSON data based on the AWS::IAM::Role Policy definition and example. The input JSON data is read from a file and the method returns a boolean value based on the content of the `Resource` field in the JSON data.

## Usage:

**Standard:**

1. type `npm i` in console
2. place your `data.json`(file to verify) into repository
3. start the program with `npm start`

**Developer:**

1. type `npm i` in console
2. place your `data.json`(file to verify) into repository
3. start the program with `npm run dev`

**Testing:**

1. type `npm i` in console
2. start the program with `npm test`

## Example JSON:

```json
{
  "PolicyName": "root",
  "PolicyDocument": {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "IamListAccess",
        "Effect": "Allow",
        "Action": ["iam:ListRoles", "iam:ListUsers"],
        "Resource": "*"
      }
    ]
  }
}
```
## Tools Used
- *Node.js:* The JavaScript runtime used to execute the project.
- *Nodemon:* A utility that monitors for changes in your source and automatically restarts your server.
- *Jest:* A JavaScript testing framework used for running tests.
- *AJV:* A JSON schema validator used for validating JSON data.

## Logic in main file: index.js

This file contains the main code of the program, which checks the path to a JSON file, parses the file, validates the schema, and verifies the JSON.

The code is divided into the following sections:

1. Importing the necessary modules:

   - `verifyJson` from "./utils/verifyJson.js"
   - `verifyPath` from "./utils/verifyPath.js"
   - `tryParse` from "./utils/tryParse.js"
   - `validateSchema` from "./utils/validateSchema.js"

2. Defining the path to the JSON file:

   - `const pathToJson = "data.json";`

3. Checking if the path to the file exists:

   - `const pathExists = verifyPath(pathToJson);`

4. If the path exists, attempting to parse the JSON file:

   - `const parsedData = tryParse(pathToJson);`

5. Validating the schema:

   - `const validated = validateSchema(parsedData);`

6. If the schema is valid, verifying the JSON:
   - `verifyJson(parsedData);`
