function isNaughtyWord(word) {
  const naughtyWords = ["darn", "dang", "yikes", "cowabunga", "rats", "golly"];
  return naughtyWords.includes(word.toLowerCase());
}
