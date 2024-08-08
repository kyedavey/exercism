//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.db = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.db));
  }

  add(name, grade) {
    for (const key in this.db) {
      let index = this.db[key].indexOf(name);
      if (index > -1) {
        this.db[key].splice(index, 1);
      }
    }

    this.db[grade] = this.db[grade] || [];
    this.db[grade].push(name);
    this.db[grade].sort();
  }

  grade(grade) {
    return this.db[grade] ? [...this.db[grade]].sort() : [];
  }
}
