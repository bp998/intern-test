import fs from "fs";

const tryParse = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, "utf8");
  } catch (err) {
    console.error("Problem with reading file");
    return;
  }

  try {
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.error("Problem with parsing JSON");
  }
};

export default tryParse;
