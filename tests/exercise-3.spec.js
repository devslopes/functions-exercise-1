import { describe, it, expect, beforeEach } from "vitest";
import { readFileSync } from "fs";

const correctNaughtyWords = [
  "darn",
  "dang",
  "yikes",
  "cowabunga",
  "rats",
  "golly",
];

const fileText = readFileSync("exercise-3/exercise-3.js", {
  encoding: "utf-8",
});

it("censorWord should exist", () => {
  const censorWord = eval(`${fileText}; censorWord`);
  expect(censorWord).toBeDefined();
});

it("censorWord should exist", () => {
  const censorWord = eval(`${fileText}; censorWord`);
  expect(censorWord).toBeInstanceOf(Function);
});

const correctIO = [
  { input: "word", out: "w**d" },
  { input: "lol", out: "l*l" },
  { input: "hey", out: "h*y" },
  { input: "naughty", out: "n*****y" },
  { input: "lol", out: "l*l" },
  { input: "yo", out: "**" },
];
it.each(correctIO.map(({ input, out }) => ({ input, out })))(
  "censorWord('$input') should be $out",
  ({ input, out }) => {
    const censorWord = eval(`${fileText}; censorWord`);
    expect(censorWord(input)).toBe(out);
  }
);
