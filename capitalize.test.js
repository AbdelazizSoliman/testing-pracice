const { capitalize } = require("./capitalize.js"); // Replace 'myFile' with the name of your JavaScript file

describe("capitalizeFirstCharacter", () => {
  it("capitalizes the first character of a simple string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("returns an empty string for an empty input", () => {
    expect(capitalize("")).toBe("");
  });

  it("does not modify a string that is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
});
