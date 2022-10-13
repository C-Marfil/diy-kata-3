const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {});
  expect(reachDestination(44, 10)).toEqual("4.5");
  expect(reachDestination(38, 4)).toEqual("9.5");
});
