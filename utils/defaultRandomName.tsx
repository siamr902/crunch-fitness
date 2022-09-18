export default function generateRandomName(): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const length = 5;
  let res = "";
  for (let i = 0; i <= length; i++) {
    res +=
      i === 0 || i === length
        ? characters.charAt(~~(Math.random() * characters.length))
        : characters.charAt(~~Math.random() * characters.length).toLowerCase();
  }

  return res;
}
