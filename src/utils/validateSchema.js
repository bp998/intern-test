import fs from "fs";
import Ajv from "ajv";

const validateSchema = (fileToValidate) => {
  const schemaFile = fs.readFileSync("dataSchema.json");
  const schema = JSON.parse(schemaFile);

  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid = validate(fileToValidate);

  if (!isValid) {
    console.log(validate.errors);
    console.error("Data is invalid. Please check your data and try again.");
    return false;
  } else {
    return true;
  }
};

export default validateSchema;
