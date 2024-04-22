import fs from "fs";

const verifyPath = (filePath) => {
  const fileExists = fs.existsSync(filePath);
  if (fileExists) {
    return true;
  } else {
    console.error(
      "File does not exist. Place your file in the correct path and try again"
    );
    return false;
  }
};

export default verifyPath;
