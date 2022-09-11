const formatWord = (word: string) => {
  return `#${word.split("-").join("").toUpperCase()}`;
};

export const selectRandom = (words: Array<string>): string => {
  const listLength: number = words.length;
  const randomWord = words[Math.floor(Math.random() * listLength)];
  return formatWord(randomWord);
};
