const verifyJson = (parsedData) => {
  const resource = parsedData.PolicyDocument.Statement[0].Resource;
  const bool = resource === "*" ? false : true;
  console.log(`Data is valid. Output = ${bool}`);
  return bool;
};

export default verifyJson;
