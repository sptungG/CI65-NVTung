import BaseComponent from "../components/BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { validateEmail } from "../models/utils.js";

export default class LoginScreen extends BaseComponent {
  // truyền dữ liệu thông qua props
  constructor(props) {
    super(props);
    // lưu tất cả dữ liệu name, email, password qua state
    this.state = {
      data: {
        email: "",
        password: "",
      },
      error: {
        email: "",
        password: "",
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
    // 2. nhập rồi bấm Login rồi mới kiểm tra *

    this.setState(tmpState);
    console.log(this.state);
  };

  render() {
    let $container = document.createElement("div");
    let $title = document.createElement("h1");
    $title.innerHTML = "Sign in to your account";
    $title.classList.add("text-center");

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

    let $btn = document.createElement("button");
    $btn.innerHTML = "Sign in";
    $btn.classList.add("btn", "btn-primary", "btn-block");

    let $form = document.createElement("form");
    // nếu ko có action thì mặc định action là trang hiện tại -> ~reload lại trang
    // $form.action = "https://google.come";
    $form.append(_email.render(), _password.render(), $btn);
    $form.onsubmit = this.handleLogin;

    $container.append($title, $form);
    return $container;
  }

  handleLogin = (event) => {
    event.preventDefault();
    let tmpState = this.state;

    let data = this.state.data;
    let error = this.state.error;
    error.email = "";
    error.password = "";

    let isPassed = true;

    if (data.email === "" || !validateEmail(data.email)) {
      isPassed = false;
      error.email = "Invalid Email";
    }
    if (data.password === "") {
      isPassed = false;
      error.password = "Invalid Password";
    }

    if (isPassed) {
      console.log(`Welcome`);
    }
    // Dài
    tmpState.error = error;
    this.setState(tmpState);
  };
}
