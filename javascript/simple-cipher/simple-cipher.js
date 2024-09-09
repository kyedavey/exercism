//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = Cipher.generateKey()) {
    this._key = key;
  }

  static generateKey() {
    const key = [];
    for (let i = 0; i < 100; i++) {
      key.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    }
    return key.join("");
  }

  encode([...plaintext]) {
    return plaintext
      .map((c, i) => {
        const inputCharCode = c.charCodeAt(0) - 97;
        const shiftValue = this._key[i % this._key.length].charCodeAt(0) - 97;
        const outputCharCode = (inputCharCode + shiftValue) % 26;
        return String.fromCharCode(outputCharCode + 97);
      })
      .join("");
  }

  decode([...ciphertext]) {
    return ciphertext
      .map((c, i) => {
        const inputCharCode = c.charCodeAt(0) - 97;
        const shiftValue = this._key[i % this._key.length].charCodeAt(0) - 97;
        let outputCharCode = inputCharCode - shiftValue;
        if (outputCharCode < 0) outputCharCode += 26;
        return String.fromCharCode(outputCharCode + 97);
      })
      .join("");
  }

  get key() {
    return this._key;
  }
}
