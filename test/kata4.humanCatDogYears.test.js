const { humanCatDogYears } = require("../src");

describe('HumanCatDogYears', () => {
  it("human years to cats and dogs equal their actual years 1", () => {
    expect(humanCatDogYears(1)).toEqual[1, 15, 15];
  });
  it("human years to cats and dogs equal their actual years 2", () => {
    expect(humanCatDogYears(2)).toEqual[2, 24, 24];
  });
  it("human years after 2 add 4 and 5 to cats and dogs respectively", () => {
    expect(humanCatDogYears(10)).toEqual[10, 56, 64]
  });
  
});
