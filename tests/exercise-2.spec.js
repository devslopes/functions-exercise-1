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

const fileText = readFileSync("exercise-2/exercise-2.js", {
  encoding: "utf-8",
});

it("isNaughtyWord should exist", () => {
  const isNaughtyWord = eval(`${fileText}; isNaughtyWord`);
  expect(isNaughtyWord).toBeDefined();
});

it("isNaughtyWord should be a function", () => {
  const isNaughtyWord = eval(`${fileText}; isNaughtyWord`);
  expect(isNaughtyWord).toBeInstanceOf(Function);
});

it("should return false for 'larry'", () => {
  const isNaughtyWord = eval(`${fileText}; isNaughtyWord`);
  expect(isNaughtyWord("larry")).toBe(false);
});

describe("all naughty words should return true", () => {
  it.each(correctNaughtyWords.map((word) => ({ word })))(
    "isNaughtyWord('$word') should be true",
    ({ word }) => {
      const isNaughtyWord = eval(`${fileText}; isNaughtyWord`);
      expect(isNaughtyWord(word)).toBe(true);
    }
  );
});

describe("all naughty words should return true, whether or not they are uppercase or lowercase", () => {
  it.each(correctNaughtyWords.map((word) => ({ word: word.toUpperCase() })))(
    "isNaughtyWord('$word') should be true",
    ({ word }) => {
      const isNaughtyWord = eval(`${fileText}; isNaughtyWord`);
      expect(isNaughtyWord(word)).toBe(true);
    }
  );
});
