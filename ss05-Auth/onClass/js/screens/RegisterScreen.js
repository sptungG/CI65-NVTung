import BaseComponent from "../components/BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { register } from "../models/user.js";
import { validateEmail, appendTo } from "../models/utils.js";

export default class RegisterScreen extends BaseComponent {
  // truyền dữ liệu thông qua props
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      error: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  /**
   * Xử lý sự kiện onchange của input
   */
  handleInputChange = (fieldName, fieldValue) => {
    let tmpState = this.state;

    tmpState.data[fieldName] = fieldValue.trim();

    this.setState(tmpState);
    // console.log(this.state);
  };

  render() {
    let _name = new InputWrapper({
      placeholder: "Your name",
      type: "text",
      error: this.state.error.name,
      value: this.state.data.name,
      onchange: (event) => {
        this.handleInputChange("name", event.target.value);
      },
      favorites: ["a", "b", "c"],
    });
    let _email = new InputWrapper({
      placeholder: "Email",
      type: "email",
      error: this.state.error.email,
      value: this.state.data.email,
      onchange: (event) => {
        this.handleInputChange("email", event.target.value);
      },
    });
    let _password = new InputWrapper({
      placeholder: "Password",
      type: "password",
      error: this.state.error.password,
      value: this.state.data.password,
      onchange: (event) => {
        this.handleInputChange("password", event.target.value);
      },
    });
    let _confirmPassword = new InputWrapper({
      placeholder: "Confirm Password",
      type: "password",
      error: this.state.error.confirmPassword,
      value: this.state.data.confirmPassword,
      onchange: (event) => {
        this.handleInputChange("confirmPassword", event.target.value);
      },
    });
    let $container = document.createElement("div");
    $container.className = "d-flex flex-column justify-content-center align-items-center vh-100";

    let $title = document.createElement("h1");
    $title.innerHTML = "Create an account";
    $title.classList.add("text-center");
    let $btn = document.createElement("button");
    $btn.innerHTML = "Register";
    $btn.classList.add("btn", "btn-primary", "btn-block");

    let $form = document.createElement("form");
    $form.className = "container pt-4";
    $form.onsubmit = this.handleRegister;
    appendTo($form, _name, _email, _password, _confirmPassword);
    $form.append($btn);
    // $form.append(_name.render(), _email.render(), _password.render(), _confirmPassword.render(), $btn);

    $container.append($title, $form);
    return $container;
  }

  handleRegister = (event) => {
    event.preventDefault();

    let data = this.state.data;
    let error = this.state.error;
    error.name = "";
    error.email = "";
    error.password = "";
    error.confirmPassword = "";

    let isPassed = true;
    if (data.name === "") {
      isPassed = false;
      error.name = "Invalid Name";
    }
    if (data.email === "" || !validateEmail(data.email)) {
      isPassed = false;
      error.email = "Invalid Email";
    }
    if (data.password === "") {
      isPassed = false;
      error.password = "Invalid Password";
    }
    if (data.confirmPassword === "") {
      isPassed = false;
      error.confirmPassword = "Invalid Confirm Password";
    }
    if (data.password != "" && data.confirmPassword != "" && data.password != data.confirmPassword) {
      isPassed = false;
      error.confirmPassword = "Confirmation Password is not correct";
    }

    if (isPassed) {
      register(data.name, data.email, data.password);
      return;
    }
    let tmpState = this.state;
    tmpState.error = error;
    this.setState(tmpState);
  };
}
