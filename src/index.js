import fs from "fs";
import { validateSchema } from "./utils/validateSchema.js";
import { tryParse } from "./utils/tryParse.js";
import { verifyPath } from "./utils/verifyPath.js";

// Define the path to the JSON file
const pathToJson = "data.json";

// Function to verify the JSON file
const verifyJson = (filePath) => {
  // Check if the file exists
  const pathExists = verifyPath(filePath);
  // If the file doesn't exist, exit the function
  if (!pathExists) {
    return;
  }
  // Parse the JSON file
  const parsedData = tryParse(filePath);
  // Validate the parsed data against the schema
  const validated = validateSchema(parsedData);
  // If the data is valid
  if (validated) {
    // Extract the resource value from the parsed data
    const resource = parsedData.PolicyDocument.Statement[0].Resource;
    // Check if the resource is "*", if so return false, otherwise return true
    const bool = resource === "*" ? false : true;
    console.log(bool);
    return bool;
  } else {
    // If the data is not valid, log "Invalid JSON"
    console.log("Invalid JSON");
  }
};

// Call the verifyJson function with the path to the JSON file
verifyJson(pathToJson);
