import fs from "fs";
import { validateSchema } from "./utils/validateSchema.js";
import { tryParse } from "./utils/tryParse.js";
import { verifyPath } from "./utils/verifyPath.js";

// path to json file
const pathToJson = "data.json";

// function to verify json
const verifyJson = (filePath) => {
  const pathExists = verifyPath(filePath);
  if (!pathExists) {
    return;
  }
  const parsedData = tryParse(filePath);
  const validated = validateSchema(parsedData);
  if (validated) {
    const resource = parsedData.PolicyDocument.Statement[0].Resource;
    const bool = resource === "*" ? false : true;
    console.log(bool);
    return bool;
  } else {
    console.log("Invalid JSON");
  }
};

verifyJson(pathToJson);
