import Person from "./Person.js";
import Vaccine from "./Vaccine.js";
class VaccineCertificate {
  personInfo;
  vaccineInfo;
  constructor() {
    this.personInfo = [];
    this.vaccineInfo = [];
  }
  add(...input) {
    for (const index in input) {
      if (input[index] instanceof Person) {
        input[index].ageGroup = input[index].ageGroup();
        input[index].vaccineChecked = false;
        input[index].poseStatus = [];
        this.personInfo.push(input[index]);
      } else if (input[index] instanceof Vaccine) {
        this.vaccineInfo.push(input[index]);
      }
    }
  }

  vaccineStatus(personName, vaccineName = "", poseDate = "") {
    const index = this.personInfo.findIndex((person) => person.name == personName);
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
      return;
    }
  }
}
export default VaccineCertificate;
