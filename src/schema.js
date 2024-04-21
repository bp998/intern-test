import fs from "fs";
import Ajv from "ajv";

export const validateSchema = (fileToValidate) => {
  const schemaData = fs.readFileSync("dataSchema.json");
  const schema = JSON.parse(schemaData);

  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(fileToValidate);

  if (!valid) {
    console.log(validate.errors);
  } else {
    console.log("Data is valid");
    return true;
  }
};
