const joinNames = (namesObj) => {
  let allTogether = [];
  const basic = ", ";
  const fancy = " & ";

  for (let i = 0; i < namesObj.length; i += 1) {
    allTogether += namesObj[i].name;
    if (i === namesObj.length -2) {
        allTogether += fancy;
    } else if (i !== namesObj.length -2 && i !== namesObj.length -1) {
        allTogether += basic;
    }
  }
  return allTogether;
};

module.exports = joinNames;
