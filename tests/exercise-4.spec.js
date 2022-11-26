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

const fileText = readFileSync("exercise-4/exercise-4.js", {
  encoding: "utf-8",
});

describe("censorWord", () => {
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
});

describe("isNaughtyWords", () => {
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

  it.each(correctNaughtyWords.map((word) => ({ word: word.toUpperCase() })))(
    "isNaughtyWord('$word') should be true",
    ({ word }) => {
      const isNaughtyWord = eval(`${fileText}; isNaughtyWord`);
      expect(isNaughtyWord(word)).toBe(true);
    }
  );
  it.each(correctNaughtyWords.map((word) => ({ word })))(
    "isNaughtyWord('$word') should be true",
    ({ word }) => {
      const isNaughtyWord = eval(`${fileText}; isNaughtyWord`);
      expect(isNaughtyWord(word)).toBe(true);
    }
  );
});

describe("censorMessage", () => {
  it("censorMessage should exist", () => {
    const censorMessage = eval(`${fileText}; censorMessage`);
    expect(censorMessage).toBeDefined();
  });
  it("censorMessage should be a function", () => {
    const censorMessage = eval(`${fileText}; censorMessage`);
    expect(censorMessage).toBeInstanceOf(Function);
  });
  const IO = [
    {
      input: `you darn golly kids get off my dang lawn`,
      output: `you d**n g***y kids get off my d**g lawn`,
    },
    {
      input: `yikes Elon I am extremely upset by this DANG server outage`,
      output: `y***s Elon I am extremely upset by this D**G server outage`,
    },
    {
      input: `Cowabunga Jerry this app you built is pretty darn awesome`,
      output: `C*******a Jerry this app you built is pretty d**n awesome`,
    },
  ];

  it.each(IO)(
    "censorMessage('$input') should be '$output'",
    ({ input, output }) => {
      const censorMessage = eval(`${fileText}; censorMessage`);
      expect(censorMessage(input)).toBe(output);
    }
  );
});
