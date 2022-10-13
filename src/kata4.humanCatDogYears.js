const humanCatDogYears = (human) => {
  let n1 = 0;
  let n2 = 0;
  const cat = n1;
  const dog = n2;

  if (human > 1) {
    n1 = +15;
    n2 = +15;
  }
  if (human >= 2) {
    n1 = +15 + 9;
    n2 = +15 + 9;
  }
  if (human >= 3) {
    n1 = +15 + 9 + (4 * (human - 2));
    n2 = +15 + 9 + (5 * (human - 2));
  }
  return [human, cat, dog];
};

module.exports = humanCatDogYears;
