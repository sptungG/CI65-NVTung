import BaseComponent from "../components/BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { validateEmail } from "../models/utils.js";

export default class RegisterScreen extends BaseComponent {
  // truyền dữ liệu thông qua props
  constructor(props) {
    super(props);
    // lưu tất cả dữ liệu name, email, password qua state
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
    // console.log(fieldName, fieldValue);
    let tmpState = this.state;
    // lấy dữ liệu
    tmpState.data[fieldName] = fieldValue.trim();
    // kiểm tra dữ liệu
    // 1. nhập đến đâu kiểm tra dữ liệu đến đó
    // 2. nhập rồi bấm Register rồi mới kiểm tra *

    this.setState(tmpState);
    console.log(this.state);
  };

  render() {
    let $container = document.createElement("div");
    let $title = document.createElement("h1");
    $title.innerHTML = "Create an account";
    $title.classList.add("text-center");

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

    let $btn = document.createElement("button");
    $btn.innerHTML = "Register";
    $btn.classList.add("btn", "btn-primary", "btn-block");

    let $form = document.createElement("form");
    // nếu ko có action thì mặc định action là trang hiện tại -> ~reload lại trang
    // $form.action = "https://google.come"; 
    $form.append(_name.render(), _email.render(), _password.render(), _confirmPassword.render(), $btn);
    $form.onsubmit = this.handleRegister;

    $container.append($title, $form);
    return $container;
  }

  handleRegister = (event) => {
    event.preventDefault();

    let data = this.state.data;
    let error = this.state.error;
    // error.name = "";
    // error.email = "";
    // error.password = "";
    // error.confirmPassword = "";

    if (data.name === "") {
      error.name = "Invalid Name";
    }
    if (data.email === "" || !validateEmail(data.email)) {
      error.email = "Invalid Email";
    }
    if (data.password === "") {
      error.password = "Invalid Password";
    }
    if (data.confirmPassword === "") {
      error.confirmPassword = "Invalid Confirm Password";
    }
    if (data.password != "" && data.confirmPassword != "" && data.password != data.confirmPassword) {
      error.confirmPassword = "Confirmation Password is not correct";
    }
    // Dài
    this.setState(this.state.error);
  };
}
