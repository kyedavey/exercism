//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const complements = {
    A: "U",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((c) => complements[c])
    .join("");
};
