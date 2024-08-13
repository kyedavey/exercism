// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this._name = generateName();
  }

  reset() {
    this._name = generateName();
  }

  get name() {
    return this._name;
  }
}

Robot.releaseNames = () => namesInUse.clear();

let namesInUse = new Set();

const alphabet = "ABCDEFGIJKLMNOPQRSTUVYWZX";

const generateName = () => {
  let name;
  do {
    name = `${getRandomLetters()}${getRandomNumber()}`;
  } while (namesInUse.has(name));
  namesInUse.add(name);
  return name;
};

const getRandomNumber = () => String(getRandom(1000)).padStart(3, "0");
const getRandomLetters = () =>
  `${alphabet[getRandom(alphabet.length)]}${
    alphabet[getRandom(alphabet.length)]
  }`;
const getRandom = (max) => Math.floor(Math.random() * max);
