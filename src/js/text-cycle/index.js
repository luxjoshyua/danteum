// select the characters you want to change
const text2Cycle = [...document.querySelectorAll(".text-cycle")];
const text2CycleSecond = [...document.querySelectorAll(".text-cycle-second")];
const characters = [
  "A",
  "a",
  "B",
  "b",
  "C",
  "c",
  "D",
  "d",
  "E",
  "e",
  "F",
  "f",
  "G",
  "g",
  "H",
  "h",
  "I",
  "i",
  "J",
  "j",
  "L",
  "l",
  "M",
  "n",
  "O",
  "o",
  "P",
  "p",
  "Q",
  "q",
  "R",
  "r",
  "S",
  "s",
  "T",
  "t",
  "U",
  "u",
  "V",
  "v",
  "W",
  "w",
  "X",
  "x",
  "Y",
  "y",
  "Z",
  "z",
];

setInterval(() => {
  const randomCharacter =
    characters[Math.floor(Math.random() * characters.length)];
  text2Cycle.forEach((element) => {
    element.innerHTML = randomCharacter;
  });
}, 500);

setTimeout(() => {
  setInterval(() => {
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    text2CycleSecond.forEach((element) => {
      element.innerHTML = randomCharacter;
    });
  }, 500);
}, 3000);
