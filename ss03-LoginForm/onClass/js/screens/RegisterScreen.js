import BaseComponent from "../components/BaseComponent.js";
import inputWrapper from "../components/InputWrapper.js";

export default class RegisterScreen extends BaseComponent {
  render() {
    let $container = document.createElement("div");
    let $title = document.createElement("h1");
    $title.innerHTML = "Create an account";
    $title.classList.add("text-center");

    let _name = new inputWrapper({
      placeholder: "Your name",
      type: "text",
      error: "",
      onchange: (event) => {
        console.log(event.target.value);
      },
      favorites: ["a", "b", "c"],
    });
    let _email = new inputWrapper({ placeholder: "Email", type: "email", error: "",});
    let _password = new inputWrapper({ placeholder: "Password", type: "password", error: "", });
    let _confirmPassword = new inputWrapper({ placeholder: "Confirm Password", type: "password", error: "",});

    let $btn = document.createElement("button");
    $btn.innerHTML = "Register";
    $btn.classList.add("btn", "btn-primary", "btn-block");

    $container.append($title, _name.render(), _email.render(), _password.render(), _confirmPassword.render(), $btn);
    return $container;
  }
}
