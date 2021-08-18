import create from "./modules/components.js";
import { getCorrectAnswer } from "./modules/controllers.js";

create("div", "container", "container", document.body);
create("div", "question", "container-question flex f-center", "container", "Do you love me??");
create("div", "answer", "container-answers flex f-between", "container");
create("button", "yes", "answer-btn flex f-center", "answer", "Yes");
create("button", "no", "answer-btn flex f-center", "answer", "No");
getCorrectAnswer("no");
