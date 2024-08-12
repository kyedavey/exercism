//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    const result = new List(this.values);
    for (const index in list.values) {
      result.values.push(list.values[index]);
    }
    return result;
  }

  concat(lists) {
    let result = new List(this.values);
    for (const index in lists.values) {
      result = result.append(lists.values[index]);
    }
    return result;
  }

  filter(predicate) {
    let result = new List();
    for (const index in this.values) {
      if (predicate(this.values[index])) result.values.push(this.values[index]);
    }
    return result;
  }

  map(fn) {
    let result = new List();
    for (const index in this.values) {
      result.values.push(fn(this.values[index]));
    }
    return result;
  }

  length() {
    return this.values.length;
  }

  foldl(fn, initial) {
    return [...this.values].reduce(fn, initial);
  }

  foldr(fn, initial) {
    return [...this.reverse().values].reduce(fn, initial);
  }

  reverse() {
    return new List([...this.values].reverse());
  }
}
