import fs from "fs";
import { validateSchema } from "./schema.js";

// path to json file
const path = "data.json";

const verifyJson = (path) => {
  const parsedData = tryParse(path);
  const validated = validateSchema(parsedData);
  if (validated) {
    const resource = parsedData.PolicyDocument.Statement[0].Resource;
    const bool = resource === "*" ? false : true;
    console.log(bool);
    return bool;
  }
};

const tryParse = (path) => {
  try {
    return JSON.parse(fs.readFileSync(path, "utf8"));
  } catch (err) {
    throw new Error("File not found");
  }
};

verifyJson(path);
