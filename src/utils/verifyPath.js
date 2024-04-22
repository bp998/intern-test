import fs from "fs";

export const verifyPath = (filePath) => {
  if (fs.existsSync(filePath)) {
    return true;
  } else {
    console.log("File does not exist");
    return false;
  }
};
