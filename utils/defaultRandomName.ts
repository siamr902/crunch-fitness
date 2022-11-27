export default function generateRandomName(): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const length = 10;
  let res = "";
  for (let i = 0; i < length; i++) {
    res +=
      i === 0 || i === length - 1
        ? characters.charAt(~~(Math.random() * characters.length))
        : characters.charAt(~~Math.random() * characters.length).toLowerCase();
  }

  return res.split(`${res[Math.random() * res.length]}`).join("");
}
