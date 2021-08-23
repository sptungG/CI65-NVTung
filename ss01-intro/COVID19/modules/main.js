import Person from "./Person.js";
import Vaccine from "./Vaccine.js";
import VaccineCertificate from "./VaccineCertificate.js";

let vaccine1 = new Vaccine("Moderna", "Moderna", "USA");
let vaccine2 = new Vaccine("AstraZeneca", "AstraZeneca", "UK");
let vaccine3 = new Vaccine("Pfizer", "BioNTech", "Germany");
let vaccine4 = new Vaccine("Sinovac", "Sinovac", "China");
let vaccine5 = new Vaccine("Janssen", "Johnson&Johnson", "USA");

let person1 = new Person("A", 18, "male", "USA");
let person2 = new Person("B", 17, "female", "UK");
let person3 = new Person("C", 19, "male", "Germany");
let person4 = new Person("D", 30, "female", "China");
let person5 = new Person("E", 66, "female", "USA");
let person6 = new Person("F", 68, "female", "USA");
let person7 = new Person("G", 16, "male", "USA");

// MAX_NUMBERS_ORDERED
let vaccineCertificate = new VaccineCertificate(6);
vaccineCertificate.add(vaccine1, vaccine2, vaccine3, vaccine4, vaccine5);
vaccineCertificate.add(person1, person2, person3, person4, person5, person6, person7);
vaccineCertificate.vaccineStatus("A", "Moderna", "Mon Jul 26 2021 04:29:39 GMT+0700 (Indochina Time)");
vaccineCertificate.vaccineStatus("A", "Moderna", "Mon Jul 26 2021 04:29:39 GMT+0700 (Indochina Time)");
vaccineCertificate.vaccineStatus("A", "AstraZeneca", "Thu Aug 12 2021 04:30:39 GMT+0700 (Indochina Time)");
vaccineCertificate.vaccineStatus("B", "Moderna", "Mon Jul 26 2021 04:30:39 GMT+0700 (Indochina Time)");
vaccineCertificate.vaccineStatus("C", "Pfizer", "Mon Jul 26 2021 04:30:39 GMT+0700 (Indochina Time)");
vaccineCertificate.vaccineStatus("D", "Moderna", "Mon Jul 26 2021 04:30:39 GMT+0700 (Indochina Time)");
vaccineCertificate.vaccineStatus("E", "Pfizer", "Mon Jul 26 2021 04:30:39 GMT+0700 (Indochina Time)");
vaccineCertificate.vaccineStatus("G", "Sinovac", "Mon Jul 26 2021 04:30:39 GMT+0700 (Indochina Time)");
vaccineCertificate.vaccineStatus("H", "Sinovac", "Mon Jul 26 2021 04:30:39 GMT+0700 (Indochina Time)");

console.table(vaccineCertificate.vaccineInfo);
console.table(vaccineCertificate.personInfo, ["name", "age", "address", "vaccineChecked"]);

// Thống kê những người dân đã được tiêm ít nhất 1 loại vắc-xin
function showVerified() {
  let people = vaccineCertificate.personInfo.filter((person) => person.vaccineChecked == true);
  people.map((person) => {
    let [state1, state2] = person.poseStatus;
    if (state2) {
      person.firstDose = state1.vaccine;
      person.date1 = state1.date.toLocaleDateString("vi-VI");
      person.secondDose = state2.vaccine;
      person.date2 = state2.date.toLocaleDateString("vi-VI");
    } else {
      person.firstDose = state1.vaccine;
      person.date1 = state1.date.toLocaleDateString("vi-VI");
    }
  });
  console.log("\n----Thống kê những người dân đã được tiêm ít nhất 1 loại vắc-xin----");
  console.table(people, ["name", "age", "firstDose", "date1", "secondDose", "date2"]);
}
showVerified();

// Thống kê những người già chưa được tiêm vắc-xin
function showNotVerifiedByAge() {
  let people = vaccineCertificate.personInfo.filter((person) => {
    return person.vaccineChecked == false && person.ageGroup == "Older";
  });
  console.log("\n----Thống kê những người già chưa được tiêm vắc-xin----");
  console.table(people, ["name", "age", "address"]);
}
showNotVerifiedByAge();

// Tính tổng số liều vắc-xin đã tiêm
function totalPose() {
  let people = vaccineCertificate.personInfo.filter((person) => person.vaccineChecked == true);
  let total = 0;
  for (const index in people) {
    total += people[index].poseStatus.length;
  }
  console.log(`\n----Tổng số liều vắc-xin đã tiêm: ${total}`);
}
totalPose();
