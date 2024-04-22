import fs from "fs";

export const tryParse = (path) => {
  try {
    const data = fs.readFileSync(path, "utf8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.log(err);
  }
};
