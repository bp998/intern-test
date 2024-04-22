import verifyJson from "./utils/verifyJson.js";
import verifyPath from "./utils/verifyPath.js";
import tryParse from "./utils/tryParse.js";
import validateSchema from "./utils/validateSchema.js";

// Path to the JSON file
const pathToJson = "data.json";

// Check if the path exists
const pathExists = verifyPath(pathToJson);

// If the path exists, try to parse the JSON file
if (pathExists) {
  // Parse the JSON file
  const parsedData = tryParse(pathToJson);
  // Validate the schema
  const validated = validateSchema(parsedData);
  // If the schema is valid, verify the JSON
  if (validated) {
    // Verify the JSON and generate boolean output
    verifyJson(parsedData);
  }
}
