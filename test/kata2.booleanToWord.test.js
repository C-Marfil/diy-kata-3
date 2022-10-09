const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes when passed true and No when false", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
