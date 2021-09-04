import BaseComponent from "../components/BaseComponent.js";
import InputWrapper from "../components/InputWrapper.js";
import { validateEmail, appendTo } from "../models/utils.js";

export default class LoginScreen extends BaseComponent {
  // truyền dữ liệu thông qua props
  constructor(props) {
    super(props);
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
    let tmpState = this.state;

    tmpState.data[fieldName] = fieldValue.trim();

    this.setState(tmpState);
    console.log(this.state);
  };

  render() {
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

    let $container = document.createElement("div");
    $container.className = "d-flex flex-column justify-content-center align-items-center vh-100";

    let $title = document.createElement("h1");
    $title.innerHTML = "Sign in to your account";
    $title.classList.add("text-center");
    let $btn = document.createElement("button");
    $btn.innerHTML = "Sign in";
    $btn.classList.add("btn", "btn-primary", "btn-block");

    let $form = document.createElement("form");
    $form.className = "container pt-4";
    $form.onsubmit = this.handleLogin;
    appendTo($form, _email, _password);
    $form.append($btn);
    // $form.append(_email.render(), _password.render(), $btn);
    $container.append($title, $form);
    return $container;
  }

  handleLogin = (event) => {
    event.preventDefault();

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

    let tmpState = this.state;
    tmpState.error = error;
    this.setState(tmpState);

    // this.setState({data: data, error: error});
  };
}
