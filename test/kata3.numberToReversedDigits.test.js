const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits("12345")).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits("6789")).toEqual([9, 8, 7, 6]);
    expect(numberToReversedDigits("1928")).toEqual([8, 2, 9, 1]);

  });
});