const formatWord = (word: string): string => {
  return `#${word.split("-").join("").toUpperCase()}`;
};

export const selectRandom = (words: Array<string>): Array<string> => {
  const listLength: number = words.length;
  const randomWord = words[Math.floor(Math.random() * listLength)];
  const spanElement: string | undefined = randomWord.split('-')[0].toUpperCase();

  return [formatWord(randomWord), spanElement];
};
