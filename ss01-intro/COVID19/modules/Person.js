class Person {
  constructor(name, age, gender, address) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.ageGroup = function () {
      if (this.age < 18) {
        return "Child";
      } else if (this.age >= 18 && this.age < 65) {
        return "Adult";
      } else {
        return "Older";
      }
    };
  }
}

export default Person;
