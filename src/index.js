import fs from "fs";

// path to json file
const path = "data.json";

const verifyInput = (path) => {
  const input = tryParse(path);
  const resource = input.PolicyDocument.Statement[0].Resource;
  const bool = resource === "*" ? false : true;
  console.log(bool);
  return bool;
};

const tryParse = (path) => {
  try {
    const data = JSON.parse(fs.readFileSync(path, "utf8"));
    return data;
  } catch (err) {
    throw new Error("File not found");
  }
};

verifyInput(path);
