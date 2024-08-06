//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n < 1) return [];

  const result = [[1]];

  for (let i = 1; i < n; i++) {
    const prevRow = result[i - 1];
    const newRow = [];
    newRow.push(1);
    for (let j = 1; j < prevRow.length; j++) {
      newRow[j] = prevRow[j] + prevRow[j - 1];
    }
    newRow.push(1);
    result.push(newRow);
  }
  return result;
};
