import fs from "fs";
import Ajv from "ajv";

export const validateSchema = (fileToValidate) => {
  const schema = JSON.parse(fs.readFileSync("dataSchema.json"));

  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid = validate(fileToValidate);

  if (!isValid) {
    console.log(validate.errors);
    return false;
  } else {
    return true;
  }
};
