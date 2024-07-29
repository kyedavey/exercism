//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const gigasecondToMilliseconds = 1000000000000;

export const gigasecond = (originalDate) => {
  return new Date(originalDate.getTime() + gigasecondToMilliseconds);
};
