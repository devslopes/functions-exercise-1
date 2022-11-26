const correctNaughtyWords = [
  "darn",
  "dang",
  "yikes",
  "cowabunga",
  "rats",
  "golly",
];

function censorWord(word) {
  if (word.length < 3) {
    return "*".repeat(word.length);
  }
  return word.at(0) + "*".repeat(word.length - 2) + word.at(-1);
}

function isNaughtyWord(word) {
  return correctNaughtyWords.includes(word.toLowerCase());
}

function censorMessage(message) {
  return message
    .split(" ")
    .map((word) => {
      if (!isNaughtyWord(word)) {
        return word;
      }
      return censorWord(word);
    })
    .join(" ");
}
