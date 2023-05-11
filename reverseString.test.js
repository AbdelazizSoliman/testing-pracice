const { reverseString } = require("./reverseString.js"); // Replace 'myFile' with the name of your JavaScript file

describe("reverseString", () => {
  it("reverses a simple string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("reverses a string with special characters", () => {
    expect(reverseString("Aziz()")).toBe(")(zizA");
  });

  it("returns an empty string for an empty input", () => {
    expect(reverseString("")).toBe("");
  });
});
