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
    for (const element of input) {
      if (element instanceof Person) {
        if (this.personInfo.length < this.MAX_NUMBERS_ORDERED) {
          element.ageGroup = element.ageGroup();
          element.vaccineChecked = false;
          element.poseStatus = [];
          this.personInfo.push(element);
          console.log(`++ ${element.name} - ${element.age} - ${element.address} is added.`);
        } else {
          console.warn(`[FULL]:( .Can't add ${element.name} - ${element.age} - ${element.address}.`);
        }
      } else if (element instanceof Vaccine) {
        this.vaccineInfo.push(element);
      }
    }
  }

  vaccineStatus(personName, vaccineName = "", poseDate = "") {
    const index = this.personInfo.findIndex((person) => person.name == personName);
    const indexV = this.vaccineInfo.findIndex((vaccine) => vaccine.name.toLowerCase() == vaccineName.toLowerCase());
    // Kiểm tra người đăng kí và tên vaccine
    if (index >= 0 && indexV >= 0) {
      let person = this.personInfo[index];
      // trạng thái mỗi lần tiêm
      let Status = {
        times: 1,
        vaccine: vaccineName,
        date: new Date(poseDate),
      };

      // dưới 18t -> chưa được tiêm
      if (person.ageGroup == "Child") {
        return (person.poseStatus = `${person.name}: Too Young `);
      } else {
        // trên 18t và người già -> đc tiêm
        person.vaccineChecked = true;
        person.poseStatus.push(Status);
        // ko đc tiêm quá 2 mũi
        if (person.poseStatus.length > 2) {
          console.warn(`${person.name}: Over dose suggested`);
        } else {
          // kiểm tra nhập trùng ngày tiêm -> chỉ lầy lần đầu
          let [state1, state2] = person.poseStatus;
          if (state2) {
            state1.date.getTime() === state2.date.getTime() ? person.poseStatus.pop() : Status.times++;
          }
        }
      }
      return person;
    } else if(index < 0) {
      console.warn(`[ERROR] ${personName} has not added yet.`);
    }else{
      console.warn(`[ERROR] ${vaccineName} has not added yet.`);
    }
  }
}
export default VaccineCertificate;
