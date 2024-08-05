//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BOOK_COST = 800;
const DISCOUNT = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};

export const cost = (books) => {
  const sizeOfSets = [];

  while (books.length > 0) {
    const set = new Set(books);
    set.forEach((book) => {
      books.splice(books.indexOf(book), 1);
    });
    sizeOfSets.push(set.size);
  }

  while (sizeOfSets.includes(3) && sizeOfSets.includes(5)) {
    sizeOfSets.splice(sizeOfSets.indexOf(3), 1);
    sizeOfSets.splice(sizeOfSets.indexOf(5), 1);
    sizeOfSets.push(4, 4);
  }

  return sizeOfSets.reduce(
    (total, set) => total + set * BOOK_COST * (1 - DISCOUNT[set]),
    0
  );
};
