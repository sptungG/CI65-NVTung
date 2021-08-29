class Person {
  name;
  age;
  gender;
  address;
  constructor(name, age, gender, address) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }
  isChild() {
    return this.age < 18;
  }
  isAdult() {
    return this.age >= 18 && this.age < 65;
  }
  isOld() {
    return this.age >= 65;
  }
}

class Vaccine {
  name;
  brand;
  country;
  constructor(name, brand, country) {
    this.name = name;
    this.brand = brand;
    this.country = country;
  }
}

class Certificate {
  person;
  vaccine;
  dateModified;
  /**
   *
   * @param {Person} person
   * @param {Vaccine} vaccine
   * @param {String} dateModified
   */
  constructor(person, vaccine, dateModified) {
    this.person = person;
    this.vaccine = vaccine;
    this.dateModified = dateModified;
  }
}

// Chức năng
class Handler {
  people = [];
  vaccines = [];
  certificates = [];

  createPerson(name, age, gender, address) {
    let p = new Person(name, age, gender, address);
    this.people.push(p);
    return p;
  }
  createVaccine(name, brand, country) {
    let v = new Vaccine(name, brand, country);
    this.vaccines.push(v);
    return v;
  }
  createCertificate(person, vaccine) {
    let c = new Certificate(person, vaccine, new Date().toLocaleDateString("vi-VI"));
    this.certificates.push(c);
    return c;
  }

  stat1() {
    console.log("---- Những người đã tiêm vaccine");
    for (let certificate of this.certificates) {
      console.log(
        `Ho va ten: ${certificate.person.name}\nTuoi: ${certificate.person.age}\nVaccine: ${certificate.vaccine.name}\nNgay tiem: ${certificate.dateModified}\n---------------------------`
      );
    }
  }

  stat2() {
    console.log("---- Những người già chưa tiêm vaccine");
    for (let person of this.people) {
      if (!person.isOld()) continue;

      let certificates = this.certificates.filter((c) => c.person == person);

      if (certificates.length == 0) {
        console.log(`Ho va ten: ${person.name}\nTuoi: ${person.age}\nDia chi: ${person.address}\n---------------------------`);
      }
    }
  }

  stat3() {
    console.log(`---- Tổng số liều vaccine đã tiêm: ${this.certificates.length} liểu.`);
  }
}

let handler = new Handler();

let v1 = handler.createVaccine("Moderna", "Moderna", "USA");
let v2 = handler.createVaccine("AstraZeneca", "AstraZeneca", "UK");
let v3 = handler.createVaccine("Pfizer", "BioNTech", "Germany");
let v4 = handler.createVaccine("Sinovac", "Sinovac", "China");
let v5 = handler.createVaccine("Janssen", "Johnson&Johnson", "USA");

let p1 = handler.createPerson("A", 18, "male", "USA");
let p2 = handler.createPerson("B", 17, "female", "UK");
let p3 = handler.createPerson("C", 19, "male", "Germany");
let p4 = handler.createPerson("D", 30, "female", "China");
let p5 = handler.createPerson("E", 66, "female", "USA");
let p6 = handler.createPerson("F", 68, "female", "USA");
let p7 = handler.createPerson("G", 16, "male", "USA");

console.table(handler.vaccines);
console.table(handler.people);

let c1 = handler.createCertificate(p1, v1);
let c2 = handler.createCertificate(p1, v2);
let c3 = handler.createCertificate(p2, v1);
let c4 = handler.createCertificate(p3, v3);
let c5 = handler.createCertificate(p4, v4);
let c6 = handler.createCertificate(p5, v5);

handler.stat3();
handler.stat1();
handler.stat2();
