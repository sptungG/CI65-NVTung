import Person from "./Person.js";
import Vaccine from "./Vaccine.js";
class VaccineCertificate {
  personInfo;
  vaccineInfo;
  constructor(MAX_NUMBERS_ORDERED) {
    this.MAX_NUMBERS_ORDERED = MAX_NUMBERS_ORDERED;
    this.personInfo = [];
    this.vaccineInfo = [];
  }
  add(...input) {
    for (const index in input) {
      if (input[index] instanceof Person) {
        if(this.personInfo.length < this.MAX_NUMBERS_ORDERED){
          input[index].ageGroup = input[index].ageGroup();
          input[index].vaccineChecked = false;
          input[index].poseStatus = [];
          this.personInfo.push(input[index]);
          console.log(`++ ${input[index].name} - ${input[index].age} - ${input[index].address} is added.`);
        }else{
          console.warn(`[FULL]:( .Can't add ${input[index].name} - ${input[index].age} - ${input[index].address}.`);
        }

      } else if (input[index] instanceof Vaccine) {
        this.vaccineInfo.push(input[index]);
      }
    }
  }

  vaccineStatus(personName, vaccineName = "", poseDate = "") {
    const index = this.personInfo.findIndex((person) => person.name == personName);
    // Kiểm tra người đã đăng kí hay chưa
    if (index >= 0) {
      const indexV = this.vaccineInfo.findIndex((vaccine) => vaccine.name.toLowerCase() == vaccineName.toLowerCase());
      let person = this.personInfo[index];
      // trạng thái mỗi lần tiêm
      let Status = {
        times: 1,
        vaccine: this.vaccineInfo[indexV].name,
        date: new Date(poseDate),
      };

      // dưới 18t -> chưa được tiêm
      if (person.ageGroup == "Child") {
        person.poseStatus = `${person.name}: Too Young `;
        return;
      } else {
        // trên 18t và người già -> đc tiêm
        person.vaccineChecked = true;
        person.poseStatus.push(Status);
        // ko đc tiêm quá 2 mũi
        if (person.poseStatus.length > 2) {
          console.log(`${person.name}: Over dose suggested`);
          return;
        } else {
          // kiểm tra nhập trùng ngày tiêm -> chỉ lầy lần đầu
          let [state1, state2] = person.poseStatus;
          if (state2) state1.date.getTime() === state2.date.getTime() ? person.poseStatus.pop() : Status.times++;
        }
      }
      return person;

    } else {
      console.warn(`[ERROR] ${personName} has not added yet.`);
      return;
    }
  }
}
export default VaccineCertificate;
