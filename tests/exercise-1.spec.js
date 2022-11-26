import { describe, it, expect, beforeEach } from "vitest";
import { readFileSync } from "fs";

const fileText = `
${readFileSync("exercise-1/oven.js", {
  encoding: "utf-8",
})};
${readFileSync("exercise-1/exercise-1.js", {
  encoding: "utf-8",
})};
`;

it("getCake should be defined", () => {
  const getCake = eval(`${fileText}; getCake`);
  expect(getCake).toBeDefined();
});
it("getCake should be a function", () => {
  const getCake = eval(`${fileText}; getCake`);
  expect(getCake).toBeInstanceOf(Function);
});

describe("get cake procedure", () => {
  let ovenInstance;
  let getCakeFn;
  beforeEach(() => {
    eval(`
            ${fileText};
            ovenInstance = oven
            getCakeFn = getCake
        `);
  });

  it("should set the temperature to 400", () => {
    getCakeFn();
    expect(ovenInstance.tempSet).toBe(400);
  });

  it("should place the pan", () => {
    getCakeFn();
    expect(ovenInstance.panPlaced).toEqual(["flour", "water", "egg", "sugar"]);
  });

  it("should wait for 20 minutes", () => {
    getCakeFn();
    expect(ovenInstance.waitedFor).toBe(20);
  });

  it("should remove the stuff from the oven", () => {
    getCakeFn();
    expect(ovenInstance.removed).toEqual(["flour", "water", "egg", "sugar"]);
  });

  it("should do everything in the correct order", () => {
    getCakeFn();
    expect(ovenInstance.operations).toEqual([
      "setTemp",
      "placedPan",
      "waited",
      "removedStuff",
    ]);
  });
});
