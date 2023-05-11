const { stringLength } = require("./stringLength.js"); // Replace 'myFile' with the name of the file where your function is defined

describe("stringLength", () => {
  it("returns the correct length of a string", () => {
    expect(stringLength("tryTest")).toBe(7);
    expect(stringLength("12345")).toBe(5);
  });

  it("throws an error for strings that are too short or too long", () => {
    expect(() => stringLength("")).toThrow(
      "String length must be between 1 and 10 characters"
    );
    expect(() => stringLength("a")).not.toThrow();
    expect(() => stringLength("12345678901")).toThrow(
      "String length must be between 1 and 10 characters"
    );
  });
});
