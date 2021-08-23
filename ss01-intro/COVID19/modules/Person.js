class Person {
  constructor(name, age, gender, address) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.ageGroup = function () {
      if (this.age < 18) {
        return "Child";
      } else if (this.age >= 65) {
        return "Older";
      } else {
        return "Adult";
      }
    };
  }
}

export default Person;
